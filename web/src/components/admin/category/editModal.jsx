import React, {useEffect, useState} from "react";
import {Button, Divider, Input, Modal} from "antd";
import FormLabel from "@/components/admin/formLabel";
import ImageUpload from "@/components/admin/imageUpload";

const EditModal = ({isOpen, onRequestClose, initialItem, onSave}) => {
    const [currentItem, setCurrentItem] = useState(initialItem || {});

    // 为了制造Upload而用
    const [imageList, setImageList] = useState([]);


    useEffect(() => {
        setCurrentItem(initialItem || {});

        // 制造适合Upload的数据格式
        if (initialItem?.cover?.split("#").length > 0) {
            setImageList (initialItem?.cover?.split("#").map((item) => ({
                success: true,
                name: item,
                status: 'done',
                url: process.env.NEXT_PUBLIC_BASE_URL + '/upload/img/' + item,
            })));
        } else {
            setImageList([]);
        }

    }, [initialItem]);

    const handleInputChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };

    const handleImageUploadChange = (imageUrlList) => {
        console.log('imageUrlList--->', imageUrlList);
        let cover = imageUrlList.join("#");
        setCurrentItem((prev) => ({...prev, cover: cover}));
    };

    const handleSave = () => {
        onSave(currentItem);
        onRequestClose();
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

            <div className="flex flex-col">
                <div className="">
                    <div className="">
                        <div className="flex flex-col gap-4 pt-4 pb-0">
                            <div className="flex flex-row gap-4">
                                <FormLabel title="标题" required={true}></FormLabel>
                                <Input placeholder="请输入分类名称" value={currentItem.title}
                                       onChange={(e) => handleInputChange("title", e.target.value)}
                                       style={{width: 400}}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FormLabel title="封面图" required={true}></FormLabel>
                                <ImageUpload maxCount={2} imageList={imageList}
                                             onImageUploadChange={handleImageUploadChange}/>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FormLabel title="排序"></FormLabel>
                                <Input placeholder="请输入顺序号" value={currentItem.sort}
                                       onChange={(e) => handleInputChange("sort", e.target.value)}
                                       style={{width: 400}}/>

                            </div>
                        </div>

                        <Divider/>

                        <div className="flex flex-row gap-4 justify-start">
                            <Button type="primary" onClick={handleSave}>提交</Button>
                            <Button onClick={onRequestClose}>取消</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>

    );
};

export default EditModal;