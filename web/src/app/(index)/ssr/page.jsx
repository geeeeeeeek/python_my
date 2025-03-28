import React from 'react';
import axiosInstance from "@/utils/axios";


export default async function Page() {

    // https://nextjs.org/docs/14/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods

    const params = {
        page: 1,
        pageSize: 10,
    };
    const {code, total, data} = await axiosInstance.get('/myapp/index/thing/list', {params});
    if (code === 0) {
        console.log(data)
        return (<div>
            <h1>用户列表</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.title} - {item.category_title}
                    </li>
                ))}
            </ul>
        </div>)
    } else {
        return (<div>
            <h1>用户列表</h1>
            <ul>
                no data
            </ul>
        </div>)
    }


}