'use client';
import FormLabel from "@/components/admin/formLabel";
import React, {useCallback, useEffect, useState} from "react";
import {Button, Input, message, Pagination, Popconfirm, Radio, Space, Spin, Table} from 'antd';
import axiosInstance from "@/utils/axios";
import {useDispatch, useSelector} from "react-redux";
import CommentModal from "@/components/admin/basicInfo/commentModal";

const CommentSettings = () => {

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
            title: '客户姓名',
            dataIndex: 'comment_name',
            key: 'comment_name',
            width: '180px',
            textWrap: 'word-break',
        },
        {
            title: '客户地区',
            dataIndex: 'comment_location',
            key: 'comment_location',
            width: '150px',
            textWrap: 'word-break',
        },
        {
            title: '客户评价',
            dataIndex: 'comment_content',
            key: 'comment_content',
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

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const params = {
                page: paginationParams.current,
                pageSize: paginationParams.pageSize,
                keyword: searchValue
            };
            const {code,total, data} = await axiosInstance.get('/myapp/admin/comment/list',{params});
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
    },[paginationParams.current, searchValue])

    useEffect(() => {
        fetchData();
    }, [fetchData])


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
            const {code, data} = await axiosInstance.post('/myapp/admin/comment/delete', {ids: selected_ids.join(',')});
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


    const handleChangePage = (page, pageSize) => {
        setPaginationParams(pre => ({
            ...pre,
            current: page,
            pageSize: pageSize
        }))
    }

    return (
        <>

            <div className="bg-white">
                <div>
                    <Spin spinning={loading} tip="">
                        <div className=" px-4 py-4 flex flex-col gap-4">
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
                            </div>
                            <Table columns={columns}
                                   dataSource={data}
                                   size="middle"
                                   rowSelection={rowSelection}
                                   rowKey={(record) => record.id}
                                   pagination={false}
                                   scroll={{ x: 'max-content' }}
                                   showSizeChanger={false}
                            />

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


            <CommentModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                initialItem={currentItem}
            />

        </>
    );
}

export default CommentSettings;