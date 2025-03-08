'use client';
import React, {useEffect, useState} from 'react';
import ProductList from "@/components/admin/productList";
import ProductForm from "@/components/admin/productForm";
import {useDispatch, useSelector} from "react-redux";
import {setShowForm} from "@/redux/adminSettingSlice";
import {Tabs} from "antd";


export default function Page() {
    const adminApp = useSelector((state) => state.adminSetting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setShowForm(false))
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
            children: 'Content of Tab Pane 2',
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
                        adminApp.showForm ? (
                            <ProductForm/>
                        ) : (
                            // <ProductList/>
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