import { useState,useEffect } from "react";


export function MovieList(){

    const[movies,setMovies]=useState([]);
    const [state,setState]=useState('idle');

    

    useEffect(()=>{
        const STATE_MACHINE={
        IDLE:'idle',
        LOADING:'loading',
        SUCCESS: 'success',
        ERROR:'error'
    }

        const movieFetch=async()=>
        {
            try{
                setState(STATE_MACHINE.LOADING);
                const options = {
                    method: 'GET',
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.TMDB_SECRET}`
                    }
                };
                const res=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options);

                if(!res.ok) throw new Error(`Invalid Status Code : ${res.status}`)

                const data=await res.json();
                if(!data) throw new Error(`Data is empty`)

                setMovies(data?.results);
                setState(STATE_MACHINE.SUCCESS);
            }
            catch(e){
                setState(STATE_MACHINE.ERROR);
                console.error(e.message);
            }
        }

        movieFetch()

    },[])

    return(
        <>
            {
                state==='error' && <p style={{
                    fontSize:'24px',
                    color:'red'
                }}> ERROR </p>
            }
            {
                state==='loading' && <p style={{
                    fontSize:'24px',
                    color:'gray'
                }}> LOADING</p>
            }
            {
                state === 'success' && movies.map((m,idx)=>(
                    <div key={idx} style={{
                        marginBottom:'96px'
                    }}>
                        <p style={{
                            fontSize:'20px'
                        }}>Title : {m.original_title}</p>
                        <p>Synopsis : {m.overview}</p>
                    </div>
                ))
            }
        </>
    )

}