import { useState } from "react";
import RatingPage from "./components/RatingPage";
import ThankPage from "./components/ThankPage";

function App() {
  const [rating, setRating] = useState();
  const [showThanks, setShowThanks] = useState(false);

    function handleClick(e){
        setRating(e.target.name);
    }

    function handleSubmit(){
        setShowThanks(true);
    }

  return (
    <div className="h-screen w-screen bg-VeryDarkBlue flex justify-center items-center">
      <div className="container w-3/12 h-3/6 bg-DarkBlue rounded-3xl shadow-lg px-8 py-8 text-sm font">
        {showThanks ? 
        <ThankPage rating={rating}/> : 
        <RatingPage handleClick={handleClick} handleSubmit={handleSubmit}/>}
        
        
      </div>
    </div>
  )
}

export default App
