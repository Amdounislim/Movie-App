import React from 'react'

export default function Rating({count, onchangerating = () => {}}) {
    let starshtml = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            starshtml.push(<span onClick={()=> onchangerating(i+1)} key={i}>★</span>)
        }
        else {
            starshtml.push(<span onClick={()=> onchangerating(i+1)} key={i}>☆</span>)
        }
    }
    return (
        <div>{starshtml}</div>
    )
}
