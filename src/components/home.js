import React from 'react'
import Ofd from './ofd/ofd'
import Uslugi from './Uslugi/uslugi'
import Kassy from './kassy/kassy'
import Partners from './parners/partners'

import '../pages/pageKassy/pageKassy.css'

const Home = () => {
  return (
    <div>
      <Ofd />
      <Uslugi />
      <Kassy />
      <Partners />
    </div>

  )
}
export default Home
