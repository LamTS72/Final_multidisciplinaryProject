from django.contrib import admin
import movie.models

# Register your models here.
admin.site.register(movie.models.Phim)
admin.site.register(movie.models.HeThongRap)
admin.site.register(movie.models.CumRap)
admin.site.register(movie.models.lichChieuPhim)
admin.site.register(movie.models.Rap)
admin.site.register(movie.models.Ghe)
admin.site.register(movie.models.LichSuDatVe)