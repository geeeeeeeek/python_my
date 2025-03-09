import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {Image, message, Upload} from 'antd';
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

let imageList = [
    {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-2',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
];

const ImageUpload = ({maxCount, onImageUploadChange}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState(imageList);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const beforeUpload = (file) => {
        return true;
    };

    const handleChange = ({file, fileList: newFileList }) => {
        console.log(file)
        console.log(newFileList)
        setFileList(newFileList);
        if(file.status === 'error'){
            message.error("上传失败")
        }

        let imageUrlArray = [];
        // newFileList.forEach (item => {
        //     if(item.status === 'done'){
        //         imageUrlArray.push(item.url);
        //     }
        // })

        imageUrlArray.push("xxxxxxxxxxxxxxxxxxxxxxxxxxx")
        imageUrlArray.push("yyyyyyyyyyyyyyyyyyyyyyyyyyyy")
        onImageUploadChange(imageUrlArray);
    };
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    const props = {
        name: 'file',
        action: 'https://baidu.io/api/upload',
        headers: {
            authorization: 'authorization-text',
        },
    };

    return (
        <>
            <Upload
                accept="image/*"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                maxCount={maxCount}
                {...props}
            >
                {fileList.length >= maxCount ? null : uploadButton}
            </Upload>
            {previewImage && (
                <Image
                    wrapperStyle={{
                        display: 'none',
                    }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </>
    );
};
export default ImageUpload;