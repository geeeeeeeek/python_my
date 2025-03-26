'use client';
import React, {useEffect, useState} from 'react';
import {Button, message, Pagination, Popconfirm, Space, Table} from 'antd';
import Search from "antd/es/input/Search";
import axiosInstance from "@/utils/axios";
import ProductModal from "@/components/admin/product/productModal";


export default function ProductList() {
    const [loading, setLoading] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    // 分页变量
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);


    const openModal = (item) => {
        setModalIsOpen(true);
        setCurrentItem(item)
    };

    const closeModal = (shouldRefresh) => {
        setModalIsOpen(false);
        setCurrentItem(null);
        if (shouldRefresh) {
            fetchData(page, pageSize);
        }
    };


    const columns = [
        {
            title: '产品名称',
            dataIndex: 'title',
            key: 'title',
            width: '240px',
            textWrap: 'word-break',
            ellipsis: true,
            render: (text) => <div>{text}</div>,
        },
        {
            title: '分类',
            dataIndex: 'category_title',
            key: 'category_title',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '摘要',
            dataIndex: 'summary',
            key: 'summary',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '是否启用',
            dataIndex: 'status',
            key: 'status',
            render: (text) => <div>{text === '0' ? '是' : '否'}</div>,
        },
        {
            title: '创建时间',
            dataIndex: 'create_time',
            key: 'create_time',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '操作',
            key: 'action',
            fixed: 'right',
            render: (_, item) => (
                <Space size="middle">
                    <a className="text-adminPrimaryColor" onClick={() => openModal(item)}>编辑</a>
                    <Popconfirm
                        title="确定删除？"
                        okText="确定"
                        cancelText="取消"
                        onConfirm={() => deleteRecord([item.id])}
                    >
                        <a className="text-adminPrimaryColor">删除</a>
                    </Popconfirm>
                    <a className="text-adminPrimaryColor" onClick={() => preview(item)}>预览</a>
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
                if (selected_ids.length === dataList.length && page > 1) {
                    setPage(page - 1);
                } else {
                    fetchData(page, pageSize);
                }
            } else {
                message.error("删除失败")
            }
        } catch (err) {
            console.log(err)
        }
    }

    const fetchData = async (page, pageSize) => {
        try {
            setLoading(true);
            const params = {
                page: page,
                pageSize: pageSize,
                keyword: searchValue
            };
            const {code, total, data} = await axiosInstance.get('/myapp/admin/thing/list', {params});
            if (code === 0) {
                setDataList(data)
                setTotal(total)
                setPage(page);
                setPageSize(pageSize);
            } else {
                message.error("数据获取失败")
            }
            setLoading(false);
        } catch (err) {
            console.log(err)
            message.error("网络异常")
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(page, pageSize);
    }, [page, searchValue])


    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
        setPage(1)
        setSearchValue(value || '')
    }

    const handleChangePage = (page, pageSize) => {
        setPage(page);
        setPageSize(pageSize);
    }


    return (
        <>
            <div className="bg-white px-4 py-4 flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <Button type="primary" onClick={() => openModal({status: '0'})}>新增产品</Button>
                    <Popconfirm
                        title="确定删除？"
                        okText="确定"
                        cancelText="取消"
                        onConfirm={() => deleteRecord(selectedRowKeys)}
                    >
                        <Button disabled={!selectedRowKeys.length > 0}>删除</Button>
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
                <div className="bg-white">
                    <Table columns={columns}
                           dataSource={dataList}
                           size="middle"
                           rowSelection={rowSelection}
                           rowKey={(record) => record.id}
                           pagination={false}
                           scroll={{x: 'max-content'}}
                           showSizeChanger={false}/>
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

            </div>

            {/* 使用 CategoryModal 组件 */}
            <ProductModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                initialItem={currentItem}
            />
        </>
    );
};