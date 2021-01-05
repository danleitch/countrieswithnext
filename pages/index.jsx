//import { useState } from "react";
//const axios = require('axios');
import Link from 'next/link'

function Index(props) {
    return (

        <ul>
            {props.Countries.map(Country => (
                <li>
                    <Link as={`/country/${Country.name}`} href={`/post?name=${Country.name}`}>
                        <a>{Country.name}</a>
                    </Link>
                </li>
            ))}

        </ul>

    )
}



Index.getInitialProps = async function () {
    const res = await
        fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()
    console.log(`Show data fetched. Count: ${data}`)
    return {
        Countries: data
    }
}

export default Index;
