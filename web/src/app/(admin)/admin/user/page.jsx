'use client';
import React, {useEffect, useState} from 'react';
import {Button, ConfigProvider, message, Modal, Pagination, Popconfirm, Space, Spin, Table, Tabs, Tag} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import Search from "antd/es/input/Search";
import axios from "axios";
import axiosInstance from "@/utils/axios";
import NewsModal from "@/components/admin/news/newsModal";

export default function Page() {
    const adminApp = useSelector((state) => state.adminSetting);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '账号',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
            render: (text) => <div>{text==='1'? '管理员':'演示账号'}</div>,
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

    const fetchData = async () => {
        try {
            setLoading(true);
            const {code, data} = await axiosInstance.get('/myapp/admin/user/list');
            if (code === 0) {
                setData(data)
            } else {
                message.error("数据获取失败")
            }
            setLoading(false);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    const [data, setData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    const openModal = (item) => {
        setModalIsOpen(true);
        setCurrentItem(item)
    };

    const closeModal = (shouldRefresh) => {
        setModalIsOpen(false);
        setCurrentItem(null);
        if (shouldRefresh) {
            fetchData();
        }
    };

    const deleteRecord = async (item) => {
        try {
            const {code, data} = await axiosInstance.post('/myapp/admin/user/delete', {id: item.id});
            if (code === 0) {
                message.success("删除成功")
                fetchData();
            } else {
                message.error("删除失败")
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>

            <div className="bg-gray-100">
                <div>
                    <div className="bg-white h-[50px] leading-[50px] font-bold px-5">
                        管理员管理
                    </div>
                    <Spin spinning={loading} tip="">
                        <div className=" bg-gray-100 px-4 py-4 flex flex-col gap-4">
                            <div className="flex flex-row gap-4">
                                <Button type="primary" onClick={() => openModal({sort: 0})}>新增</Button>
                            </div>
                            <Table columns={columns}
                                   dataSource={data}
                                   rowKey={(record) => record.id}
                                   pagination={false}
                                   className="shadow-md bg-white"/>
                        </div>
                    </Spin>
                </div>
            </div>


            {/* 使用 CategoryModal 组件 */}
            <NewsModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                initialItem={currentItem}
            />

        </>
    );
};