


function Header({onMovieChange}){


    return(
        <header>
            <h1>Case Studies</h1>
            <nav>
                <ul onClick={(e)=>{
                    onMovieChange(e.target.innerText);
                }}   style={{
                    cursor:'pointer',
                    color:'blue'
                }}>
                    <li>Prisoners</li>
                    <li>La La Land</li>
                    <li>Memento</li>
                </ul>
            </nav>
        </header>
    )
}

export {Header};