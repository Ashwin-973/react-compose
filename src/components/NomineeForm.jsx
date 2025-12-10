import {useState,useRef} from 'react'


function NomineeForm(){

    const [actor,setActor]=useState('');
    const [character,setCharacter]=useState('');
    const movieRef=useRef('');



    function formSubmit(e)
    {   
        e.preventDefault();
        console.log(movieRef)
        alert(`${character} played by ${actor} in ${movieRef.current.value}`)

    }

    return(
        <section>
            <h2>Nomination Form</h2>
            <fieldset>
                <legend>Best Character from a movie</legend>
                    <form action="">
                        <label htmlFor="actor/actress" placeholder="name">Actor/Actress</label>
                        <input id="actor/actress"  onChange={(e)=>setActor(e.target.value)}   type="text" value={actor}  required/>
                        <label htmlFor="character" placeholder="role">Character</label>
                        <input id="character"  onChange={(e)=>setCharacter(e.target.value)} type="text" value={character} />
                        <label htmlFor="movie" placeholder="movie name">Movie</label>
                        <input ref={movieRef}  id="movie" type="text" />
                        <button onClick={formSubmit}  type="submit">Submit</button>
                    </form>
            </fieldset>
        </section>
    )
}


export {NomineeForm};