import Categories from "../components/Categories";
import FetchQuotes from "../utils/FetchQuotes";
import Featured from "../components/Featured";

function Home() {
  return (
    <>
    <FetchQuotes/>
    <Categories/>
    <Featured/>
    </>
  )



}

export default Home