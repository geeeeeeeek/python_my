import React, {useState} from 'react';
import {
    Button,
    Cascader,
    DatePicker, Divider,
    Form,
    Input,
    InputNumber,
    Mentions,
    Segmented,
    Select,
    TreeSelect,
} from 'antd';
import {setShowForm} from "@/redux/adminSettingSlice";
import {useDispatch, useSelector} from "react-redux";
import LabelPanel from "@/components/admin/labelPanel";
import FormLabel from "@/components/admin/formLabel";
import AdminInput from "@/components/admin/adminInput";
import axios from "@/utils/axios";
import AdminSelect from "@/components/admin/adminSelect";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {setProductData} from "@/redux/productDataSlice";

const ProductForm = () => {
    const dispatch = useDispatch();
    const adminApp = useSelector((state) => state.adminSetting);

    const productData = useSelector((state) => state.productData);


    // const [product, setProduct] = useState({
    //     title: '',
    //     category: null
    // });

    // setProduct((pre) => (adminApp.productBean))


    const hideProductForm = () => {
        dispatch(setShowForm(false))
    }

    const commit = () => {
        console.log("commit-->", productData);
        // 整理带传数据...
        let product = productData
        doCommit(product);
    }

    const doCommit = async (product) => {
        try {
            let data = product;
            const response = await axios.post('/admin/product/save', data);
            console.log('数据获取成功:', response.data);
        } catch (err) {
            // error
            console.error('数据获取失败:', err);
        }
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };


    // 更新子组件传来的值
    const handleInputChange = (name, value) => {
        dispatch(setProductData({
            [name]: value,
        }))
    };

    return (
        <div className="flex flex-col">

            <div className="bg-white h-[50px] leading-[50px] font-bold px-5">
                <ArrowLeftOutlined  onClick={hideProductForm} style={{color: '#2174ff'}} className="cursor-pointer"/>
                <span className="mx-4">
                    {
                        adminApp.formState === 'add' ? '新增产品' : '编辑产品'
                    }
                </span>
            </div>

            <div className="px-4 py-4">
                <div className="px-4 py-4 bg-white shadow-md">
                    <LabelPanel title="基本信息"></LabelPanel>
                    <div className="flex flex-col gap-4 px-2 py-2">
                        <div className="flex flex-row gap-4">
                            <FormLabel title="标题" required={true}></FormLabel>
                            <AdminInput placeholder="请输入产品名称" value={productData.title}
                                        onInputChange={(value) => handleInputChange('title', value)}/>
                        </div>
                        <div className="flex flex-row gap-4">
                            <FormLabel title="分类" required={true}></FormLabel>
                            <AdminSelect placeholder="请选择" value={productData.category}
                                         onInputChange={(value) => handleInputChange('category', value)} />
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
                        <Button type="primary" onClick={commit}>提交</Button>
                    </div>
                </div>
            </div>



        </div>
    );
};
export default ProductForm;