from django.urls import path

from myapp import views

app_name = 'myapp'
urlpatterns = [
    # 后台管理api
    path('admin/overview/count', views.admin.overview.count),
    path('admin/overview/sysInfo', views.admin.overview.sysInfo),
    path('admin/thing/list', views.admin.thing.list_api),
    path('admin/thing/detail', views.admin.thing.detail),
    path('admin/thing/create', views.admin.thing.create),
    path('admin/thing/update', views.admin.thing.update),
    path('admin/thing/delete', views.admin.thing.delete),
    path('admin/news/list', views.admin.news.list_api),
    path('admin/news/create', views.admin.news.create),
    path('admin/news/delete', views.admin.news.delete),
    path('admin/news/update', views.admin.news.update),
    path('admin/cdn/uploadImg', views.admin.cdn.upload_img),
    path('admin/cdn/uploadFile', views.admin.cdn.upload_file),
    path('admin/category/list', views.admin.category.list_api),
    path('admin/category/create', views.admin.category.create),
    path('admin/category/update', views.admin.category.update),
    path('admin/category/delete', views.admin.category.delete),
    path('admin/opLog/list', views.admin.opLog.list_api),
    path('admin/opLog/clear', views.admin.opLog.clear),
    path('admin/errorLog/list', views.admin.errorLog.list_api),
    path('admin/errorLog/clear', views.admin.errorLog.clear),
    path('admin/user/list', views.admin.user.list_api),
    path('admin/user/create', views.admin.user.create),
    path('admin/user/delete', views.admin.user.delete),
    path('admin/adminLogin', views.admin.user.admin_login),


    # 前台管理api
    path('index/thing/list', views.index.thing.list_api),
    path('index/thing/detail', views.index.thing.detail),
]
