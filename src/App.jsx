import RatingPage from "./components/RatingPage";
import ThankPage from "./components/ThankPage";

function App() {
  return (
    <div className="h-screen w-screen bg-VeryDarkBlue flex justify-center items-center">
      <div className="container w-3/12 h-3/6 bg-DarkBlue rounded-3xl shadow-lg px-8 py-8 text-sm font">
        <RatingPage/>
        {/* <ThankPage/> */}
      </div>
    </div>
  )
}

export default App
