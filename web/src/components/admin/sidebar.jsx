import React, {useEffect, useState} from 'react';
import {
  AppstoreOutlined, CompassOutlined, DownloadOutlined, FileOutlined, FileWordOutlined, FunnelPlotOutlined,
  HomeOutlined,
  MailOutlined,
  ProductOutlined,
  SettingOutlined, TableOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import {useSelector} from "react-redux";
import Image from "next/image";
import LogoIcon from "/public/admin/logo.png";

const items = [
  {
    key: '/admin/main',
    label: '总览',
    icon: <HomeOutlined />,
  },
  {
    key: '/admin/products',
    label: '产品中心',
    icon: <ProductOutlined />,
  },
  {
    key: '/admin/news',
    label: '新闻页',
    icon: <FileWordOutlined />,
  },
  {
    key: '/admin/about',
    label: '关于页',
    icon: <AppstoreOutlined />,
  },
  {
    key: '/admin/case',
    label: '案例页',
    icon: <FunnelPlotOutlined />,
  },
  {
    key: '/admin/download',
    label: '下载页',
    icon:  <DownloadOutlined />,
  },
  {
    key: '/admin/faq',
    label: 'FAQ页',
    icon: <CompassOutlined />,
  },
  {
    key: '/admin/inquiry',
    label: '询盘管理',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/basicInfo',
    label: '基本信息',
    icon: <SettingOutlined />,
  },
  {
    key: '/admin/log',
    label: '日志管理',
    icon: <TableOutlined />,
  },
  {
    key: '/admin/user',
    label: '账号管理',
    icon: <UserOutlined />,
  },
];
const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [current, setCurrent] = useState(pathname);

  const adminApp = useSelector((state) => state.adminSetting);

  useEffect(()=>{
    setCurrent(pathname);
  },[pathname])

  const onClick = (e) => {
    setCurrent(e.key);
    router.push(e.key);
  };

  console.log('sidebar path------',current)

  const adminPrimaryColor = 'adminPrimaryColor';

  return (
    <>
      <div className={`bg-adminPrimaryColor flex flex-col`}>
        <div className="font-bold text-white flex flex-row items-center justify-center py-4 cursor-pointer">
          <Image
              src={LogoIcon}
              alt="logo"
              width={24}
              height={24}
          />
          {
            adminApp.collapsed ? null : <div className="ml-2">后台管理</div>
          }
        </div>
        <Menu
            theme="dark"
            onClick={onClick}
            style={{
              maxWidth: 280,
            }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            inlineCollapsed={adminApp.collapsed}
            items={items}
        />
      </div>

    </>
  );
};
export default SideBar;