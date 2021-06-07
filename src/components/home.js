import React from 'react';
import Ofd from './ofd/ofd';
import Uslugi from './uslugi/Uslugi';
import Equipment from './equipment/equipment';
import Counter from './counter/Сounter';
import Capabilities from './capabilities/Capabilities';
import ServiceStart from './ServiceStart/ServiceStart';

const Home = () => {
  return (
    <div>
      <Ofd />
      <Capabilities/>
      <ServiceStart/>
      <Uslugi />
      <Counter />
      {/* <Statistics /> */}
      <Equipment />
    </div>
  )
}
export default Home