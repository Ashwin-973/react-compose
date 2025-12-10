import { ThrillerCard } from "./ThrillerCard"

export function Thrillers(){

    const thriller=[
        {
            number:1,
            title:'Se7en',
            director:'David Fincher',
        },
        {
            number:2,
            title:'Old Boy',
            director:'Park Chan-wook',
        },
        {
            number:3,
            title:'The Sixth Sense',
            director:'M Night Shyalaman',
        }

    ]

    return(
            thriller.map(t=>(<ThrillerCard key={t.number} number={t.number} title={t.title} director={t.director}/>))
    )
}