import Categories from "../Categories/Categories"
import GadgetCards from "../GadgetCards/GadgetCards"


const GadgetsContainer = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center gap-10 lg:my-20 my-10">
        <Categories></Categories>
        <GadgetCards></GadgetCards>
    </div>
  )
}

export default GadgetsContainer