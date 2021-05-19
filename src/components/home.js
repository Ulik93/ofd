import React from 'react';
import Ofd from './ofd/ofd';
import Uslugi from './uslugi/Uslugi';
import Equipment from './equipment/equipment';
import Counter from './counter/Сounter';

const Home = () => {
  return (
    <div>
      <Ofd />
      <Uslugi />
      <Counter />
      {/* <Statistics /> */}
      <Equipment />
    </div>
  )
}
export default Home