'use client';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, message, Pagination, Popconfirm, Space, Spin, Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "@/utils/axios";
import Image from 'next/image';
import DataIcon from '/public/admin/icon_data.svg';

export default function OverViewInfo() {

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const {code, data} = await axiosInstance.get('/myapp/admin/overview/dataCount');
            if (code === 0) {
                setData(data)
            } else {
                message.error("数据获取失败")
            }
        } catch (err) {
            console.log(err)
        }
    }


    const [data, setData] = useState({});

    return (
        <>

            <div className="bg-white px-4 py-4 flex flex-col gap-4">
                <h2 className="flex flex-row">
                    <Image
                        src={DataIcon}
                        width={20}
                        height={20}
                    />
                    <span className="ml-1 text-gray-500">数据统计</span>
                </h2>
                <div className=" flex flex-row gap-4">
                    {/*'inquiry_count': inquiry_count,*/}
                    {/*'visit_count': visit_count,*/}
                    {/*'product_count': total_counts['product_count'],*/}
                    {/*'news_count': news_counts['news_count'],*/}
                    {/*'case_count': case_counts['case_count'],*/}
                    <div
                        className="rounded-lg bg-gradient-to-b from-[#e1e5f5] to-[#e1e5f5]  h-[100px] p-4 flex-1 flex flex-col gap-3">
                        <div className="text-[#001e30] text-[14px] font-light ">今日询盘</div>
                        <div className="text-[#001e30] text-2xl font-light">{data.inquiry_count || '0'}</div>
                    </div>
                    <div
                        className="rounded-lg bg-gradient-to-b from-[#e1e5f5] to-[#e1e5f5]  h-[100px] p-4 flex-1 flex flex-col gap-3">
                        <div className="text-[#001e30] text-[14px] font-light ">今日访客</div>
                        <div className="text-[#001e30] text-2xl font-light">{data.visit_count || '0'}</div>
                    </div>
                    <div
                        className="rounded-lg bg-gradient-to-b from-[#e1e5f5] to-[#e1e5f5]  h-[100px] p-4 flex-1 flex flex-col gap-3">
                        <div className="text-[#001e30] text-[14px] font-light ">产品数</div>
                        <div className="text-[#001e30] text-2xl font-light">{data.product_count || '0'}</div>
                    </div>
                    <div
                        className="rounded-lg bg-gradient-to-b from-[#e1e5f5] to-[#e1e5f5]  h-[100px] p-4 flex-1 flex flex-col gap-3">
                        <div className="text-[#001e30] text-[14px] font-light ">新闻数</div>
                        <div className="text-[#001e30] text-2xl font-light">{data.news_count || '0'}</div>
                    </div>
                    <div
                        className="rounded-lg bg-gradient-to-b from-[#e1e5f5] to-[#e1e5f5]  h-[100px] p-4 flex-1 flex flex-col gap-3">
                        <div className="text-[#001e30] text-[14px] font-light ">案例数</div>
                        <div className="text-[#001e30] text-2xl font-light">{data.case_count || '0'}</div>
                    </div>
                </div>
            </div>


        </>
    );
};