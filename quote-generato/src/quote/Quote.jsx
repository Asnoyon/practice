import React, { useEffect, useState } from 'react'

const Quote = () => {
    const [quote,setQuote]=useState("");
    const [author,setAuthor]
    useEffect(() => {
        const fetchData = async()=>{
            const res = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")

            const data= await res.json();

            let dataQuotes = data.quotes;
      
            console.log(data);
        }
        fetchData()
    }, [])
    

  return (
    <div><p>{dataQuotes}</p></div>
  )
}

export default Quote