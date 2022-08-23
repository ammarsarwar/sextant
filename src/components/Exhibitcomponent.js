import React from 'react'
import Addresscomponent from '../components/Addresscomponent';
import Pyloncomponent from '../components/Pyloncomponent';

function Exhibitcomponent() {

  return (
    <div >
    <Addresscomponent ipVersion='ipv4' />
    <Addresscomponent ipVersion='ipv6' />
    
    <Pyloncomponent />
    </div>
  )
}

export default Exhibitcomponent;