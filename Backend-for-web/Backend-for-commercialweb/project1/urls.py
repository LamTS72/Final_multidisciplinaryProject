"""project1 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path
from django.urls.conf import re_path
from movie import views
from movie.models import HeThongRap
from . import settings
from project1.settings import STATIC_URL
from users import views as users_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/QuanLyPhim/LayDanhSachPhim', views.QuanLyPhimList.as_view()),
    path('api/QuanLyRap/LayThongTinHeThongRap',views.LayThongTinHeThongRapList.as_view()), #Xem He Thong Rap
    path('api/QuanLyRap/LayThongTinCumRapTheoHeThong',views.LayThongTinCumRapList.as_view()),#Xem Cụm Rạp
    path('api/QuanLyRap/LayThongTinLichChieuPhim',views.LayThongTinLichChieuPhimList.as_view()), #Xem lịch chiếu
    path('api/QuanLyDatVe/LayDanhSachPhongVe', views.LayDanhSachPhongVe.as_view()),
    url(r'^api/QuanLyNguoiDung/', include('rest_auth.urls')),
    url(r'^api/QuanLyNguoiDung/DangKy', include('rest_auth.registration.urls')),
    path('api/ThongTinNguoiDung/<str:username>', users_view.QuanLyNguoiDungPost.as_view()),
    path('api/ThongTinNguoiDung', users_view.QuanLyNguoiDungList.as_view()),
    path('api/QuanLyDatVe/DatVe/<int:pk>', views.DatGhe.as_view()),
    path('api/QuanLyLichSu/Them', views.ThemLichSu.as_view()),
    path('api/KiemTraDatVe', views.KiemTraDatVe.as_view()),
    path('api/KiemTraDatVe/<str:pk>', views.KiemTraVe.as_view()),
    path('api/LichSuDatVe', views.LichSuDatVe.as_view())
]