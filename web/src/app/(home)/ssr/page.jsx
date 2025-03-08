
import React from 'react';



export default async function Page() {

    // https://nextjs.org/docs/14/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods

    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    const users = await res.json();
    console.log(users, 'users');


    return (<div>
        <h1>用户列表</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    </div>)
}