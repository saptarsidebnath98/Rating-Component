import { IoCloseSharp } from "react-icons/io5";

export default function ThankPage({rating, handleClose}) {
    return (
        <div className="h-full w-full flex flex-col justify-between items-center font-Overpass">
            <img
                className="h-auto w-2/6"
                src="images/illustration-thank-you.svg"
                alt="thank you png" />
            <div className="px-6 py-2 bg-slate-700 rounded-2xl flex justify-center items-center text-Orange">
                <p>You selected {rating} out of 5</p>
            </div>
            <h3 className="text-2xl text-White font-bold">
                Thank you!
            </h3>
            <p className="text-center text-LightGrey">
                We appreciate you taking the time to give a rating. If you ever need more support, don&#39;t hesitate to get in touch!
            </p>
            <button 
            onClick={handleClose}
            className="bg-Orange rounded-full h-6 w-6 flex justify-center items-center font-bold cursor-pointer">
                <IoCloseSharp />
            </button>
        </div>
    )
}
