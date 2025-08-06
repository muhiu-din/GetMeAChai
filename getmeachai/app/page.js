import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
  <>
    <div className="flex px-6 md:px-0 justify-center gap-4 items-center flex-col h-[44vh] text-white">
      <div className="font-bold gap-2 text-5xl flex flex-row items-center justify-center"><span >Buy me a chai</span>
       <span><img className="w-20 invert" src="tea.gif" alt="tea" /></span> 
      </div>
      <p>A crowdfunding platform for creators.Get funded by your fans or followers or raisefunds for the needy.Start now!!</p>
     <div>
    <Link href="/Login"><button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
    <Link href="/about"><button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button></Link>
     </div>
    </div>
    <div className="h-1  bg-white mx-50 opacity-10"></div>
    <div className="text-white font-bold container mx-auto">
      <h2 className="text-center my-8 text-lg">Your fans can buy you a chai</h2>
     <div className="flex px-6 md:px-0 justify-around">
       <div className="flex gap-2 flex-col items-center justify-center">
        <img className="w-20 bg-gray-500 rounded-full p-2" src="man.gif" alt="man" />
        <p className="">Create Your Page</p>
        <p className="font-normal text-center">Fans buy you a chai to support your work.</p>
      </div>
       <div className="flex gap-2 flex-col items-center justify-center">
        <img className="w-20 bg-gray-500 rounded-full p-2" src="coin.gif" alt="man" />
        <p className="">Receive Support</p>
        <p className="font-normal text-center">Your fans are available for yourhelp</p>
      </div>
       <div className="flex gap-2 flex-col items-center justify-center">
        <img className="w-20 bg-gray-500 rounded-full p-2" src="group.gif" alt="man" />
        <p className="">Grow Your Community</p>
        <p className="font-normal text-center">Turn supporters into a loyal community.</p>
      </div>
     </div>
    </div>
    <div className="h-1 bg-white mx-50 opacity-10 my-12"></div>
    <div className="text-white  font-bold flex flex-col items-center  container mx-auto">
      <h2 className="text-center mb-8 text-lg">Our Motive</h2>
      
        <iframe
        width="280"
        height="180"
        src="https://www.youtube.com/embed/p0HVLeePLxo?si=3JsTPFNxD6uoO09o&amp;start=12"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

    </div>
    <div className=" py-12"></div>
 
  </>
  );
}
