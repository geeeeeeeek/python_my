'use client';
import React, {useState} from 'react';
import {Button, ConfigProvider, Modal, Pagination, Space, Table, Tag} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {setProductItem, setIsFormOpen} from "@/redux/productFormSlice";
import Search from "antd/es/input/Search";

let obj = {
    id: 112,
    key: '1',
    name: 'John Brown',
    title: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
};

const data = Array.from({length: 10}, () => Object.assign({}, obj));

export default function ProductList() {
    const adminApp = useSelector((state) => state.adminSetting);
    const dispatch = useDispatch();

    const [paginationParams, setPaginationParams] = useState({
        current: 1,
        pageSize: 10,
        total: 30
    });

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) => (
                <Space size="middle">
                    <a>Invite {item.name}</a>
                    <a onClick={() => showProductForm(item)}>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const showProductForm = (item) => {
        dispatch(setIsFormOpen(true));
        dispatch(setProductItem(item))
    }


    const onSearch = (value, _e, info) => console.log(info?.source, value);


    return (
        <>
            <div className=" bg-gray-100 px-4 py-4 flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <Button type="primary" onClick={() => showProductForm({})}>新增产品</Button>
                    <Button>删除</Button>
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
                           rowKey={(record) => record.id}
                           pagination={false}
                           showSizeChanger={false}/>
                    <div className="p-4">
                        <Pagination align='end' current={paginationParams.current}
                                    pageSize={paginationParams.pageSize}
                                    total={paginationParams.total}/>
                    </div>
                </div>

            </div>
        </>
    );
};