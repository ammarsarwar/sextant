/*import React from 'react'
import { useState, useEffect } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

function Pyloncomponent() {
    var [latency] = useState('');

    client.onmessage = (message) => 
    {
           latency =  new Date().getTime() - message.data
       
    };

  return (
    <div>
        {latency}
    </div>
  )
}

export default Pyloncomponent;

*/

import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

class Pyloncomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latency: null
        };
    }

    componentDidMount() {
        client.onmessage = (message) => {
            this.setState({
                latency: new Date().getTime() - message.data
            })
        };
    }

    render() {
        return (
            <span className="PylonConnector">
                {this.state.latency}
            </span>
        );
    }
}

export default Pyloncomponent;