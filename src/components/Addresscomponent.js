import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Addresscomponent() {

    const [ip, setIp] = useState('');

    const getData = async () => {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        return data;
    }
    useEffect(() => {
        getData().then(data => setIp(data.ip))
    }, [])

    return (
        <div>
            <h2>Your IP Address is</h2>
            <h4>{ip}</h4>
        </div>
    );
}

export default Addresscomponent