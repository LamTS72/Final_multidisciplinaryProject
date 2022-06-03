from django.db.models import query
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, status, generics, filters
from rest_framework.permissions import IsAuthenticated
import users.models
import users.serializers

class QuanLyNguoiDungList(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)

    queryset = users.models.CustomUser.objects.all()
    serializer_class = users.serializers.UserSerializer

    def get_queryset(self):
        user = self.request.user.username
        return users.models.CustomUser.objects.filter(username = user)

class QuanLyNguoiDungPost(generics.UpdateAPIView):
    permission_classes = (IsAuthenticated,)
    
    queryset = users.models.CustomUser.objects.all()
    serializer_class = users.serializers.UpdateUserSerializer
    lookup_field = 'username'