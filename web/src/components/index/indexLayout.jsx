import NavBar from "@/components/index/nav/navBar2";
import Footer from "@/components/index/footer/footer2";
import axiosInstance from "@/utils/axios";

// 服务端获取导航数据的函数
async function getNavSection() {
    try {
        const {code, msg, data} = await axiosInstance.get('/myapp/index/nav/section');
        if (code === 0) {
            return data;
        } else {
            console.error(`获取导航数据错误: ${msg}`);
            return null;
        }
    } catch (err) {
        console.error("获取导航数据失败:", err);
        return null;
    }
}

// 服务端获取footer数据的函数
async function getFooterSection() {
    try {
        const {code, msg, data} = await axiosInstance.get('/myapp/index/footer/section');
        if (code === 0) {
            return data;
        } else {
            console.error(`获取数据错误: ${msg}`);
            return null;
        }
    } catch (err) {
        console.error("获取数据失败:", err);
        return null;
    }
}

// 将组件标记为异步，以支持服务端数据获取
export default async function IndexLayout({children}) {
    const navSectionData = await getNavSection();
    const footerSectionData = await getFooterSection();

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar sectionData={navSectionData}/>
            <main className="flex-grow">
                {children}
            </main>
            <Footer sectionData={footerSectionData}/>
        </div>
    );
}
