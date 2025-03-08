import React from 'react';
import {Input} from 'antd';

const AdminInput = ({placeholder, value, onInputChange}) => {

    const handleChange = (e) => {
        onInputChange(e.target.value);
    };

    return (
        <Input placeholder={placeholder} value={value} onChange={handleChange} style={{width:400}}/>
    )
}
export default AdminInput;