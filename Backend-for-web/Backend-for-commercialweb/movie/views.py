import collections
from django.db.models import query
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, status, generics, filters
from rest_framework.permissions import IsAuthenticated, IsAdminUser

import movie.models
import movie.serializers
from PIL import Image

def secureImage(request, imagePath):
    response = HttpResponse(mimetype="image/jpg")
    img = Image.open(imagePath)
    img.save(response,'jpg')
    return response

# Create your views here.
class QuanLyPhimList(generics.ListAPIView):
    queryset = movie.models.Phim.objects.all()
    serializer_class = movie.serializers.PhimSerializer
    filterset_fields = ['maNhom', 'tenPhim']

class LayThongTinHeThongRapList(generics.ListAPIView):
    queryset = movie.models.HeThongRap.objects.all()
    serializer_class = movie.serializers.HeThongRapSerializer

class LayThongTinCumRapList(generics.ListAPIView):
    serializer_class = movie.serializers.CumRapSerializer

    def get_queryset(self):
        queryset = movie.models.CumRap.objects.all()
        maHeThongRap = self.request.query_params.get('maHeThongRap')
        if maHeThongRap is not None:
            queryset = queryset.filter(heThongRap__maHeThongRap=maHeThongRap)
        return queryset

#Lay Thong Tin Lich Chieu
class LayThongTinLichChieuPhimList(generics.ListAPIView):
    queryset = movie.models.HeThongRap.objects.all()
    serializer_class = movie.serializers.heThongRapChieuForLTTLCP
    serializer_class_phim = movie.serializers.PhimSerializer

    def get_queryset_phim(self):
        queryset = movie.models.Phim.objects.all()
        maPhim = self.request.query_params.get('maPhim')
        if maPhim is not None:
            queryset = queryset.filter(maPhim=maPhim)
        return queryset

    def list(self, request, *args, **kwargs):
        heThongRap = self.serializer_class(self.get_queryset(), many = True, context={'request': request})
        phim = self.serializer_class_phim(self.get_queryset_phim(), many = True, context={'request': request})
        result = {'heThongRapChieu': heThongRap.data}
        for i in range(9):
            result.update(phim.data.pop())
        return Response(result)

class LayDanhSachPhongVe(generics.ListAPIView):
    queryset = movie.models.lichChieuPhim.objects.all()
    serializer_class = movie.serializers.LDSPV
    
    def get_queryset(self):
        queryset = movie.models.lichChieuPhim.objects.all()
        maLichChieu = self.request.query_params.get('maLichChieu') or self.request.query_params.get('MaLichChieu')
        if maLichChieu is not None:
            queryset = queryset.filter(maLichChieu=maLichChieu)
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data[0])

class DatGhe(generics.UpdateAPIView):
    queryset = movie.models.lichChieuPhim.objects.all()
    serializer_class = movie.serializers.DatGhe

class ThemLichSu(generics.CreateAPIView):
    permission_classes = (IsAuthenticated,)

    queryset = movie.models.LichSuDatVe.objects.all()
    serializer_class = movie.serializers.ThemLichSuDatVe

    def create(self, request, *args, **kwargs):
        request.data["taiKhoanNguoiDat"] = request.user.username
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class KiemTraDatVe(generics.ListAPIView):
    permission_classes = (IsAdminUser,)

    queryset = movie.models.LichSuDatVe.objects.all()
    serializer_class = movie.serializers.LichSuDatVe
    filterset_fields = ['maQR']

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        if (serializer.data == []):
            return Response(status=404)
        else:
            return Response(serializer.data)

class LichSuDatVe(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)

    queryset = movie.models.LichSuDatVe.objects.all()
    serializer_class = movie.serializers.LichSuDatVe

    def get_queryset(self):
        user = self.request.user.username
        return movie.models.LichSuDatVe.objects.filter(taiKhoanNguoiDat=user)

class KiemTraVe(generics.UpdateAPIView):
    permission_classes = (IsAdminUser,)

    queryset = movie.models.LichSuDatVe.objects.all()
    serializer_class = movie.serializers.KiemTraVe