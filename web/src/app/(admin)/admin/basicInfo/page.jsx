'use client';
import React, {useEffect, useState} from 'react';
import {Tabs} from "antd";
import ProductList from "@/components/admin/product/productList";
import CategoryList from "@/components/admin/category/categoryList";
import PageConfig from "@/components/admin/product/pageConfig";
import SiteSettings from "@/components/admin/basicInfo/siteSettings";
import TdkSettings from "@/components/admin/basicInfo/tdkSettings";
import GlobalSettings from "@/components/admin/basicInfo/globalSettings";
import AdditionalSettings from "@/components/admin/basicInfo/additionalSettings";

export default function Page() {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: '网站信息',
            children: <SiteSettings />,
        },
        {
            key: '2',
            label: 'TDK信息',
            children: <TdkSettings />,
        },
        {
            key: '3',
            label: '全局变量',
            children: <GlobalSettings />,
        },
        {
            key: '4',
            label: '附加变量',
            children: <AdditionalSettings />,
        },
    ];

    return (
        <>
            <div className="bg-gray-100 px-4 py-4">
                <div>
                    <Tabs
                        tabBarStyle={{paddingLeft: '20px', outline: 'none'}}
                        className="bg-white custom-tab" defaultActiveKey="1" items={items} onChange={onChange}/>
                </div>
            </div>
        </>
    );
};