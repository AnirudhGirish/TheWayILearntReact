import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/AnirudhGirish')
        .then(response=>response.json())
        .then(data=>{setData(data)})
    })
  return (
    <div className='text-center text-white bg-zinc-700 m-4 p-4 text-3xl'>Github followers {data.followers}
        <img src={data.avatar_url} alt="Git Pic" width={300} />
    </div>
  )
}

export default Github