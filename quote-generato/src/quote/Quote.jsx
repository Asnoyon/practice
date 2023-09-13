import React, { useEffect, useState } from 'react'

const Quote = () => {
    const [quote,setQuote]=useState("");
    const [author,setAuthor]=useState("")

    const fetchData = async()=>{
        const res = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")

        const data= await res.json();

        let dataQuotes = data.quotes;
        
        let randomNum = Math.floor(Math.random()* dataQuotes.length)

        let randomQuotes = dataQuotes[randomNum]
       
        
        setQuote(randomQuotes.quote)
        setAuthor(randomQuotes.author)
    }
    
    useEffect(() => {
        fetchData()  
    }, [])
    
    const handleClick= ()=>{
        fetchData()
    }

  return (
    <div>
       <div className="quote">
       <p>{quote}</p>
        <h2>{author}</h2>
       </div>
       <button onClick={handleClick}>Next Quote</button>
    </div>
  )
}

export default Quote