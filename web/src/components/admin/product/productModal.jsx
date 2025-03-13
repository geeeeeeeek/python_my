import React, {useEffect, useState} from 'react';
import {
    Button,
    DatePicker, Divider,
    Form,
    Input,
    Mentions, message, Modal,
    Segmented,
    Select,
    TreeSelect,
} from 'antd';
import LabelPanel from "@/components/admin/labelPanel";
import FormLabel from "@/components/admin/formLabel";
import axiosInstance from "@/utils/axios";

const ProductModal = ({isOpen, onRequestClose, initialItem}) => {

    const [currentItem, setCurrentItem] = useState(initialItem || {})

    const [loading, setLoading] = useState(false);

    const divRef = React.useRef(null);


    useEffect(() => {
        setCurrentItem(initialItem || {})
        if (divRef.current) {
            divRef.current.scrollTop = 0; // 滚动到 0
        }
    }, [initialItem])

    const commit = () => {
        console.log("commit-->", currentItem);
        // todo 参数检查
        handleSave()
    }

    const handleSave = async () => {

        if (!currentItem.title) {
            message.error("请输入名称");
            return;
        }
        try {
            setLoading(true);
            const post_url = currentItem.id ? '/myapp/admin/thing/update' : '/myapp/admin/thing/create';
            const formData = new FormData();
            if (currentItem.id) {
                formData.append('id', currentItem.id);
            }
            formData.append('title', currentItem.title || '');
            const {code, msg, data} = await axiosInstance.post(post_url, formData);
            if (code === 0) {
                message.success("操作成功")
                onRequestClose(true)
            } else {
                message.error(msg || '网络异常')
            }
            setLoading(false);
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    };


    // 更新子组件传来的值
    const handleInputChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };

    const handleSelectChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };


    const modalStyles = {
        mask: {
            backdropFilter: 'blur(10px)',
        },
    };

    console.log('currentItem----------->', currentItem)


    return (
        <Modal
            title={currentItem.id ? '编辑' : '新增'}
            centered
            open={isOpen}
            onCancel={() => onRequestClose(false)}
            footer={null}
            width={800}
            styles={{
                mask: {
                    backdropFilter: 'blur(10px)',
                },
            }}
        >
            <div className="flex flex-col">
                <div>
                    <div ref={divRef} className="max-h-[70vh] overflow-y-auto">
                        <LabelPanel title="基本信息"></LabelPanel>
                        <div className="flex flex-col gap-4 px-2 py-2">
                            <div className="flex flex-row gap-4">
                                <FormLabel title="标题" required={true}></FormLabel>
                                <Input placeholder="请输入产品名称" value={currentItem.title}
                                       onChange={(e) => handleInputChange("title", e.target.value)}
                                       style={{width: 400}}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FormLabel title="分类" required={true}></FormLabel>
                                <Select
                                    placeholder="请选择"
                                    allowClear
                                    style={{
                                        width: 400,
                                    }}
                                    value={currentItem.category}
                                    onChange={(value) => handleSelectChange("category", value)}
                                    options={[
                                        {
                                            value: 'jack',
                                            label: 'Jack',
                                        },
                                        {
                                            value: 'lucy',
                                            label: 'Lucy',
                                        },
                                        {
                                            value: 'Yiminghe',
                                            label: 'yiminghe',
                                        },
                                    ]}
                                />
                            </div>
                        </div>

                        <Divider/>

                        <LabelPanel title="SEO信息"></LabelPanel>
                        <div className="flex flex-col gap-4 px-2 py-2">
                            <div className="flex flex-row gap-4">
                                <FormLabel title="SEO标题"></FormLabel>
                                <Input placeholder="input something" style={{width: 400}}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FormLabel title="SEO描述"></FormLabel>
                                <Input placeholder="input something" style={{width: 400}}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FormLabel title="SEO关键词"></FormLabel>
                                <Input placeholder="input something" style={{width: 400}}/>
                            </div>
                        </div>

                        <Divider/>

                        <LabelPanel title="属性信息"></LabelPanel>
                        <div className="flex flex-col gap-4 px-2 py-2">
                            <div className="flex flex-row gap-4">
                                <FormLabel title="SEO标题"></FormLabel>
                                <Input placeholder="input something" style={{width: 400}}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FormLabel title="SEO描述"></FormLabel>
                                <Input placeholder="input something" style={{width: 400}}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FormLabel title="SEO关键词"></FormLabel>
                                <Input placeholder="input something" style={{width: 400}}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FormLabel title="SEO关键词"></FormLabel>
                                <Input placeholder="input something" style={{width: 400}}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FormLabel title="SEO关键词"></FormLabel>
                                <Input placeholder="input something" style={{width: 400}}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FormLabel title="SEO关键词"></FormLabel>
                                <Input placeholder="input something" style={{width: 400}}/>
                            </div>
                        </div>

                    </div>
                    <Divider/>

                    <div className="flex flex-row gap-4">
                        <Button loading={loading} type="primary" onClick={() => commit()}>提交</Button>
                        <Button onClick={() => onRequestClose(false)}>取消</Button>
                    </div>
                </div>

            </div>
        </Modal>
    );
};
export default ProductModal;