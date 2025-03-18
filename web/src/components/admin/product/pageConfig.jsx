
import React, {useState, useEffect} from 'react'
import FormLabel from "@/components/admin/formLabel";
import {Button, Divider, Input, InputNumber, Pagination, Popconfirm, Table} from "antd";
import ImageUpload from "@/components/admin/imageUpload";
import Search from "antd/es/input/Search";


function PageConfig() {

    const [imageList, setImageList] = useState([]);

    const handleImageUploadChange = (imageUrlList) => {
        let cover = (imageUrlList && imageUrlList.length > 0) ? imageUrlList.join("#") : null;
        console.log('cover-------',cover)
    };

    return (
        <>

            <div className=" bg-gray-100 px-4 py-4 flex flex-col gap-4">
                <div className="bg-white shadow-md">
                    <div className="flex flex-row gap-4">
                        <FormLabel title="封面图"></FormLabel>
                        <ImageUpload maxCount={1}
                                     accept="image/*"
                                     imageList={imageList}
                                     onImageUploadChange={handleImageUploadChange}/>
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <Button type="primary">保存</Button>
                </div>
            </div>
        </>
    )
}

export default PageConfig
