'use client';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, message, Pagination, Popconfirm, Space, Spin, Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "@/utils/axios";
import FaqModal from "@/components/admin/faq/faqModal";
import {ProfileOutlined} from "@ant-design/icons";
import Image from 'next/image';
import DataIcon from '/public/admin/icon_data.svg';

export default function OverViewInfo() {
    const adminApp = useSelector((state) => state.adminSetting);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
    }, [])



    const [items, setItems] = useState([
        '项目 1',
        '项目 2',
        '项目 3',
        '项目 4',
        '项目 4',
    ]);

    const [data, setData] = useState([]);

    return (
        <>

            <div className="bg-white px-4 py-4 flex flex-col gap-4">
                <h2 className="flex flex-row">
                    <Image
                        src={DataIcon}
                        width={20} // 指定宽度
                        height={20} // 指定高度
                    />
                    <span className="ml-1 text-gray-500">数据统计</span>
                </h2>
                <div className=" flex flex-row gap-4">
                    {items.map((item, index) => (
                        <div key={index} className="bg-gray-50 h-[100px] p-4 flex-1 flex flex-col gap-2">
                            <div className="text-gray-400 text-[12px] ">产品</div>
                            <div className="text-blue-500 text-2xl">29</div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
};