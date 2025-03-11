'use client';
import React, {useState} from 'react';
import {Button, ConfigProvider, Modal, Pagination, Space, Table, Tag} from 'antd';
import ProductForm from "@/components/admin/productForm";
import {useDispatch, useSelector} from "react-redux";
import Search from "antd/es/input/Search";
import EditModal from "@/components/admin/category/editModal";

export default function CategoryList() {
    const adminApp = useSelector((state) => state.adminSetting);
    const dispatch = useDispatch();


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '分类名称',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) => (
                <Space size="middle">
                    <a onClick={() => openModal(item)}>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];


    const initialData = [
        {id: 1, title: 'Alice', sort: 25},
        {id: 2, title: 'Bob', sort: 30},
        {id: 3, title: 'Charlie', sort: 35},
    ];

    const [data, setData] = useState(initialData);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    const openModal = (item) => {
        setModalIsOpen(true);
        setCurrentItem(item)
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentItem(null);
    };

    const handleSave = (updatedItem) => {
        if (updatedItem.id) {
            // 编辑已有数据
            setData((prevData) =>
                prevData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
            );
        } else {
            // 新增数据
            const newItem = {id: Date.now(), ...updatedItem}; // 用时间戳生成唯一 ID
            setData((prevData) => [...prevData, newItem]);
        }
    };

    return (
        <>
            <div className=" bg-gray-100 px-4 py-4 flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <Button type="primary" onClick={() => openModal({})}>新增分类</Button>
                </div>
                <Table columns={columns}
                       dataSource={data}
                       rowKey={(record) => record.id}
                       pagination={false}
                       className="shadow-md bg-white"/>
            </div>

            {/* 使用 EditModal 组件 */}
            <EditModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                initialItem={currentItem}
                onSave={handleSave}
            />

        </>
    );
};