import React from 'react';
import Ofd from './ofd/ofd';
import Kassy from './kassy/kassy';
import '../pages/pageKassy/pageKassy.css';
import Equipment from './equipment/equipment';

const Home = () => {
  return (
    <div>
      <Ofd />
      <Kassy />
      <Equipment />
    </div>

  )
}
export default Home
