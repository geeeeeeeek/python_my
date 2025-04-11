'use client'
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollBar() {
    const [isVisible, setIsVisible] = useState(false)

    // 检测滚动位置，决定是否显示按钮
    useEffect(() => {
        const toggleVisibility = () => {
            // 当滚动超过300px时显示按钮
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        // 添加滚动事件监听
        window.addEventListener('scroll', toggleVisibility)

        // 初始检查
        toggleVisibility()

        // 清理事件监听
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    // 滚动到顶部的函数
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={`fixed right-6 bottom-6 z-50 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="flex items-center justify-center size-10 bg-mainColorNormal text-white shadow-md hover:bg-mainColorNormal/80 transition-colors"
            >
                <ChevronUp className="w-5 h-5" />
            </button>
        </div>
    )
}