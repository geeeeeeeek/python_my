import React, {useState} from 'react';
import {Button, Input, message} from "antd";
import axiosInstance from "@/utils/axios";
import {useRouter} from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [currentItem, setCurrentItem] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (name, value) => {
        setCurrentItem((prev) => ({...prev, [name]: value}));
    };

    const login = async () => {
        if (currentItem.username.length === 0 || currentItem.password.length === 0) {
            message.error('用户名或密码不能为空')
            return;
        }
        try {
            setLoading(true);
            const post_url = '/myapp/admin/adminLogin';
            const formData = new FormData();
            formData.append('username', currentItem.username);
            formData.append('password', currentItem.password);
            const {code, msg, data} = await axiosInstance.post(post_url, formData);
            if (code === 0) {
                message.success("登录成功")
                localStorage.setItem('admintoken', data.admin_token);
                localStorage.setItem('username', data.username);
                router.push('/admin/main');
            } else {
                message.error(msg || '网络异常')
            }
            setLoading(false);
        } catch (err) {
            console.log(err)
            message.error(err.detail || '网络异常')
            setLoading(false)
        }


    }
    const bgImage = "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)";

    return (
        <div
            style={{
                backgroundImage: `${bgImage}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col gap-4 items-center justify-center min-h-screen  w-screen">
            <form className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-xl mb-6 text-center">管理员登录</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm" htmlFor="username">
                        用户名
                    </label>
                    <Input placeholder="请输入用户名" value={currentItem.username}
                           onChange={(e) => handleInputChange("username", e.target.value)}/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm" htmlFor="password">
                        密码
                    </label>
                    <Input.Password placeholder="请输入密码" value={currentItem.password}
                                    onChange={(e) => handleInputChange("password", e.target.value)}/>
                </div>

                <Button loading={loading} type="primary" className="w-full" onClick={() => login()}>登录</Button>
            </form>
            <span className="text-yellow-100 text-sm">技术客服微信：lengqin1024</span>

        </div>
    );
};

export default LoginPage;