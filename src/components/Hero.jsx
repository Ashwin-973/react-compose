import styles from '../css/Hero.module.css'


function Hero({movie}){
    console.table(movie)

    return(
        <section>
            <h2>Information</h2>
            <figure>
                <img className={styles.images}  src={movie.image} alt={movie.name}/>
                <figcaption>{movie.name}</figcaption>
            </figure>
        </section>
    )
}

export {Hero};

