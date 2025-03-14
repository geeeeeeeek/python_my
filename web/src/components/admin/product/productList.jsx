'use client';
import React, {useEffect, useState} from 'react';
import {Button, message, Pagination, Popconfirm, Space, Table} from 'antd';
import Search from "antd/es/input/Search";
import axiosInstance from "@/utils/axios";
import ProductModal from "@/components/admin/product/productModal";


export default function ProductList() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);


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

    const [paginationParams, setPaginationParams] = useState({
        current: 1,
        pageSize: 10,
        total: 0
    });

    const columns = [
        {
            title: '产品名称',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '分类',
            dataIndex: 'category_title',
            key: 'category_title',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '操作',
            key: 'action',
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
                    <a onClick={() => preview(item)}>预览</a>
                </Space>
            ),
        },
    ];

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const preview = (item) => {
    }

    const deleteRecord = async (selected_ids) => {
        try {
            const {code, data} = await axiosInstance.post('/myapp/admin/thing/delete', {ids: selected_ids.join(',')});
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

    const fetchData = async () => {
        try {
            setLoading(true);
            const params = {
                page: paginationParams.current,
                pageSize: paginationParams.pageSize
            };
            const {code, total, data} = await axiosInstance.get('/myapp/admin/thing/list', {params});
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
    }, [paginationParams.current])


    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const handleChangePage = (page, pageSize) => {
        setPaginationParams(pre => ({
            ...pre,
            current: page,
            pageSize: pageSize
        }))
    }


    return (
        <>
            <div className=" bg-gray-100 px-4 py-4 flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <Button type="primary" onClick={() => openModal({})}>新增产品</Button>
                    <Popconfirm
                        title="确定删除？"
                        okText="确定"
                        cancelText="取消"
                        onConfirm={() => deleteRecord(selectedRowKeys)}
                    >
                        <Button disabled={!selectedRowKeys.length > 0 }>删除</Button>
                    </Popconfirm>
                    <Search
                        placeholder="搜索产品"
                        allowClear
                        onSearch={onSearch}
                        style={{
                            width: 200,
                            marginLeft: 'auto',
                        }}
                    />
                </div>
                <div className="bg-white shadow-md">
                    <Table columns={columns}
                           dataSource={data}
                           rowSelection={rowSelection}
                           rowKey={(record) => record.id}
                           pagination={false}
                           showSizeChanger={false}/>
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

            </div>

            {/* 使用 EditModal 组件 */}
            <ProductModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                initialItem={currentItem}
            />
        </>
    );
};