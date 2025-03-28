'use client';
import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";
import { Button } from 'antd';


export default function Page() {


    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);



    const fetchData = async () => {
        try {
            setLoading(true);
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(data);
            setItems(data);
            setLoading(false);
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchData();
    }, [])


  return (
      <div>

        <Button type="primary">Button</Button>


          <button onClick={fetchData}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Refresh
          </button>

          <div className="min-h-20 ">
              {loading ? (<div>loading...</div>) : (
                  <ul className="space-y-2">
                      {items.map((item, index) => (
                          <li key={index}>
                              <Link href={`/post/${item.id}`}>{ index + '--->' +item.username}</Link>
                          </li>
                      ))}
                  </ul>
              )}
          </div>


      </div>
  )
}