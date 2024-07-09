import { useState } from "react";
import RatingPage from "./components/RatingPage";
import ThankPage from "./components/ThankPage";

function App() {
  const [rating, setRating] = useState();
  const [alert, setAlert] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

    function handleClick(e){
        setRating(e.target.name);
    }

    function handleSubmit(){
      if(rating === undefined){
        setAlert(true);
      }else{
        setShowThanks(true);
        setAlert(false);
      }
        
    }

    function handleClose(){
        setShowThanks(false);
        setRating(undefined);
    }

  return (
    <div className="h-screen w-screen bg-VeryDarkBlue flex justify-center items-center">
      <div className="container mx-2 w-full h-auto md:w-3/12 md:h-auto bg-DarkBlue rounded-3xl shadow-lg px-8 py-8 text-sm font select-none">
        {showThanks ? 
        <ThankPage rating={rating} handleClose={handleClose}/> : 
        <RatingPage handleClick={handleClick} handleSubmit={handleSubmit} 
        alert={alert}/>}
      </div>
    </div>
  )
}

export default App
