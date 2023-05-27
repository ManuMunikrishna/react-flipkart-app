import React, { useEffect, useState } from 'react'

const Products = () => {

    const [data, setData]=useState([])

    useEffect(()=>{
        const fetchData = async() => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const jsonData = await response.json();
                console.log(jsonData)
                setData(jsonData.products)
            }catch(error){
                console.log(error)
            }
        }
        fetchData();    
    },[])

    // useEffect(()=>{
    //     if(data.length>0)
    //     console.log(data)
    // },[data])
    // console.log(jsonData)
  return (
    <div>
        {data && data.length>0?(
            <div>
                {data.map((names, index)=> (
                    <span key={index}>{names.id}</span>
                ))}
            </div>
        ):(
            <p>Loading...</p>
        )}
    </div>
  )
}

export default Products