import { useState,useEffect } from "react";


export function MovieList(){

    const[movies,setMovies]=useState([]);

    useEffect(()=>{
        try{
            let data=null;
            const movieFetch=async()=>
            {
                const options = {
                    method: 'GET',
                    headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjdkOGJlZGZhNzU1ZjUyM2ZkOTZjZDAzOWQ2YWNmZCIsIm5iZiI6MTc0NDg3MTIyOC43NTQsInN1YiI6IjY4MDA5ZjNjZjM5YzczMDEyNWQ5NDYxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7TPAA13AkGYoS18BuuWiawgm3zaPhv78ubbIbXBYHOo'
                    }
            };
                const res=fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options);

                if(!res.ok) throw new Error(`Invalid Status Code : ${res.status}`)

                data=await res.json(); 
                if(!data) throw new Error(`Data is empty`)

                setMovies(data?.results);

            }
            movieFetch()

        }
        catch(e){
            console.error(e.message);
        }
        
    },[])


    return(
            movies? movies.map((m,idx)=>(
                <div key={idx}  style={{
                    marginBottom:'8px'
                }}>
                    <p style={{
                        fontSize:'20px'
                    }}>Title : ${m.original_title}</p>
                    <p>Synposis : ${m.overview}</p>
                </div>
            )) : <p>List is Empty!!</p>
    )

}