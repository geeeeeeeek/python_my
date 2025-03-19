'use client';

import HeadLabel from "@/components/admin/headLabel";
import FormLabel from "@/components/admin/formLabel";
import React, {useEffect, useState} from "react";
import {Button, Input, Radio} from 'antd';
import TextArea from "antd/es/input/TextArea";
import {Divider} from "antd/lib";

const TdkSettings = () => {

    const [currentItem, setCurrentItem] = useState({});

    const handleInputChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };
    const handleRadioGroupChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };

    const handleSave = async () => {
        console.log(currentItem);
    };


    return (
        <>
            <div className="px-6 py-6">
                <HeadLabel title="首页TDK信息" />
                <div className="flex flex-col gap-4 px-2 py-6">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="标题"></FormLabel>
                        <Input placeholder="请输入标题" value={currentItem.seo_home_title}
                               onChange={(e) => handleInputChange("seo_home_title", e.target.value)}
                               style={{width: 300}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="关键词"></FormLabel>
                        <Input placeholder="请输入关键词" value={currentItem.seo_home_keywords}
                               onChange={(e) => handleInputChange("seo_home_keywords", e.target.value)}
                               style={{width: 600}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="描述"></FormLabel>
                        <TextArea
                            placeholder="请输入描述"
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                            }}
                            showCount
                            maxLength={250}
                            value={currentItem.seo_home_description}
                            onChange={(e) => handleInputChange("seo_home_description", e.target.value)}
                            style={{width: 600}}
                        />
                    </div>
                </div>
                <HeadLabel title="产品页TDK信息" />
                <div className="flex flex-col gap-4 px-2  py-6">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="标题"></FormLabel>
                        <Input placeholder="请输入标题" value={currentItem.seo_product_title}
                               onChange={(e) => handleInputChange("seo_product_title", e.target.value)}
                               style={{width: 300}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="关键词"></FormLabel>
                        <Input placeholder="请输入关键词" value={currentItem.seo_product_keywords}
                               onChange={(e) => handleInputChange("seo_product_keywords", e.target.value)}
                               style={{width: 600}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="描述"></FormLabel>
                        <TextArea
                            placeholder="请输入描述"
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                            }}
                            showCount
                            maxLength={250}
                            value={currentItem.seo_product_description}
                            onChange={(e) => handleInputChange("seo_product_description", e.target.value)}
                            style={{width: 600}}
                        />
                    </div>
                </div>
                <HeadLabel title="关于页TDK信息" />
                <div className="flex flex-col gap-4 px-2  py-6">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="标题"></FormLabel>
                        <Input placeholder="请输入标题" value={currentItem.seo_about_title}
                               onChange={(e) => handleInputChange("seo_about_title", e.target.value)}
                               style={{width: 300}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="关键词"></FormLabel>
                        <Input placeholder="请输入关键词" value={currentItem.seo_about_keywords}
                               onChange={(e) => handleInputChange("seo_about_keywords", e.target.value)}
                               style={{width: 600}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="描述"></FormLabel>
                        <TextArea
                            placeholder="请输入描述"
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                            }}
                            showCount
                            maxLength={250}
                            value={currentItem.seo_about_description}
                            onChange={(e) => handleInputChange("seo_about_description", e.target.value)}
                            style={{width: 600}}
                        />
                    </div>
                </div>
                <HeadLabel title="联系页TDK信息" />
                <div className="flex flex-col gap-4 px-2  py-6">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="标题"></FormLabel>
                        <Input placeholder="请输入标题" value={currentItem.seo_contact_title}
                               onChange={(e) => handleInputChange("seo_contact_title", e.target.value)}
                               style={{width: 300}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="关键词"></FormLabel>
                        <Input placeholder="请输入关键词" value={currentItem.seo_contact_keywords}
                               onChange={(e) => handleInputChange("seo_contact_keywords", e.target.value)}
                               style={{width: 600}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="描述"></FormLabel>
                        <TextArea
                            placeholder="请输入描述"
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                            }}
                            showCount
                            maxLength={250}
                            value={currentItem.seo_contact_description}
                            onChange={(e) => handleInputChange("seo_contact_description", e.target.value)}
                            style={{width: 600}}
                        />
                    </div>
                </div>
                <HeadLabel title="新闻页TDK信息" />
                <div className="flex flex-col gap-4 px-2  py-6">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="标题"></FormLabel>
                        <Input placeholder="请输入标题" value={currentItem.seo_news_title}
                               onChange={(e) => handleInputChange("seo_news_title", e.target.value)}
                               style={{width: 300}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="关键词"></FormLabel>
                        <Input placeholder="请输入关键词" value={currentItem.seo_news_keywords}
                               onChange={(e) => handleInputChange("seo_news_keywords", e.target.value)}
                               style={{width: 600}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="描述"></FormLabel>
                        <TextArea
                            placeholder="请输入描述"
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                            }}
                            showCount
                            maxLength={250}
                            value={currentItem.seo_news_description}
                            onChange={(e) => handleInputChange("seo_news_description", e.target.value)}
                            style={{width: 600}}
                        />
                    </div>
                </div>
                <HeadLabel title="案例页TDK信息" />
                <div className="flex flex-col gap-4 px-2  py-6">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="标题"></FormLabel>
                        <Input placeholder="请输入标题" value={currentItem.seo_case_title}
                               onChange={(e) => handleInputChange("seo_case_title", e.target.value)}
                               style={{width: 300}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="关键词"></FormLabel>
                        <Input placeholder="请输入关键词" value={currentItem.seo_case_keywords}
                               onChange={(e) => handleInputChange("seo_case_keywords", e.target.value)}
                               style={{width: 600}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="描述"></FormLabel>
                        <TextArea
                            placeholder="请输入描述"
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                            }}
                            showCount
                            maxLength={250}
                            value={currentItem.seo_case_description}
                            onChange={(e) => handleInputChange("seo_case_description", e.target.value)}
                            style={{width: 600}}
                        />
                    </div>
                </div>
                <HeadLabel title="下载页TDK信息" />
                <div className="flex flex-col gap-4 px-2  py-6">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="标题"></FormLabel>
                        <Input placeholder="请输入标题" value={currentItem.seo_download_title}
                               onChange={(e) => handleInputChange("seo_download_title", e.target.value)}
                               style={{width: 300}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="关键词"></FormLabel>
                        <Input placeholder="请输入关键词" value={currentItem.seo_download_keywords}
                               onChange={(e) => handleInputChange("seo_download_keywords", e.target.value)}
                               style={{width: 600}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="描述"></FormLabel>
                        <TextArea
                            placeholder="请输入描述"
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                            }}
                            showCount
                            maxLength={250}
                            value={currentItem.seo_download_description}
                            onChange={(e) => handleInputChange("seo_download_description", e.target.value)}
                            style={{width: 600}}
                        />
                    </div>
                </div>
                <HeadLabel title="Faq页TDK信息" />
                <div className="flex flex-col gap-4 px-2  py-6">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="标题"></FormLabel>
                        <Input placeholder="请输入标题" value={currentItem.seo_faq_title}
                               onChange={(e) => handleInputChange("seo_faq_title", e.target.value)}
                               style={{width: 300}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="关键词"></FormLabel>
                        <Input placeholder="请输入关键词" value={currentItem.seo_faq_keywords}
                               onChange={(e) => handleInputChange("seo_faq_keywords", e.target.value)}
                               style={{width: 600}}/>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FormLabel title="描述"></FormLabel>
                        <TextArea
                            placeholder="请输入描述"
                            autoSize={{
                                minRows: 3,
                                maxRows: 6,
                            }}
                            showCount
                            maxLength={250}
                            value={currentItem.seo_faq_description}
                            onChange={(e) => handleInputChange("seo_faq_description", e.target.value)}
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

export default TdkSettings;