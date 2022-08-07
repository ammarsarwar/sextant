import React from 'react'
import Addresscomponent from '../components/Addresscomponent';

function Exhibitcomponent() {
  return (
    <div>
    <Addresscomponent ipVersion='ipv4' />
    <Addresscomponent ipVersion='ipv6' />
    </div>
  )
}

export default Exhibitcomponent;