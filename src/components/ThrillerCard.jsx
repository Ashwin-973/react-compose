import '../css/ThrillerCard.css'

export function ThrillerCard({number,title,director}){

    return(
        <div className="card-container">
            <h2 className="card-number">{number}</h2>
            <h3 className="card-title">{title}</h3>
            <h4 className="card-director">{director}</h4>
        </div>
    )
}