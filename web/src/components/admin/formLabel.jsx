import React from 'react';

const FormLabel = ({title, required}) => {

    return (
        <span className="text-[14px] w-[100px] text-gray-700 h-[30px] leading-[30px] flex flex-row items-center">
            <div>{title}</div>
            <div className="flex flex-col items-center mx-1">
                {required ? <span className="text-red-500 font-bold text-[14px] ">*</span> : null}
            </div>
        </span>
    );
};
export default FormLabel;