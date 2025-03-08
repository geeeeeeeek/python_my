'use client';
import "@/styles/globals.css";
import {AppstoreOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {setCollapsed, setShowForm} from "@/redux/adminSettingSlice";


const Header = () => {

    const adminApp = useSelector((state) => state.adminSetting);
    const dispatch = useDispatch();

    const toggleSideBar = () => {
        let collapsed = adminApp.collapsed;
        dispatch(setCollapsed(!collapsed));
    }

    return (
        <>
            <div className="h-12 px-4 flex flex-row items-center bg-white border-b border-b-gray-300 ">
                <AppstoreOutlined className="cursor-pointer" onClick={toggleSideBar}
                                  style={{fontSize: '24px', color: '#3398cc'}}/>
            </div>
        </>
    )


};

export default Header;
