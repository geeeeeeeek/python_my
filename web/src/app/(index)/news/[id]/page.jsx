

export default function Page({params}) {

    const { id } = params; // 动态路由参数 id

    console.log('id', id)

    return (
        <div>
            <h1>Page</h1>
            <p>news Detail</p>
        </div>
    )
}