'use client';
import React, {useEffect, useState} from 'react';
import {Button, ConfigProvider, message, Modal, Pagination, Popconfirm, Space, Spin, Table, Tabs, Tag} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import Search from "antd/es/input/Search";
import axios from "axios";
import axiosInstance from "@/utils/axios";
import CaseModal from "@/components/admin/case/caseModal";

export default function Page() {
    const adminApp = useSelector((state) => state.adminSetting);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    const [paginationParams, setPaginationParams] = useState({
        current: 1,
        pageSize: 10,
        total: 0
    });

    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            width: '400px',
            textWrap: 'word-break',
        },
        {
            title: '创建时间',
            dataIndex: 'create_time',
            key: 'create_time',
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            width: '180px',
            render: (_, item) => (
                <Space size="middle">
                    <a onClick={() => openModal(item)}>编辑</a>
                    <Popconfirm
                        title="确定删除？"
                        okText="确定"
                        cancelText="取消"
                        onConfirm={() => deleteRecord([item.id])}
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
            const params = {
                page: paginationParams.current,
                pageSize: paginationParams.pageSize,
                keyword: searchValue
            };
            const {code,total, data} = await axiosInstance.get('/myapp/admin/case/list',{params});
            if (code === 0) {
                setData(data)
                setPaginationParams({
                    ...paginationParams,
                    total: total
                })
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
    }, [paginationParams.current, searchValue])


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

    const deleteRecord = async (selected_ids) => {
        try {
            const {code, data} = await axiosInstance.post('/myapp/admin/case/delete', {ids: selected_ids.join(',')});
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

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
        setPaginationParams(pre => ({
            ...pre,
            current: 1,
        }))
        setSearchValue(value || '');
    }

    const handleChangePage = (page, pageSize) => {
        setPaginationParams(pre => ({
            ...pre,
            current: page,
            pageSize: pageSize
        }))
    }

    return (
        <>

            <div className="bg-gray-100">
                <div>
                    <div className="bg-white h-[50px] leading-[50px] font-bold px-5">
                        案例管理
                    </div>
                    <Spin spinning={loading} tip="">
                        <div className=" bg-gray-100 px-4 py-4 flex flex-col gap-4">
                            <div className="flex flex-row gap-4">
                                <Button type="primary" onClick={() => openModal({sort: 0})}>新增</Button>
                                <Popconfirm
                                    title="确定删除？"
                                    okText="确定"
                                    cancelText="取消"
                                    onConfirm={() => deleteRecord(selectedRowKeys)}
                                >
                                    <Button disabled={!selectedRowKeys.length > 0 }>删除</Button>
                                </Popconfirm>
                                <Search
                                    placeholder="搜索案例"
                                    allowClear
                                    onSearch={onSearch}
                                    style={{
                                        width: 200,
                                        marginLeft: 'auto',
                                    }}
                                />
                            </div>
                            <Table columns={columns}
                                   dataSource={data}
                                   size="middle"
                                   rowSelection={rowSelection}
                                   rowKey={(record) => record.id}
                                   pagination={false}
                                   scroll={{ x: 'max-content' }}
                                   showSizeChanger={false}
                                   className="shadow-md bg-white"/>

                            <div className="p-4">
                                <Pagination align='end'
                                            current={paginationParams.current}
                                            pageSize={paginationParams.pageSize}
                                            total={paginationParams.total}
                                            showTotal={(total) => `共 ${total} 条`}
                                            onChange={handleChangePage}
                                />
                            </div>
                        </div>
                    </Spin>
                </div>
            </div>


            <CaseModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                initialItem={currentItem}
            />

        </>
    );
};