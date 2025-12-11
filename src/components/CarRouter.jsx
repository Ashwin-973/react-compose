import {Routes,Route} from 'react-router-dom'
import { Cars } from './Cars'
import { Car } from './Car'
import { CarHome } from './CarHome'
import { CarLayout } from './CarLayout'



export function CarRouter(){
    const cars=[
        {
            brand:'BMW',
            model:'M8 Competition Coupe',
            price:'₹2,38,40,000',
            type:'Coupe',
            image:'https://prod.cosy.bmw.cloud/connext-bmw/cosySec?COSY-EU-100-7331c9Nv2Z7d5yKlHS9gwyljT5lkQM37fNw2M2CpLjSk%25S8QvsrGZIGeupDptvX%25oKNHkJENmb4Ws86OG7c1QUD4IxxbZG%25I4Y%25E9CpL0FkP%25mZt2YIxZU2hilpRBqSrxlzK%25yoKG%25Ty8nvzTomvhv0v6%25yX3242D%25TQdjcjhR3azDx4QCdnkq8ca4zOALUxKckIFJG7bWABKupC8hFeWS6ldbKMPVYXzsWhbNmQfjPo90yac2bHi4TPC49%25wc3bKHiftxd9Agw178ziIftECUkwDH7slGAthYCrXpF72NlZQ6KdBrXRaYWz2YQ5nmPkjfagOybADQnvIT9FQsO2B3io1vIjedwHJ8BDMzt%25p6eqhk7f%25RMLoAC1RchJHFl4tfou%25KXcnDHSfWQxDD%25V1Pa8T4fNEbnUiA10s9OGwTE4riIptJscZwBZ%25rrxRteRoVZ857M5HTRUgChgu05GvlovThgp2XH2fzv6jQ%25j1t2YDafDqOjmqn1qY9DyLOELFVqTJIsdvLL3uBrz9PJdSeZHptuzHhQIeMT63D%25TZyYGwg6QuiVpRBkWGDyej1uDgqIbgsnvzg%25eMhO30XqfKM4%25gXAqHRL10trUol6JQBPjSeXYyTptvVhFUcleE'
        },
         {
            brand:'Porsche',
            model:'Taycan 4S',
            price:'₹1,95,89,000',
            type:'Taycan',
            image:'https://a.storyblok.com/f/322327/2616x712/f688adbee3/ta24q3cix0010-taycan-4s-side.png/m/1800x490/smart/filters:format(avif)'
        }, 
        {
            brand:'Mercedes-Benz',
            model:'CLE Cabriolet',
            price:'1,11,57,568',
            type:'Roadster',
            image:'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/182371/cle-cabriolet-exterior-right-front-three-quarter-4.png?isig=0&q=80&q=80'
        }, 
        {
            brand:'Audi',
            model:'Q8',
            price:'1,10,00,000',
            type:'SUV',
            image:'https://mediaservice.audi.com/media/fast/v3_xWTXWhbdRjG__6ytpqek_SkS9qkxx3pyUkLki1NE9ugUTuLWLCsbnMDN6mnyT9p2nw156RrmRdFEL3RC5kOUZiDuQs7QfGDqR0oQ-bw2ws_BoN54xQ6RIZf24WewnvxXDy_h_fiec5cEx3tluDQ7jPX-_7pvHX_FYRYaQrhOys63HZrrnGLEGIGf6Vml-WuhaYs9-lL40m54ibt5eaudCqdTS6NN-1kplZK2tVqUHR5gPAJ0bUmRMdrW7gI9LZb1abdsms7W9JpNupOZVlqw6W5UjY1N1ooyFxxXM5lC7KYHZEjRbuULqVzmbHRXG48N1pMhbyIz4TPSxfb6-VCodRq1N3RTFE6i26juVIVnZmam1pJi21b73CHwe2_ENlH5D2iFtF7iN4gNkHsGLE3iJ3FSGKsY3yE8QXGtwx69yfmJOYTmNdJCBKTJA4j7kdpoZ4mGCXcpv8oA5fQF9APoz-L7jD4G_FXiH-N9QdiJ_670V5AO4V2jlAv4WNExoh5_l70IfQp4j7il7DCWAex3sbfgf91lCGUu1DuRXUJZNCm0dYI1QhtEL5K_0midaKfE_2b2CZmJ-a_xIPETeKzxE8Qv4g1SfcU3X-hvEvoQSKnUb9BfR_1GupNtPvQHkez0c6jfUXoTkJZQnsI7Se0RPg5ohfQH0H_kB2X2XETYxuGhmEx-DvmS5gu5gbmJ5ifEj9A_D8sDWsIaw_WJsop1OOoVwm-Ss-j9FzGTGPm6G8T20DRCP7I9ncILxJ5hsjH9H1P_wL9T2MsYh3CWsJ6Geui1zlEF-JJbruC_wH8e_E38V-g26Z7le4PUFSUdZS3UG3U51F_IqASiBJYIzhB8CmCJ-gZJvoisZ8ZeAz9TfTv2HEOYwzjIMYygzcwh9GmiO4luoquYH6J-SuKD2WAwCbBTbQOtONEjhI5SeQ8kR-84q3L-nLFK1xN1t38dGN6YvahRtuRs7vtwmKzarvSSRypFN35_EgunUrMy0p53s2PZDKphF1tztv5kl11ZKJg12TLzu9zvRXNTsymZ1Mpz1D3VuVWvDnkZxpOZUs9vIUnHFfKVqVetuvlqsyPZBNOodH0-COLctWRS21ZL8h8OlGTrl20XXtZthyPzad7fRMHZv4H_5yVZ9MDAAA?wid=1540'
        }
]

    return(
        <Routes>
                <Route path="/" element={<CarLayout/>}>
                    <Route index element={<CarHome/>}/>
                    <Route path="cars" element={<Cars cars={cars}/>}/>
                    <Route path="cars/:brand" element={<Car cars={cars}/>}/>
                </Route>
        </Routes>
    )
}