import React from 'react';
import {Input, Select} from 'antd';

const AdminSelect = ({placeholder, value, onInputChange}) => {

    const handleChange = (val) => {
        onInputChange(val);
    };

    return (
        <Select
            placeholder={placeholder}
            allowClear
            style={{
                width: 400,
            }}
            value={value}
            onChange={handleChange}
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
    )
}
export default AdminSelect;