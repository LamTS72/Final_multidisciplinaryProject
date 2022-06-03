from django.db import models
from django.db.models.deletion import CASCADE
from django.dispatch import receiver
from django.db.models.signals import post_save
from uuid import uuid4

# Create your models here.
class Phim(models.Model):
    maPhim = models.IntegerField(primary_key=True)
    tenPhim = models.CharField(max_length=50)
    biDanh = models.CharField(max_length=50)
    trailer = models.TextField()
    hinhAnh = models.FileField(upload_to='images')
    moTa = models.TextField()
    maNhom = models.TextField()
    ngayKhoiChieu = models.DateTimeField()
    danhGia = models.IntegerField()
    thoiLuong = models.IntegerField(default = 0)
    daoDien = models.TextField(default = 'Add in')
    dienVien = models.TextField(default = 'Add in')
    theLoai = models.TextField(default = 'Add in')
    format = models.TextField(default = 'Add in')

    def __str__(self):
        return self.tenPhim

class HeThongRap(models.Model):
    maHeThongRap = models.CharField(max_length=50, primary_key=True)
    tenHeThongRap = models.CharField(max_length=50)
    biDanh = models.CharField(max_length=50)
    logo = models.FileField(upload_to='images')
    
    def __str__(self):
        return self.tenHeThongRap

class CumRap(models.Model):
    heThongRap = models.ForeignKey(HeThongRap, related_name='cumrap', on_delete=CASCADE)
    maCumRap = models.CharField(max_length=50, primary_key=True)
    tenCumRap = models.CharField(max_length=50)
    diaChi = models.CharField(max_length=100)

    def __str__(self):
        return self.tenCumRap

class Rap(models.Model):
    cumRap = models.ForeignKey(CumRap, related_name='rap', on_delete=CASCADE)
    maRap = models.IntegerField(primary_key=True)
    tenRap = models.CharField(max_length=10)

    def __str__(self):
        return self.cumRap.tenCumRap + " - " + self.tenRap

class lichChieuPhim(models.Model):
    rap = models.ForeignKey(Rap, related_name='lichChieu', on_delete=CASCADE)
    phim = models.ForeignKey(Phim, related_name='lichChieu', on_delete=CASCADE)
    maLichChieu = models.IntegerField(primary_key=True)
    ngayChieuGioChieu = models.DateTimeField()
    giaVe = models.IntegerField()
    thoiLuong = models.IntegerField()

    def __str__(self):
        return self.phim.__str__() + " - " + self.ngayChieuGioChieu.strftime("%d/%m/%Y") + " - " + self.rap.__str__() + " - " + str(self.maLichChieu)

class Ghe(models.Model):
    lichChieu = models.ForeignKey(lichChieuPhim, related_name='ghe', on_delete=CASCADE)
    maGhe = models.AutoField(primary_key=True)
    tenGhe = models.CharField(max_length=4)
    loaiGhe = models.CharField(max_length=10)
    stt = models.CharField(max_length=4)
    giaVe = models.IntegerField()
    daDat = models.BooleanField()
    taiKhoanNguoiDat = models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.lichChieu.__str__() + " - " + self.tenGhe

@receiver(post_save, sender=lichChieuPhim)
def make_ghe(sender, instance, created, **kwargs):
    if created:
        for i in range(160):
            if (35 <= i+1 <= 46 or 51 <= i+1 <= 62 or 67 <= i+1 <= 78 or 83 <= i+1 <= 94 or 99 <= i+1 <= 110 or 115 <= i+1 <= 126):
                Ghe.objects.create(
                    lichChieu = instance,
                    tenGhe = str(i+1),
                    loaiGhe = "Vip",
                    stt = str(i+1),
                    giaVe = instance.giaVe,
                    daDat = False,
                    taiKhoanNguoiDat = None
                )
            else:
                Ghe.objects.create(
                    lichChieu = instance,
                    tenGhe = str(i+1),
                    loaiGhe = "Thuong",
                    stt = str(i+1),
                    giaVe = instance.giaVe,
                    daDat = False,
                    taiKhoanNguoiDat = None
                )

class LichSuDatVe(models.Model):
    maQR = models.UUIDField(primary_key = True, default = uuid4, max_length=30, null=False, editable = False, unique=True)
    lichChieu = models.ForeignKey(lichChieuPhim, related_name='lichChieu', null=False, on_delete=CASCADE)
    taiKhoanNguoiDat = models.CharField(max_length=20, null=False)
    giaVe = models.IntegerField(null=False)
    danhSachMaGhe = models.TextField(null=False)
    isValid = models.BooleanField(default=True)

    def __str__(self):
        return self.lichChieu.__str__() + " - " + self.taiKhoanNguoiDat