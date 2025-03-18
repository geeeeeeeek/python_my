import HeadLabel from "@/components/admin/headLabel";
import FormLabel from "@/components/admin/formLabel";
import React, {useEffect, useState} from "react";
import {Button, Input, Radio} from 'antd';
import ImageUpload from "@/components/admin/imageUpload";
import TextArea from "antd/es/input/TextArea";
import {Divider} from "antd/lib";

const AdditionalSettings = () => {

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
            <div className="px-6 py-6 flex flex-col gap-6">

                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="企业使命"></FormLabel>
                        <TextArea
                            placeholder="请输入描述"
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                            }}
                            showCount
                            maxLength={500}
                            value={currentItem.additional_mission}
                            onChange={(e) => handleInputChange("additional_mission", e.target.value)}
                            style={{width: 600}}
                        />
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="企业任务"></FormLabel>
                        <TextArea
                            placeholder="请输入描述"
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                            }}
                            showCount
                            maxLength={500}
                            value={currentItem.additional_task}
                            onChange={(e) => handleInputChange("additional_task", e.target.value)}
                            style={{width: 600}}
                        />
                    </div>


                    <div className="flex flex-row gap-4">
                        <FormLabel title="微信二维码"></FormLabel>
                        <ImageUpload maxCount={1}
                                     accept="image/*"
                                     imageList={imageList}
                                     onImageUploadChange={handleImageUploadChange}/>
                    </div>
                </div>

                <HeadLabel title="个性化指标" />

                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="指标1"></FormLabel>
                        <Input placeholder="指标名称" value={currentItem.param_one_name}
                               onChange={(e) => handleInputChange("param_one_name", e.target.value)}
                               style={{width: 150}}/>
                        <Input placeholder="指标值" value={currentItem.param_one_value}
                               onChange={(e) => handleInputChange("param_one_value", e.target.value)}
                               style={{width: 150}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="指标2"></FormLabel>
                        <Input placeholder="指标名称" value={currentItem.param_two_name}
                               onChange={(e) => handleInputChange("param_two_name", e.target.value)}
                               style={{width: 150}}/>
                        <Input placeholder="指标值" value={currentItem.param_two_value}
                               onChange={(e) => handleInputChange("param_two_value", e.target.value)}
                               style={{width: 150}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="指标3"></FormLabel>
                        <Input placeholder="指标名称" value={currentItem.param_three_name}
                               onChange={(e) => handleInputChange("param_three_name", e.target.value)}
                               style={{width: 150}}/>
                        <Input placeholder="指标值" value={currentItem.param_three_value}
                               onChange={(e) => handleInputChange("param_three_value", e.target.value)}
                               style={{width: 150}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="指标4"></FormLabel>
                        <Input placeholder="指标名称" value={currentItem.param_four_name}
                               onChange={(e) => handleInputChange("param_four_name", e.target.value)}
                               style={{width: 150}}/>
                        <Input placeholder="指标值" value={currentItem.param_four_value}
                               onChange={(e) => handleInputChange("param_four_value", e.target.value)}
                               style={{width: 150}}/>
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

export default AdditionalSettings;