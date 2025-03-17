import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import {useSelector} from "react-redux";
const items = [
  {
    key: '/admin/main',
    label: '总览',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/products',
    label: '产品管理',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/news',
    label: '新闻管理',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/case',
    label: '案例管理',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/faq',
    label: 'FAQ管理',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/contact',
    label: '联系管理',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/about',
    label: '关于管理',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/download',
    label: '下载管理',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/log',
    label: '日志管理',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/info',
    label: '统计分析',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/user',
    label: '管理员',
    icon: <MailOutlined />,
  },
  {
    key: '/admin/settings',
    label: '网站设置',
    icon: <MailOutlined />,
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '5',
        label: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          {
            key: '7',
            label: 'Option 7',
          },
          {
            key: '8',
            label: 'Option 8',
          },
        ],
      },
    ],
  }
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
        <div className="font-bold text-white">网站后台CMS</div>
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