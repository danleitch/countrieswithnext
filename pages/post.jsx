//import { useState } from "react";
//const axios = require('axios');
import Link from 'next/link'

function Post(props) {
    console.log(props.data);
    return (

        <div>
            <h1>
                Name: {" "}
                {props.data[0].name}
                <br />
                Languages: {" "}
                {props.data[0].languages[0].name}
                <br />
                Population: {" "}
                {props.data[0].population}
                <br />
                Capital: {" "}
                {props.data[0].capital}
                <br />
                National Flag: {" "}

            </h1>
            <img src={props.data[0].flag}  ></img>;
        </div >

    )
}



Post.getInitialProps = async function (context) {
    const name = context.query.name

    const res = await
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data}`)
    return {

        data

    }
}

export default Post;
