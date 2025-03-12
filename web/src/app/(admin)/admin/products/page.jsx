'use client';
import React, {useEffect, useState} from 'react';
import ProductList from "@/components/admin/product/productList";
import ProductForm from "@/components/admin/product/productForm";
import {useDispatch, useSelector} from "react-redux";
import {setShowForm} from "@/redux/adminSettingSlice";
import {Tabs} from "antd";
import CategoryList from "@/components/admin/category/categoryList";
import {setIsFormOpen} from "@/redux/productFormSlice";


export default function Page() {
    const adminApp = useSelector((state) => state.adminSetting);
    const dispatch = useDispatch();

    const {currentItem, isFormOpen} = useSelector((state) => state.productForm);


    useEffect(() => {
        // 首次加载页面关闭productForm
        dispatch(setIsFormOpen(false));
    }, [])

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: '产品列表',
            children:  <ProductList/>,
        },
        {
            key: '2',
            label: '产品分类',
            children: <CategoryList />,
        },
        {
            key: '3',
            label: '网页信息',
            children: 'Content of Tab Pane 3',
        },
    ];

    return (
        <>
            <div className="bg-gray-100">
                    {
                        isFormOpen ? (
                            <ProductForm/>
                        ) : (
                            <div>
                                <div className="bg-white h-[50px] leading-[50px] font-bold px-5">
                                    产品管理
                                </div>
                                <Tabs
                                    tabBarStyle={{ paddingLeft: '20px',outline:  'none'}}
                                    className="bg-white custom-tab" defaultActiveKey="1" items={items} onChange={onChange} />
                            </div>
                        )
                    }
            </div>
        </>
    );
};