import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState();
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/mainul786`)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])
    return (
        <div className='text-center bg-gray-400 text-white text-3xl'>
            <h>GitHub Followes:{data?.created_at}</h>
            <img src={data?.following_url} alt="" width={300} />
        </div>
    );
}

export default Github;
export const githubInfoLoader = async () =>{
    const res = await fetch(`https://api.github.com/users/mainul786`)
    return res;
}