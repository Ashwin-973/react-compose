import { Link } from "react-router-dom"

export function Cars({cars}){
    
    return(
            cars.map((c,idx)=>
            (
            <div key={c.model}>
                <Link to={`/cars/${c.brand}`}>{c.brand}</Link>
                <br></br>
            </div>
            )
        )

    )




}