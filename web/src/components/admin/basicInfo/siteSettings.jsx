'use client';
import FormLabel from "@/components/admin/formLabel";
import React, {useEffect, useState} from "react";
import {Button, Input, message, Radio, Spin} from 'antd';
import ImageUpload from "@/components/admin/imageUpload";
import TextArea from "antd/es/input/TextArea";
import {Divider} from "antd/lib";
import axiosInstance from "@/utils/axios";

const SiteSettings = () => {

    const [currentItem, setCurrentItem] = useState({});
    const [loading, setLoading] = useState(false);
    // 为了制造Upload而用（Logo）
    const [imageList, setImageList] = useState([]);
    // 为了制造Upload而用（ICO）
    const [icoImageList, setIcoImageList] = useState([]);


    const fetchData = async () => {
        try {
            setLoading(true)
            const {code, msg, data} = await axiosInstance.get('/myapp/admin/basicSite/list');
            if (code === 0) {
                setCurrentItem(data);
                fixToImageData(data);
            } else {
                message.error(msg || '网络异常')
            }
            setLoading(false)
        } catch (err) {
            console.log(err)
            message.error('网络异常')
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const fixToImageData = (initialData) => {
        // 制造适合Upload的数据格式（Logo）
        if (initialData?.site_logo?.length > 0) {
            setImageList(initialData?.site_logo?.split("#").map((item) => ({
                success: true,
                name: item,
                status: 'done',
                url: process.env.NEXT_PUBLIC_BASE_URL + '/upload/img/' + item,
            })));
        } else {
            setImageList([]);
        }

        // 制造适合Upload的数据格式（ICO）
        if (initialData?.site_ico?.length > 0) {
            setIcoImageList(initialData?.site_ico?.split("#").map((item) => ({
                success: true,
                name: item,
                status: 'done',
                url: process.env.NEXT_PUBLIC_BASE_URL + '/upload/img/' + item,
            })));
        } else {
            setIcoImageList([]);
        }
    }


    const handleInputChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };
    const handleRadioGroupChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };

    const handleImageUploadChange = (imageUrlList, name) => {
        let value = (imageUrlList && imageUrlList.length > 0) ? imageUrlList.join("#") : null;
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };


    const handleSave = async () => {
        console.log(currentItem);
        try {
            const post_url = '/myapp/admin/basicSite/update';
            const formData = new FormData();
            formData.append('status', currentItem.status || '1');
            formData.append('site_name', currentItem.site_name || '');
            formData.append('site_nickname', currentItem.site_nickname || '');
            formData.append('site_logo', currentItem.site_logo || '');
            formData.append('site_ico', currentItem.site_ico || '');
            formData.append('site_address', currentItem.site_address || '');
            formData.append('site_copyright', currentItem.site_copyright || '');
            formData.append('site_code', currentItem.site_code || '');
            const {code, msg, data} = await axiosInstance.post(post_url, formData);
            if (code === 0) {
                message.success("操作成功");
                fetchData()
            } else {
                message.error(msg || '网络异常')
            }
        } catch (err) {
            console.log(err)
        }
    };


    console.log('currentItem---------------', currentItem);

    return (
        <>
            <Spin spinning={loading}>
                <div className="px-6">

                    <div className="flex flex-col gap-6 py-6">

                        <div className="flex flex-row gap-4">
                            <FormLabel title="网站状态"></FormLabel>
                            <Radio.Group
                                onChange={(e) => handleRadioGroupChange("status", e.target.value)}
                                value={currentItem.status}
                                options={[
                                    {value: '1', label: '开启'},
                                    {value: '2', label: '关闭'}
                                ]}
                            />
                        </div>
                        <div className="flex flex-row gap-4">
                            <FormLabel title="网站名称"></FormLabel>
                            <Input placeholder="请输入网站名称" value={currentItem.site_name}
                                   onChange={(e) => handleInputChange("site_name", e.target.value)}
                                   style={{width: 300}}/>
                        </div>
                        <div className="flex flex-row gap-4">
                            <FormLabel title="网站简称"></FormLabel>
                            <Input placeholder="请输入网站简称" value={currentItem.site_nickname}
                                   onChange={(e) => handleInputChange("site_nickname", e.target.value)}
                                   style={{width: 300}}/>
                        </div>
                        <div className="flex flex-row gap-4">
                            <FormLabel title="网站Logo"></FormLabel>
                            <ImageUpload maxCount={1}
                                         maxSize={2}
                                         accept="image/*"
                                         imageList={imageList}
                                         onImageUploadChange={(imageUrlList) => handleImageUploadChange(imageUrlList, 'site_logo')}/>
                        </div>
                        <div className="flex flex-row gap-4">
                            <FormLabel title="ico图标"></FormLabel>
                            <ImageUpload maxCount={1}
                                         maxSize={1}
                                         accept="image/x-icon"
                                         imageList={icoImageList}
                                         onImageUploadChange={(imageUrlList) => handleImageUploadChange(imageUrlList, 'site_ico')}/>
                        </div>
                        <div className="flex flex-row gap-4">
                            <FormLabel title="网站网址"></FormLabel>
                            <Input placeholder="请输入网站网址" value={currentItem.site_address}
                                   onChange={(e) => handleInputChange("site_address", e.target.value)}
                                   style={{width: 300}}/>
                        </div>
                        <div className="flex flex-row gap-4">
                            <FormLabel title="版权信息"></FormLabel>
                            <Input placeholder="请输入版权信息" value={currentItem.site_copyright}
                                   onChange={(e) => handleInputChange("site_copyright", e.target.value)}
                                   style={{width: 300}}/>
                        </div>
                        <div className="flex flex-row gap-4">
                            <FormLabel title="第三方代码"></FormLabel>
                            <TextArea
                                placeholder="如：百度统计、谷歌统计代码。代码会被放到<head>中"
                                autoSize={{
                                    minRows: 3,
                                    maxRows: 6,
                                }}
                                showCount
                                maxLength={800}
                                value={currentItem.site_code}
                                onChange={(e) => handleInputChange("site_code", e.target.value)}
                                style={{width: 600}}
                            />
                        </div>
                    </div>

                    <Divider/>

                    <div className="pb-6 flex flex-row gap-4 justify-start">
                        <Button type="primary" onClick={handleSave}>提交</Button>
                    </div>
                </div>
            </Spin>
        </>
    );
}

export default SiteSettings;