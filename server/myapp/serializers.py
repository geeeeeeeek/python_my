from rest_framework import serializers

from myapp.models import Thing, Category, User, OpLog, ErrorLog, News, Case, Faq, Inquiry, Download, BasicSite, \
    BasicTdk, BasicBanner


class ThingSerializer(serializers.ModelSerializer):
    create_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False)
    # 额外字段
    category_title = serializers.ReadOnlyField(source='category.title')

    class Meta:
        model = Thing
        fields = '__all__'


class DetailThingSerializer(serializers.ModelSerializer):
    # 额外字段
    category_title = serializers.ReadOnlyField(source='category.title')

    class Meta:
        model = Thing
        # 排除多对多字段
        exclude = ('wish', 'collect',)


class UpdateThingSerializer(serializers.ModelSerializer):
    # 额外字段
    category_title = serializers.ReadOnlyField(source='category.title')

    class Meta:
        model = Thing
        fields = '__all__'
        # 排除多对多字段


class ListThingSerializer(serializers.ModelSerializer):
    create_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False)
    # 额外字段
    category_title = serializers.ReadOnlyField(source='category.title')

    class Meta:
        model = Thing
        # 排除字段
        exclude = ('wish', 'collect',)


class CategorySerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'pid', 'title', 'sort', 'cover', 'children']

    def get_children(self, obj):
        # 获取当前类别的所有子类别，并根据 sort 排序
        children = Category.objects.filter(pid=obj.id).order_by('sort', '-id')
        # 如果有子类，继续序列化；如果没有则返回 None
        if children.exists():
            return CategorySerializer(children, many=True).data
        return None  # 如果没有子类则返回 None


class NewsSerializer(serializers.ModelSerializer):
    create_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False)

    class Meta:
        model = News
        fields = '__all__'


class FaqSerializer(serializers.ModelSerializer):
    create_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False)

    class Meta:
        model = Faq
        fields = '__all__'


class InquirySerializer(serializers.ModelSerializer):
    create_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False)

    class Meta:
        model = Inquiry
        fields = '__all__'


class CaseSerializer(serializers.ModelSerializer):
    create_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False)

    class Meta:
        model = Case
        fields = '__all__'


class DownloadSerializer(serializers.ModelSerializer):
    create_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False)

    class Meta:
        model = Download
        fields = '__all__'


class BasicSiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicSite
        fields = '__all__'


class BasicTdkSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicTdk
        fields = '__all__'


class BasicBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicBanner
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    create_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False)

    class Meta:
        model = User
        fields = '__all__'
        # exclude = ('password',)


class OpLogSerializer(serializers.ModelSerializer):
    re_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False)

    class Meta:
        model = OpLog
        fields = '__all__'


class ErrorLogSerializer(serializers.ModelSerializer):
    log_time = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False)

    class Meta:
        model = ErrorLog
        fields = '__all__'
