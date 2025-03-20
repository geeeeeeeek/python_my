'use client';
import "@/styles/globals.css";
import {AppstoreOutlined, MenuOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {setCollapsed} from "@/redux/adminSettingSlice";
import {useEffect, useState} from "react";


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
                <MenuOutlined className="cursor-pointer" onClick={toggleSideBar}
                                  style={{fontSize: '24px', color: '#3398cc'}}/>

                <div className="ml-auto cursor-pointer">
                    <span className={"ml-2 mr-2 text-gray-500 text-sm"} >管理员{username}</span>
                    <a className="cursor-pointer text-blue-500" onClick={() => logout()}>退出</a>
                </div>
            </div>
        </>
    )


};

export default Header;
