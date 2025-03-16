'use client';
import React, {useEffect, useState} from 'react';
import ProductList from "@/components/admin/product/productList";
import {Tabs} from "antd";
import CategoryList from "@/components/admin/category/categoryList";
import PageConfig from "@/components/admin/product/pageConfig";


export default function Page() {


    useEffect(() => {
    }, [])

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: '产品列表',
            children: <ProductList/>,
        },
        {
            key: '2',
            label: '产品分类',
            children: <CategoryList/>,
        },
        {
            key: '3',
            label: '网页配置',
            children: <PageConfig />,
        },
    ];

    return (
        <>
            <div className="bg-gray-100">
                <div>
                    <div className="bg-white h-[50px] leading-[50px] font-bold px-5">
                        产品管理
                    </div>
                    <Tabs
                        tabBarStyle={{paddingLeft: '20px', outline: 'none'}}
                        className="bg-white custom-tab" defaultActiveKey="1" items={items} onChange={onChange}/>
                </div>
            </div>
        </>
    );
};