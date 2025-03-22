'use client';
import "@/styles/globals.css";
import {AppstoreOutlined, MenuOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {setCollapsed} from "@/redux/adminSettingSlice";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import MenuIcon from "/public/admin/menu.png";


const Header = () => {

    const adminApp = useSelector((state) => state.adminSetting);
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');

    useEffect (() => {
        let username = localStorage.getItem('username') || '';
        setUsername(username);
    }, []);

    const toggleSideBar = () => {
        let collapsed = adminApp.collapsed;
        dispatch(setCollapsed(!collapsed));
    }

    const logout = () => {
        localStorage.removeItem('admintoken');
        localStorage.removeItem('username');
        window.location.href = '/adminLogin';
    }

    return (
        <>
            <div className="h-12 px-4 flex flex-row items-center bg-white border-b border-b-gray-300 ">
                <Image
                    src={MenuIcon}
                    width={26}
                    height={26}
                    className="cursor-pointer"
                    onClick={toggleSideBar}
                />
                <div className="ml-auto cursor-pointer">
                    <span className={"ml-2 mr-2 text-gray-500 text-sm"} >管理员{username}</span>
                    <a className="cursor-pointer text-blue-500" onClick={() => logout()}>退出</a>
                </div>
            </div>
        </>
    )


};

export default Header;
