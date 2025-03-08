'use client';
import React, {useState} from 'react';
import {Button, ConfigProvider, Modal, Pagination, Space, Table, Tag} from 'antd';
import ProductForm from "@/components/admin/productForm";
import {useDispatch, useSelector} from "react-redux";
import {setShowForm, setAdminSetting, setFormState} from "@/redux/adminSettingSlice";
import {resetProductData, setProductData} from "@/redux/productDataSlice";
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

const data = Array.from({ length: 10 }, () => Object.assign({}, obj));

export default function ProductList() {
    const adminApp = useSelector((state) => state.adminSetting);
    const dispatch = useDispatch();

    const [tableParams, setTableParams] = useState({
        pagination: {
            position: ['bottomLeft'],
            current: 1,
            pageSize: 10,
            total:30
        },
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
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, {tags}) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a onClick={() => editRecord(record)}>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const editRecord = (record) => {
        console.log(record);
        dispatch(setProductData(record))
        dispatch(setFormState('edit')) // 编辑
        dispatch(setShowForm(true))
    };

    const showAddPanel = () => {
        dispatch(resetProductData()) // 重置
        dispatch(setFormState('add')) // 新增
        dispatch(setShowForm(true))
    }

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
        });

        // `dataSource` is useless since `pageSize` changed
        // if (pagination.pageSize !== tableParams.pagination?.pageSize) {
        //     setData([]);
        // }
    };

    const onSearch = (value, _e, info) => console.log(info?.source, value);


    return (
        <>
            {/*<div className="bg-white h-[50px] leading-[50px] font-bold px-5">*/}
            {/*    产品列表*/}
            {/*</div>*/}
            <div className=" bg-gray-100 px-4 py-4 flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <Button type="primary" onClick={showAddPanel}>新增产品</Button>
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
                <Table columns={columns}
                       dataSource={data}
                       rowKey={(record) => record.id}
                       pagination={tableParams.pagination}
                       onChange={handleTableChange}
                       className="shadow-md bg-white"/>
            </div>
        </>
    );
};