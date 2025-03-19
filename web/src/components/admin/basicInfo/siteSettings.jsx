'use client';
import FormLabel from "@/components/admin/formLabel";
import React, {useEffect, useState} from "react";
import {Button, Input, Radio} from 'antd';
import ImageUpload from "@/components/admin/imageUpload";
import TextArea from "antd/es/input/TextArea";
import {Divider} from "antd/lib";

const SiteSettings = () => {

    const [currentItem, setCurrentItem] = useState({});
    // 为了制造Upload而用（Logo）
    const [imageList, setImageList] = useState([]);
    // 为了制造Upload而用（ICO）
    const [icoImageList, setIcoImageList] = useState([]);

    const handleInputChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };
    const handleRadioGroupChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };

    const handleImageUploadChange = (imageUrlList) => {
        let logo = (imageUrlList && imageUrlList.length > 0) ? imageUrlList.join("#") : null;
        setCurrentItem((prev) => ({...prev, logo: logo}));
    };

    const handleIcoImageUploadChange = (imageUrlList) => {
        let ico = (imageUrlList && imageUrlList.length > 0) ? imageUrlList.join("#") : null;
        setCurrentItem((prev) => ({...prev, ico: ico}));
    };

    const handleSave = async () => {
        console.log(currentItem);
    };

    useEffect(() => {
        
        // 制造适合Upload的数据格式（Logo）
        if (currentItem?.logo?.length > 0) {
            setImageList(currentItem?.logo?.split("#").map((item) => ({
                success: true,
                name: item,
                status: 'done',
                url: process.env.NEXT_PUBLIC_BASE_URL + '/upload/img/' + item,
            })));
        } else {
            setImageList([]);
        }

        // 制造适合Upload的数据格式（ICO）
        if (currentItem?.ico?.length > 0) {
            setIcoImageList(currentItem?.ico?.split("#").map((item) => ({
                success: true,
                name: item,
                status: 'done',
                url: process.env.NEXT_PUBLIC_BASE_URL + '/upload/img/' + item,
            })));
        } else {
            setIcoImageList([]);
        }

    }, []);


    return (
        <>
            <div className="px-6">
                <div className="flex flex-col gap-6 py-6">

                    <div className="flex flex-row gap-4">
                        <FormLabel title="网站状态"></FormLabel>
                        <Radio.Group
                            onChange={(e)=>handleRadioGroupChange("status", e.target.value)}
                            value={currentItem.status}
                            options={[
                                { value: 1, label: '开启' },
                                { value: 2, label: '关闭' }
                            ]}
                            />
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="网站名称"></FormLabel>
                        <Input placeholder="请输入网站名称" value={currentItem.title}
                               onChange={(e) => handleInputChange("title", e.target.value)}
                               style={{width: 300}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="网站简称"></FormLabel>
                        <Input placeholder="请输入网站简称" value={currentItem.title}
                               onChange={(e) => handleInputChange("title", e.target.value)}
                               style={{width: 300}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="网站Logo"></FormLabel>
                        <ImageUpload maxCount={1}
                                     accept="image/*"
                                     imageList={imageList}
                                     onImageUploadChange={handleImageUploadChange}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="ico图标"></FormLabel>
                        <ImageUpload maxCount={1}
                                     accept="image/x-icon"
                                     imageList={icoImageList}
                                     onImageUploadChange={handleIcoImageUploadChange}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="网站网址"></FormLabel>
                        <Input placeholder="请输入网站网址" value={currentItem.url}
                               onChange={(e) => handleInputChange("url", e.target.value)}
                               style={{width: 300}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="版权信息"></FormLabel>
                        <Input placeholder="请输入版权信息" value={currentItem.copyright}
                               onChange={(e) => handleInputChange("copyright", e.target.value)}
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
                            value={currentItem.head_additional_code}
                            onChange={(e) => handleInputChange("head_additional_code", e.target.value)}
                            style={{width: 600}}
                        />
                    </div>
                </div>

                <Divider />

                <div className="pb-6 flex flex-row gap-4 justify-start">
                    <Button type="primary" onClick={handleSave}>提交</Button>
                </div>
            </div>
        </>
    );
}

export default SiteSettings;