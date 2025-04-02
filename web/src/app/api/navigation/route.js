import { NextResponse } from 'next/server';

export async function GET() {
  // 模拟数据库操作的延迟
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // 返回导航数据
  const navigationItems = [
    {name: "Home", href: "/", type: "link"},
    {
      name: "Products", 
      href: "#", 
      type: "dropdown",
      subItems: [
        {
          name: "Analytics",
          href: "#",
          subItems: [
            { name: "Traffic Analysis", href: "#" },
            { name: "User Behavior",  href: "#" },
            { name: "Conversion Tracking", href: "#" }
          ]
        },
        { name: "Engagement", href: "#" },
        { name: "Security", href: "#" },
      ]
    },
    {name: "About", href: "/about", type: "link"},
    {name: "Contact", href: "/contact", type: "link"},
    {name: "Blog", href: "/blog", type: "link"},
    {name: "Services", href: "/services", type: "link"},
  ];
  
  return NextResponse.json({ navigationItems });
} 