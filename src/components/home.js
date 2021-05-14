import React from 'react'
import Ofd from './ofd/ofd'
import Kassy from './kassy/kassy'
import Equipment from './equipment/equipment'

import '../pages/pageKassy/pageKassy.css'

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
