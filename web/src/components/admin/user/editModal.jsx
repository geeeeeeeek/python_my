import React, {useEffect, useState} from "react";
import {Button, Divider, Input, InputNumber, message, Modal, Spin} from "antd";
import FormLabel from "@/components/admin/formLabel";
import ImageUpload from "@/components/admin/imageUpload";
import axiosInstance from "@/utils/axios";

const EditModal = ({isOpen, onRequestClose, initialItem}) => {
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
            if (!currentItem.username || !currentItem.password) {
                message.error("不能为空");
                return;
            }
            setLoading(true);
            const post_url = currentItem.id ? '/myapp/admin/user/update' : '/myapp/admin/user/create';
            const formData = new FormData();
            if (currentItem.id) {
                formData.append('id', currentItem.id);
            }
            formData.append('username', currentItem.username);
            formData.append('password', currentItem.password);
            formData.append('role', '1');
            formData.append('status', '0');
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
            width={600}
        >

            <Spin spinning={loading} tip="">
                <div className="flex flex-col">
                    <div className="">
                        <div className="">
                            <div className="flex flex-col gap-4 pt-4 pb-0">
                                <div className="flex flex-row gap-4">
                                    <FormLabel title="用户名" required={true}></FormLabel>
                                    <Input placeholder="请输入用户名" value={currentItem.username}
                                           onChange={(e) => handleInputChange("username", e.target.value)}
                                           style={{width: 400}}/>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <FormLabel title="密码" required={true}></FormLabel>
                                    <Input placeholder="请输入密码" value={currentItem.password}
                                           onChange={(e) => handleInputChange("password", e.target.value)}
                                           style={{width: 400}}/>
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

export default EditModal;