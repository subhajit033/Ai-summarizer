import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="border border-black w-full">
      <nav className="flex justify-between items-center mb-20">
        <img className="w-32 md:w-44" src={logo} alt="logo" />
        <i onClick={()=> window.open('https://github.com/subhajit033/Ai-summarizer')} className="fa-brands fa-github text-4xl"></i>
      </nav>
      <div className="head_text heading">
        <h1>Summarize Articles with</h1>
        <h2 className="orange_gradient my-6">SumZ</h2>
        
      </div>
      <div className="description flex justify-center w-full">
          <p className=" text-base md:text-xl text-center font-semibold leading-6 text-gray-600 md:w-[70%]">
            Sumz is an Ai based Article summarizer that transforms lengthy
            articles into clear and concise summaries
          </p>
        </div>
    </header>
  );
};

export default Hero;
