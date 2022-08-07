import React from 'react'
import { useState, useEffect } from 'react'


function Addresscomponent(props) {

    const [ip, setIp] = useState('');
    const ipVersion = props.ipVersion;


    var url = 'https://api.ipify.org?format=json';

    if (ipVersion === 'ipv6') {

        url = 'https://api64.ipify.org?format=json';

    }

    async function getData() {
        const response = await fetch(url);
        const data = await response.json();
        console.log(url);
        return data;
        
    }
    useEffect(() => {
        getData().then(data => setIp(data.ip))
    }, [])

    return (
        <div>
            <h2>Your IP Address is {props.ipVersion}</h2>
            <h4>{ip}</h4>
        </div>
    );
}

export default Addresscomponent;