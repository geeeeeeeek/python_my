import React, { useState } from 'react';
import {
  AppstoreOutlined, CompassOutlined, FileOutlined, FileWordOutlined, FunnelPlotOutlined,
  HomeOutlined,
  MailOutlined,
  ProductOutlined,
  SettingOutlined, TableOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import {useSelector} from "react-redux";
const items = [
  {
    key: '/admin/main',
    label: '总览',
    icon: <HomeOutlined />,
  },
  {
    key: '/admin/products',
    label: '产品管理',
    icon: <ProductOutlined />,
  },
  {
    key: '/admin/news',
    label: '新闻管理',
    icon: <FileWordOutlined />,
  },
  {
    key: '/admin/about',
    label: '关于页',
    icon: <AppstoreOutlined />,
  },
  {
    key: '/admin/case',
    label: '案例管理',
    icon: <FunnelPlotOutlined />,
  },
  {
    key: '/admin/download',
    label: '下载管理',
    icon: <FileOutlined />,
  },
  {
    key: '/admin/faq',
    label: 'FAQ管理',
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



  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    router.push(e.key);
  };

  // console.log('currentPath------',current)

  return (
    <>
      <div className="bg-[#3398cc] flex flex-col gap-4">
        <div className="font-bold text-white">CMS</div>
        <Menu
            theme="dark"
            onClick={onClick}
            style={{
              maxWidth: 220,
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