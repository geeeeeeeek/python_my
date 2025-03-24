from django.core.exceptions import ObjectDoesNotExist
from django.db import models


class User(models.Model):
    STATUS_CHOICES = (
        ('0', '正常'),
        ('1', '封号'),
    )
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=50, null=True)
    password = models.CharField(max_length=50, null=True)
    role = models.CharField(max_length=2, blank=True, null=True)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='0')
    nickname = models.CharField(blank=True, null=True, max_length=20)
    mobile = models.CharField(max_length=13, blank=True, null=True)
    email = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField(max_length=200, null=True)
    create_time = models.DateTimeField(auto_now_add=True, null=True)
    admin_token = models.CharField(max_length=32, blank=True, null=True)
    token = models.CharField(max_length=32, blank=True, null=True)
    exp = models.CharField(max_length=32, blank=True, null=True)

    class Meta:
        db_table = "b_user"


class Category(models.Model):
    list_display = ("title", "id")
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    cover = models.CharField(max_length=200, blank=True, null=True)
    pid = models.BigIntegerField(default=-1)
    sort = models.IntegerField(default=0)
    create_time = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = "b_category"


class Thing(models.Model):
    STATUS_CHOICES = (
        ('0', '上架'),
        ('1', '下架'),
    )
    id = models.BigAutoField(primary_key=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True,
                                 related_name='category_thing')
    title = models.CharField(max_length=100, blank=True, null=True)
    summary = models.CharField(max_length=500, blank=True, null=True)
    cover = models.CharField(max_length=1000, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    price = models.CharField(max_length=10, blank=True, null=True)
    seo_title = models.CharField(max_length=100, blank=True, null=True)
    seo_description = models.CharField(max_length=500, blank=True, null=True)
    seo_keywords = models.CharField(max_length=200, blank=True, null=True)
    properties = models.CharField(max_length=500, blank=True, null=True)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='0')
    create_time = models.DateTimeField(auto_now_add=True, null=True)
    pv = models.IntegerField(default=0)
    rate = models.IntegerField(default=3)  # 评分

    class Meta:
        db_table = "b_thing"


class News(models.Model):
    STATUS_CHOICES = (
        ('0', '上架'),
        ('1', '下架'),
    )
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    summary = models.CharField(max_length=500, blank=True, null=True)
    source = models.CharField(max_length=100, blank=True, null=True)
    cover = models.CharField(max_length=1000, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    seo_title = models.CharField(max_length=100, blank=True, null=True)
    seo_description = models.CharField(max_length=500, blank=True, null=True)
    seo_keywords = models.CharField(max_length=200, blank=True, null=True)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='0')
    create_time = models.DateTimeField(auto_now_add=True, null=True)
    pv = models.IntegerField(default=0)

    class Meta:
        db_table = "b_news"


class Case(models.Model):
    STATUS_CHOICES = (
        ('0', '上架'),
        ('1', '下架'),
    )
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    cover = models.CharField(max_length=1000, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    seo_title = models.CharField(max_length=100, blank=True, null=True)
    seo_description = models.CharField(max_length=500, blank=True, null=True)
    seo_keywords = models.CharField(max_length=200, blank=True, null=True)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='0')
    create_time = models.DateTimeField(auto_now_add=True, null=True)
    pv = models.IntegerField(default=0)

    class Meta:
        db_table = "b_case"


class Faq(models.Model):
    STATUS_CHOICES = (
        ('0', '上架'),
        ('1', '下架'),
    )
    id = models.BigAutoField(primary_key=True)
    question = models.CharField(max_length=200, blank=True, null=True)
    reply = models.CharField(max_length=500, blank=True, null=True)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='0')
    create_time = models.DateTimeField(auto_now_add=True, null=True)
    pv = models.IntegerField(default=0)

    class Meta:
        db_table = "b_faq"


class Inquiry(models.Model):
    STATUS_CHOICES = (
        ('0', '上架'),
        ('1', '下架'),
    )
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    tel = models.CharField(max_length=50, blank=True, null=True)
    email = models.CharField(max_length=30, blank=True, null=True)
    company = models.CharField(max_length=100, blank=True, null=True)
    message = models.CharField(max_length=500, blank=True, null=True)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='0')
    create_time = models.DateTimeField(auto_now_add=True, null=True)
    pv = models.IntegerField(default=0)

    class Meta:
        db_table = "b_inquiry"


class Download(models.Model):
    STATUS_CHOICES = (
        ('0', '上架'),
        ('1', '下架'),
    )
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    summary = models.CharField(max_length=1000, blank=True, null=True)
    raw = models.CharField(max_length=1000, blank=True, null=True)
    link = models.CharField(max_length=1000, blank=True, null=True)  # 外部链接
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='0')
    create_time = models.DateTimeField(auto_now_add=True, null=True)
    pv = models.IntegerField(default=0)

    class Meta:
        db_table = "b_download"


class BasicSite(models.Model):
    id = models.BigAutoField(primary_key=True)
    status = models.CharField(max_length=2, blank=True, null=True)  # 网站状态
    site_name = models.CharField(max_length=100, blank=True, null=True)  # 网站名称
    site_nickname = models.CharField(max_length=100, blank=True, null=True)  # 网站简称
    site_logo = models.CharField(max_length=100, blank=True, null=True)  # 网站logo
    site_ico = models.CharField(max_length=100, blank=True, null=True)  # 网站ico
    site_address = models.CharField(max_length=100, blank=True, null=True)  # 网站网址
    site_copyright = models.CharField(max_length=100, blank=True, null=True)  # 版权信息
    site_code = models.CharField(max_length=1000, blank=True, null=True)  # 第三方代码

    class Meta:
        db_table = "b_basic_site"

    @classmethod
    def get_solo(cls):
        try:
            return cls.objects.get()
        except ObjectDoesNotExist:
            return None

    def save(self, *args, **kwargs):
        if not self.pk and BasicSite.objects.exists():
            raise ValueError("There can only be one instance.")
        return super().save(*args, **kwargs)


class OpLog(models.Model):
    id = models.BigAutoField(primary_key=True)
    re_ip = models.CharField(max_length=100, blank=True, null=True)
    re_time = models.DateTimeField(auto_now_add=True, null=True)
    re_url = models.CharField(max_length=200, blank=True, null=True)
    re_method = models.CharField(max_length=10, blank=True, null=True)
    re_content = models.CharField(max_length=200, blank=True, null=True)
    access_time = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        db_table = "b_op_log"


class ErrorLog(models.Model):
    id = models.BigAutoField(primary_key=True)
    ip = models.CharField(max_length=100, blank=True, null=True)
    url = models.CharField(max_length=200, blank=True, null=True)
    method = models.CharField(max_length=10, blank=True, null=True)
    content = models.CharField(max_length=200, blank=True, null=True)
    log_time = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        db_table = "b_error_log"
