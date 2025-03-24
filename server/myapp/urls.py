from django.urls import path

from myapp import views

app_name = 'myapp'
urlpatterns = [
    # 后台管理api
    path('admin/overview/count', views.admin.overview.count),
    path('admin/overview/dataCount', views.admin.overview.dataCount),
    path('admin/thing/list', views.admin.thing.list_api),
    path('admin/thing/detail', views.admin.thing.detail),
    path('admin/thing/create', views.admin.thing.create),
    path('admin/thing/update', views.admin.thing.update),
    path('admin/thing/delete', views.admin.thing.delete),
    path('admin/news/list', views.admin.news.list_api),
    path('admin/news/create', views.admin.news.create),
    path('admin/news/delete', views.admin.news.delete),
    path('admin/news/update', views.admin.news.update),
    path('admin/case/list', views.admin.case.list_api),
    path('admin/case/create', views.admin.case.create),
    path('admin/case/delete', views.admin.case.delete),
    path('admin/case/update', views.admin.case.update),
    path('admin/faq/list', views.admin.faq.list_api),
    path('admin/faq/create', views.admin.faq.create),
    path('admin/faq/delete', views.admin.faq.delete),
    path('admin/faq/update', views.admin.faq.update),
    path('admin/download/list', views.admin.download.list_api),
    path('admin/download/create', views.admin.download.create),
    path('admin/download/delete', views.admin.download.delete),
    path('admin/download/update', views.admin.download.update),
    path('admin/inquiry/list', views.admin.inquiry.list_api),
    path('admin/inquiry/create', views.admin.inquiry.create),
    path('admin/inquiry/delete', views.admin.inquiry.delete),
    path('admin/inquiry/update', views.admin.inquiry.update),
    path('admin/basicSite/list', views.admin.basicSite.list_api),
    path('admin/basicSite/create', views.admin.basicSite.create),
    path('admin/basicSite/update', views.admin.basicSite.update),
    path('admin/cdn/uploadImg', views.admin.cdn.upload_img),
    path('admin/cdn/uploadNormalFile', views.admin.cdn.upload_normal_file),
    path('admin/cdn/uploadFile', views.admin.cdn.upload_file),
    path('admin/category/list', views.admin.category.list_api),
    path('admin/category/create', views.admin.category.create),
    path('admin/category/update', views.admin.category.update),
    path('admin/category/delete', views.admin.category.delete),
    path('admin/opLog/list', views.admin.opLog.list_api),
    path('admin/opLog/deleteAll', views.admin.opLog.deleteAll),
    path('admin/opLog/delete', views.admin.opLog.delete),
    path('admin/user/list', views.admin.user.list_api),
    path('admin/user/create', views.admin.user.create),
    path('admin/user/delete', views.admin.user.delete),
    path('admin/user/updatePwd', views.admin.user.updatePwd),
    path('admin/adminLogin', views.admin.user.admin_login),


    # 前台管理api
    path('index/thing/list', views.index.thing.list_api),
    path('index/thing/detail', views.index.thing.detail),
]
