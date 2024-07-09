/* eslint-disable react/prop-types */
export default function RatingPage({handleClick, handleSubmit, alert}) {
    const buttons = [1, 2, 3, 4, 5];

    const btnDesign = "bg-gray-700 h-10 w-10 font-bold text-LightGrey rounded-full text-center hover:bg-Orange cursor-pointer text-sm focus:bg-White";
  return (
    <div className="flex flex-col justify-between h-full w-full gap-5">
        <div className="h-10 w-10 flex justify-center items-center rounded-full bg-gray-700">
            <img src="images/icon-star.svg" alt="star icon" />
        </div>
        <h1 className="text-2xl font-bold text-White">How did we do?</h1>
        <p className="text-LightGrey">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-between">
            {buttons.map((btn) => {
                return <button 
                key={btn} 
                name={btn}
                className={btnDesign}
                onClick={handleClick}>
                    {btn}
                </button>
            })}
        </div>
        {alert && <p className="text-red-600 text-xs mx-auto">Please select value before submitting!</p>}  
        <button 
        onClick={handleSubmit}
        className="bg-Orange text-VeryDarkBlue uppercase font-Overpass py-3 rounded-3xl font-bold cursor-pointer hover:bg-White">
            Submit
        </button>
    </div>
  )
}
