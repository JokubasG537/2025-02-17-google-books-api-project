import Categories from "../components/Categories";
import FetchQuotes from "../utils/FetchQuotes";
import Books from "../components/Books";
import Footer from "../components/footer";


function Home() {
  return (
    <>
    <FetchQuotes/>
    <Categories/>
    <Books/>
    </>
  )



}

export default Home