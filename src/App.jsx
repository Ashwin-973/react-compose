import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";



export default function App(){
    
    const[currentMovie,setCurrentMovie]=useState('Prisoners');

    function onMovieChange(movieName){
        setCurrentMovie(movieName);
    }

    const movies=[
        {
            name:'Prisoners',
            image:'https://i.pinimg.com/736x/19/db/c4/19dbc47dc1df50b7ae8b015dc038d93b.jpg'
        }, 
        {
            name:'La La Land',
            image:'https://i.pinimg.com/736x/1d/92/8c/1d928c497262ac1d9ff05ab81f203bd9.jpg'
        },
         {
            name:'Memento',
            image:'https://i.pinimg.com/1200x/1e/00/3e/1e003e56b94d9e9ef85a9cd2f02909a3.jpg'
        },
    ]

    return(
        <>
            <Header onMovieChange={onMovieChange}/>
            <Hero movie={movies.find(m => m.name===currentMovie)}/>
            <Footer/>
        </>
    )
}