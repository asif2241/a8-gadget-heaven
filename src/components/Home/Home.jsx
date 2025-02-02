import Banner from "../Banner/Banner"
import GadgetsContainer from "../GadgetsContainer/GadgetsContainer"


const Home = () => {
  return (
    <div className="">
        <Banner></Banner>
        <div className="flex">
        <h2 className="mx-auto font-semibold text-4xl">Explore Cutting-Edge Gadgets</h2>
        </div>
        <GadgetsContainer></GadgetsContainer>
    </div>
  )
}

export default Home