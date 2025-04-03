import NavBar from "@/components/index/nav/navBar2";
import Footer from "@/components/index/Footer";
import axiosInstance from "@/utils/axios";
import {message} from "antd";

// 服务端获取导航数据的函数
async function getNavSection() {
    try {
        const {code, msg, data} = await axiosInstance.get('/myapp/index/nav/section');
        if (code === 0) {
            return data
        }
    } catch (err) {
        console.log(err)
    }
}

// 将组件标记为异步，以支持服务端数据获取
export default async function IndexLayout({children}) {
    // 从服务端获取导航项数据
    const navSectionData = await getNavSection();

    return (
        <div className="flex flex-col bg-blue-400">
            <NavBar navSectionData={navSectionData}/>
            {children}

            <Footer/>
        </div>
    );
}
