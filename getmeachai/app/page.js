import Image from "next/image";

export default function Home() {
  return (
  <>
    <div className="flex justify-center gap-4 items-center flex-col h-[44vh] text-white">
      <div className="font-bold gap-2 text-5xl flex fles-row items-center justify-center"><span>Buy me a chai</span>
       <span><img className="w-20 invert" src="tea.gif" alt="tea" /></span> 
      </div>
      <p>A crowdfunding platform for creators.Get funded by your fans or followers or raisefunds for the needy.Start now!!</p>
     <div>
      <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
     </div>
    </div>
    <div className="h-1 bg-white mx-50 opacity-10"></div>
    <div className="text-white font-bold container mx-auto">
      <h2 className="text-center my-8 text-lg">Your fans can buy you a chai</h2>
     <div className="flex justify-around">
       <div className="flex gap-2 flex-col items-center justify-center">
        <img className="w-20 bg-gray-500 rounded-full p-2" src="man.gif" alt="man" />
        <p className="">Fund yourself</p>
        <p className="font-normal">Your fans are available for yourhelp</p>
      </div>
       <div className="flex gap-2 flex-col items-center justify-center">
        <img className="w-20 bg-gray-500 rounded-full p-2" src="coin.gif" alt="man" />
        <p className="">Fund yourself</p>
        <p className="font-normal">Your fans are available for yourhelp</p>
      </div>
       <div className="flex gap-2 flex-col items-center justify-center">
        <img className="w-20 bg-gray-500 rounded-full p-2" src="group.gif" alt="man" />
        <p className="">Fund yourself</p>
        <p className="font-normal">Your fans are available for yourhelp</p>
      </div>
     </div>
    </div>
    <div className="h-1 bg-white mx-50 opacity-10 my-12"></div>
    <div className="text-white font-bold flex flex-col items-center  container mx-auto">
      <h2 className="text-center mb-8 text-lg">Your fans can buy you a chai</h2>
 <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/p0HVLeePLxo?si=3JsTPFNxD6uoO09o&amp;start=12"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <div className="h-1 bg-white mx-50 opacity-10 my-12"></div>
    <div className="text-white font-bold container mx-auto">
      <h2 className="text-center my-8 text-lg">Learn more about us</h2>
     <div className="flex justify-around">
       <div className="flex gap-2 flex-col items-center justify-center">
        <img className="w-20 bg-gray-500 rounded-full p-2" src="man.gif" alt="man" />
        <p className="">Fund yourself</p>
        <p className="font-normal">Your fans are available for yourhelp</p>
      </div>
       <div className="flex gap-2 flex-col items-center justify-center">
        <img className="w-20 bg-gray-500 rounded-full p-2" src="coin.gif" alt="man" />
        <p className="">Fund yourself</p>
        <p className="font-normal">Your fans are available for yourhelp</p>
      </div>
       <div className="flex gap-2 flex-col items-center justify-center">
        <img className="w-20 bg-gray-500 rounded-full p-2" src="group.gif" alt="man" />
        <p className="">Fund yourself</p>
        <p className="font-normal">Your fans are available for yourhelp</p>
      </div>
     </div>
    </div>
  </>
  );
}
