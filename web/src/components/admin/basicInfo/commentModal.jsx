'use client';
import React, {useEffect, useState} from "react";
import {Button, Divider, Input, InputNumber, message, Modal, Spin} from "antd";
import FormLabel from "@/components/admin/formLabel";
import axiosInstance from "@/utils/axios";
import TextArea from "antd/es/input/TextArea";

const CommentModal = ({isOpen, onRequestClose, initialItem}) => {
    const [currentItem, setCurrentItem] = useState(initialItem || {});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setCurrentItem(initialItem || {});

    }, [initialItem]);


    const handleInputChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };


    const handleSave = async () => {
        try {
            const post_url = currentItem.id ? '/myapp/admin/comment/update' : '/myapp/admin/comment/create';
            const formData = new FormData();
            if (currentItem.id) {
                formData.append('id', currentItem.id);
            }
            if(!currentItem.comment_name){
                message.error('不能为空')
                return;
            }
            formData.append('comment_name', currentItem.comment_name || '');
            formData.append('comment_location', currentItem.comment_location || '');
            formData.append('comment_content', currentItem.comment_content || '');
            setLoading(true);
            const {code, msg, data} = await axiosInstance.post(post_url, formData);
            if (code === 0) {
                message.success("操作成功")
                onRequestClose(true);
            } else {
                message.error(msg || '网络异常')
            }
            setLoading(false);
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    };

    console.log('current-----------', currentItem)


    return (
        <Modal
            title={currentItem.id ? '编辑' : '新增'}
            centered
            open={isOpen}
            onCancel={() => onRequestClose(false)}
            footer={null}
            width={900}
        >

            <Spin spinning={loading} tip="">
                <div className="flex flex-col">
                    <div className="">
                        <div className="">
                            <div className="flex flex-col gap-4 pt-4 pb-0">
                                <div className="flex flex-row gap-4">
                                    <FormLabel title="客户姓名" required={true}></FormLabel>
                                    <Input placeholder="请输入" value={currentItem.comment_name}
                                           onChange={(e) => handleInputChange("comment_name", e.target.value)}
                                           style={{width: 600}}/>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <FormLabel title="客户地区" required={true}></FormLabel>
                                    <Input placeholder="请输入" value={currentItem.comment_location}
                                           onChange={(e) => handleInputChange("comment_location", e.target.value)}
                                           style={{width: 600}}/>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <FormLabel title="客户评价" required={true}></FormLabel>
                                    <TextArea
                                        placeholder="请输入摘要"
                                        autoSize={{
                                            minRows: 3,
                                            maxRows: 6,
                                        }}
                                        showCount
                                        maxLength={600}
                                        value={currentItem.comment_content}
                                        onChange={(e) => handleInputChange("comment_content", e.target.value)}
                                        style={{width: 600}}
                                    />
                                </div>

                            </div>

                            <Divider/>


                            <div className="flex flex-row gap-4 justify-start">
                                <Button type="primary" onClick={handleSave}>提交</Button>
                                <Button onClick={() => onRequestClose(false)}>取消</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>
        </Modal>

    );
};

export default CommentModal;