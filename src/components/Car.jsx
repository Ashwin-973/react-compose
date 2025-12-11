import { useParams,useLocation,Link } from "react-router-dom";

function Car({cars}){
    const {brand}=useParams();
    const location=useLocation();


    const car=cars.find(c=>c.brand===brand)

    return(
        <div>
            <nav>
            <ul>
                <li ><Link to="/" style={ location.pathname==='/'?
                {
                    color:'green'

                }: {
                    color:'red'

                }} >Home</Link></li>
                <li><Link to="/cars" style={location.pathname.startsWith('/cars')?
                {
                    color:'green'

                }: {
                    color:'red'

                }}>Cars</Link></li>
            </ul>
        </nav>
            <h3>{car.model}</h3>
            <h4>{car.brand}</h4>
            <img style={{
                maxHeight:'50vh'
            }}  src={car.image}/>
            <h5>{car.price}</h5>
            <h6>{car.type}</h6>
        </div>
    )
}


export {Car};