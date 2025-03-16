import os
from pathlib import Path

from django.core.files.storage import default_storage
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes

from myapp import utils
from myapp.auth.authentication import AdminTokenAuthtication
from myapp.handler import APIResponse
from server.settings import MEDIA_ROOT, BASE_HOST_URL


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
def upload_img(request):
    if request.method == 'POST':
        # 确保存在文件
        myfile = request.FILES.get('my-file')
        if not myfile:
            return JsonResponse({"code": 1, "message": "No file uploaded."}, status=400)

        # 打印文件大小
        file_size = myfile.size
        print('Uploaded file size:', file_size)

        # 文件类型和大小验证
        max_size = 5 * 1024 * 1024  # 5MB
        valid_extensions = ['.jpg', '.jpeg', '.png', '.gif']  # 允许的文件扩展名

        if file_size > max_size:
            return JsonResponse({"code": 1, "message": "图片太大，需小于5MB"})

        file_extension = Path(myfile.name).suffix
        if file_extension not in valid_extensions:
            return JsonResponse({"code": 1, "message": "非法文件格式"})

        # 生成新文件名
        new_name = f"{utils.get_timestamp()}{file_extension}"

        # 拼接保存路径
        save_path = os.path.join(MEDIA_ROOT, 'img', new_name)
        print('save_path------------', save_path)

        # 保存文件
        try:
            # 使用 Django 的默认存储来保存文件
            full_path = default_storage.save(os.path.join('img', new_name), myfile)
            print('File saved at:', full_path)

            resp_json = {
                "code": 0,
                "data": new_name
            }
            return JsonResponse(resp_json)

        except Exception as e:
            print('Error saving file:', e)
            return JsonResponse({"code": 1, "message": "Error saving file."})

    return JsonResponse({"code": 1, "message": "Invalid request method."})


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
def upload_file(request):
    if request.method == 'POST':
        # 确保存在文件
        myfile = request.FILES.get('my-file')
        if not myfile:
            return JsonResponse({"errno": 1, "message": "No file uploaded."}, status=400)

        # 打印文件大小
        file_size = myfile.size
        print('Uploaded file size:', file_size)

        # 文件类型和大小验证
        max_size = 5 * 1024 * 1024  # 5MB
        valid_extensions = ['.mp4', '.jpeg', '.jpg', '.png']  # 允许的文件扩展名

        if file_size > max_size:
            return JsonResponse({"errno": 1, "message": "图片太大，需小于5MB"})

        file_extension = Path(myfile.name).suffix
        if file_extension not in valid_extensions:
            return JsonResponse({"errno": 1, "message": "非法文件格式"})

        # 生成新文件名
        new_name = f"{utils.get_timestamp()}{file_extension}"

        # 拼接保存路径
        save_path = os.path.join(MEDIA_ROOT, 'file', new_name)
        print('save_path------------', save_path)

        # 保存文件
        try:
            # 使用 Django 的默认存储来保存文件
            full_path = default_storage.save(os.path.join('file', new_name), myfile)
            print('File saved at:', full_path)

            resp_json = {
                "errno": 0,
                "data": {
                    "url": BASE_HOST_URL + '/upload/file/' + new_name,
                }
            }
            return JsonResponse(resp_json)

        except Exception as e:
            print('Error saving file:', e)
            return JsonResponse({"errno": 1, "message": "Error saving file."})

    return JsonResponse({"errno": 1, "message": "Invalid request method."})
