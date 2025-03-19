'use client';

import FormLabel from "@/components/admin/formLabel";
import React, {useEffect, useState} from "react";
import {Button, Input, Radio} from 'antd';
import ImageUpload from "@/components/admin/imageUpload";
import {Divider} from "antd/lib";

const GlobalSettings = () => {

    const [currentItem, setCurrentItem] = useState({});
    // 为了制造Upload而用
    const [imageList, setImageList] = useState([]);



    useEffect(() => {

        // 制造适合Upload的数据格式
        if (currentItem?.global_wechat_qrcode?.length > 0) {
            setImageList(currentItem?.global_wechat_qrcode?.split("#").map((item) => ({
                success: true,
                name: item,
                status: 'done',
                url: process.env.NEXT_PUBLIC_BASE_URL + '/upload/img/' + item,
            })));
        } else {
            setImageList([]);
        }

    }, []);


    const handleInputChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    }

    const handleSave = async () => {
        console.log(currentItem);
    };

    const handleImageUploadChange = (imageUrlList) => {
        let cover = (imageUrlList && imageUrlList.length > 0) ? imageUrlList.join("#") : null;
        setCurrentItem((prev) => ({...prev, cover: cover}));
    };

    return (
        <>
            <div className="px-6 py-6">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="客服电话"></FormLabel>
                        <Input placeholder="请输入客服电话" value={currentItem.global_phone}
                               onChange={(e) => handleInputChange("global_phone", e.target.value)}
                               style={{width: 400}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="邮箱地址"></FormLabel>
                        <Input placeholder="请输入邮箱地址" value={currentItem.global_email}
                               onChange={(e) => handleInputChange("global_email", e.target.value)}
                               style={{width: 400}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="公司名称"></FormLabel>
                        <Input placeholder="请输入公司名称" value={currentItem.global_company_name}
                               onChange={(e) => handleInputChange("global_company_name", e.target.value)}
                               style={{width: 400}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="公司地址"></FormLabel>
                        <Input placeholder="请输入公司地址" value={currentItem.global_address}
                               onChange={(e) => handleInputChange("global_address", e.target.value)}
                               style={{width: 400}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="微信二维码"></FormLabel>
                        <ImageUpload maxCount={1}
                                     accept="image/*"
                                     imageList={imageList}
                                     onImageUploadChange={handleImageUploadChange}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="微信号"></FormLabel>
                        <Input placeholder="请输入微信号" value={currentItem.global_wechat}
                               onChange={(e) => handleInputChange("global_wechat", e.target.value)}
                               style={{width: 400}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="Facebook"></FormLabel>
                        <Input placeholder="请输入Facebook" value={currentItem.global_facebook}
                               onChange={(e) => handleInputChange("global_facebook", e.target.value)}
                               style={{width: 400}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="Twitter"></FormLabel>
                        <Input placeholder="请输入Twitter" value={currentItem.global_twitter}
                               onChange={(e) => handleInputChange("global_twitter", e.target.value)}
                               style={{width: 400}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="Linkedin"></FormLabel>
                        <Input placeholder="请输入Twitter" value={currentItem.global_linkedin}
                               onChange={(e) => handleInputChange("global_linkedin", e.target.value)}
                               style={{width: 400}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="Whatsapp"></FormLabel>
                        <Input placeholder="请输入Twitter" value={currentItem.global_whatsapp}
                               onChange={(e) => handleInputChange("global_whatsapp", e.target.value)}
                               style={{width: 400}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="Youtube"></FormLabel>
                        <Input placeholder="请输入Youtube" value={currentItem.global_youtube}
                               onChange={(e) => handleInputChange("global_youtube", e.target.value)}
                               style={{width: 400}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="Instagram"></FormLabel>
                        <Input placeholder="请输入Instagram" value={currentItem.global_instagram}
                               onChange={(e) => handleInputChange("global_instagram", e.target.value)}
                               style={{width: 400}}/>
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

export default GlobalSettings;