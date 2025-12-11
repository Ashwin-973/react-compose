import { useParams } from "react-router-dom";

function Car({cars}){
    const {brand}=useParams();


    const car=cars.find(c=>c.brand===brand)

   if (!car) {
    return <div>Car brand "{brand}" not found</div>;
}

    return(
        <article>
            <h3>{car.model}</h3>
            <h4>{car.brand}</h4>
            <img style={{
                maxHeight:'50vh'
            }}  src={car.image} alt={`${car.brand} ${car.model}`}/>
            <h5>{car.price}</h5>
            <h6>{car.type}</h6>
        </article>
    )
}


export {Car};