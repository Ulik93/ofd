import React from "react"
import Ofd from "./ofd/ofd"
import Uslugi from "./uslugi/Uslugi"
import Equipment from "./equipment/equipment"
import Counter from "./counter/Сounter"
import Capabilities from "./capabilities/Capabilities"
import ServiceStart from "./ServiceStart/ServiceStart"
import Necessaries from "./necessariely/necessaries"
import ConnectToOfd from "./ConnectToOfd/ConnectToOfd"

const Home = () => {
  return (
    <div>
      <Ofd />
      <Capabilities />
      <ServiceStart />
      <ConnectToOfd />
      <Necessaries />
      <Uslugi />
      <Counter />
      {/* <Statistics /> */}
      <Equipment />
    </div>
  )
}
export default Home
