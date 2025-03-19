'use client';
import React, {useEffect, useState} from 'react';
import {Button, ConfigProvider, message, Modal, Pagination, Popconfirm, Space, Spin, Table, Tabs, Tag} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import Search from "antd/es/input/Search";
import axios from "axios";
import axiosInstance from "@/utils/axios";
import NewsModal from "@/components/admin/news/newsModal";

export default function InquiryList() {
    const adminApp = useSelector((state) => state.adminSetting);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [dataList, setDataList] = useState([]);

    // 分页变量
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);
    const [total, setTotal] = useState(0);


    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: '120px',
            textWrap: 'word-break',
            ellipsis: true,
        },
        {
            title: '电话',
            dataIndex: 'tel',
            key: 'tel',
            width: '150px',
            textWrap: 'word-break',
            ellipsis: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '150px',
            textWrap: 'word-break',
            ellipsis: true,
        },
        {
            title: '公司',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: '消息',
            dataIndex: 'message',
            key: 'message',
        },
        {
            title: '时间',
            dataIndex: 'create_time',
            key: 'create_time',
            width: '150px',
            textWrap: 'word-break',
            ellipsis: true,
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (_, item) => (
                <Space size="middle">

                    <Popconfirm
                        title="确定删除？"
                        okText="确定"
                        cancelText="取消"
                        onConfirm={() => deleteRecord(item)}
                    >
                        <a>删除</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const fetchData = async (page) => {
        setPage(page);
        try {
            setLoading(true);
            const params = {
                page: page,
                pageSize: pageSize,
            };
            const {code, total, data} = await axiosInstance.get('/myapp/admin/inquiry/list', {params});
            if (code === 0) {
                setDataList(data)
                setTotal(total)
            } else {
                message.error("数据获取失败")
            }
            setLoading(false);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData(page);
    }, [])


    const [currentItem, setCurrentItem] = useState(null);


    const deleteRecord = async (item) => {
        try {
            const {code, data} = await axiosInstance.post('/myapp/admin/inquiry/delete', {ids: item.id + ''});
            if (code === 0) {
                message.success("删除成功")
                console.log('kkkkkkkkkkkk', dataList.size, page)
                if (dataList.length <= 1 && page > 1) {
                    fetchData(page - 1);
                } else {
                    fetchData(page);
                }
            } else {
                message.error("删除失败")
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleChangePage = (page, pageSize) => {
        fetchData(page);
        setPage(page);
        setPageSize(pageSize)
    }

    return (
        <>

            <div className="bg-white">
                <div>
                    <Spin spinning={loading} tip="">
                        <div className=" px-4 py-4 flex flex-col gap-4">
                            <div className="flex flex-row gap-4">
                            </div>
                            <Table columns={columns}
                                   dataSource={dataList}
                                   size="middle"
                                   rowKey={(record) => record.id}
                                   pagination={false}
                                   className=""/>
                            <div className="p-4">
                                <Pagination align='end'
                                            current={page}
                                            pageSize={pageSize}
                                            total={total}
                                            showTotal={(total) => `共 ${total} 条`}
                                            onChange={handleChangePage}
                                />
                            </div>
                        </div>
                    </Spin>
                </div>
            </div>

        </>
    );
};