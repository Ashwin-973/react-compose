import { Link } from "react-router-dom"
import { useCallback } from "react";
import { useNavigate,useLocation } from "react-router-dom"
export function Cars({cars}){

    const navigate=useNavigate();
    const location=useLocation();

    const navigateHome=useCallback(()=>
    {
        navigate('/ ')

    },[navigate])
    
    return(
        <section>
            <h2>Let's Talk Cars</h2>
            <nav>
            <ul>
                <li ><Link to="/" style={ location.pathname==='/'?
                {
                    color:'green'

                }: {
                    color:'red'

                }} >Home</Link></li>
                <li><Link to="/cars" style={location.pathname==='/cars'?
                {
                    color:'green'

                }: {
                    color:'red'

                }}>Cars</Link></li>
            </ul>
        </nav>
        {
            cars.map((c,idx)=>
            (
            <div key={idx}>
                <Link to={`/cars/${c.brand}`}>{c.brand}</Link>
                <br></br>
            </div>
            )
        )
        }
            <button onClick={navigateHome} >Head Home</button>
        </section>

        



    )




}