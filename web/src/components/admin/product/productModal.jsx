import React, {useEffect, useState} from 'react';
import {
    Button,
    Cascader,
    DatePicker, Divider,
    Form,
    Input,
    InputNumber,
    Mentions, message,
    Segmented,
    Select,
    TreeSelect,
} from 'antd';
import {setShowForm} from "@/redux/adminSettingSlice";
import {useDispatch, useSelector} from "react-redux";
import LabelPanel from "@/components/admin/labelPanel";
import FormLabel from "@/components/admin/formLabel";
import axios from "@/utils/axios";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {setIsFormOpen, setProductData} from "@/redux/productFormSlice";
import axiosInstance from "@/utils/axios";

const ProductModal = () => {
    const dispatch = useDispatch()

    const {productItem, isFormOpen} = useSelector((state) => state.productForm);

    const [currentItem, setCurrentItem] = useState(productItem || {})

    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        setCurrentItem(currentItem || {})
    }, [currentItem])

    const cancel = () => {
        dispatch(setIsFormOpen(false))
    }

    const commit = () => {
        console.log("commit-->", currentItem);
        // 整理带传数据...
        // todo 检查
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
                dispatch(setIsFormOpen(false))
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

    const handleSelectChange = (name,value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };

    console.log('currentItem-----------', currentItem)


    return (
        <div className="flex flex-col">

            <div className="bg-white h-[50px] leading-[50px] font-bold px-5">
                <ArrowLeftOutlined  onClick={()=>cancel()} style={{color: '#2174ff'}} className="cursor-pointer"/>
                <span className="mx-4">
                    {
                        currentItem.id ? '编辑产品' : '新增产品'
                    }
                </span>
            </div>

            <div className="px-4 py-4">
                <div className="px-4 py-4 bg-white shadow-md">
                    <LabelPanel title="基本信息"></LabelPanel>
                    <div className="flex flex-col gap-4 px-2 py-2">
                        <div className="flex flex-row gap-4">
                            <FormLabel title="标题" required={true}></FormLabel>
                            <Input placeholder="请输入产品名称" value={currentItem.title} onChange={(e) => handleInputChange("title", e.target.value)} style={{width:400}}/>
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
                                onChange={(value)=>handleSelectChange("category",value)}
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

                    <Divider />

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

                    <Divider />

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
                    </div>

                    <Divider />

                    <div className="flex flex-row gap-4">
                        <Button loading={loading}  type="primary" onClick={()=>commit()}>提交</Button>
                    </div>
                </div>
            </div>



        </div>
    );
};
export default ProductModal;