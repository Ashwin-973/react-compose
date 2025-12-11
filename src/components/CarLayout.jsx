import { NavLink,Outlet,useNavigate } from "react-router-dom";
import { useCallback } from "react";


export function CarLayout(){

    const navigate=useNavigate();

    const navigateHome=useCallback(()=>
    {
        navigate('/')

    },[navigate])

    return(
        <section>
            <header>
                <h2>Let's Talk Cars</h2>
                <nav>
                    <ul>
                        <li><NavLink to="/" style={ ({isActive})=>(
                            {
                                color:isActive? 'green' : 'red'
                            }
                        )} >Home</NavLink></li>
                        <li><NavLink to="/cars" style={ ({isActive})=>(
                            {
                                color:isActive? 'green' : 'red'
                            }
                        )}>Cars</NavLink></li>
                    </ul>
                </nav>
            </header>
            <div>
                <Outlet/>
            </div>
            <footer>
                <button onClick={navigateHome} >Head Home</button>
            </footer>
        </section>
    )
}