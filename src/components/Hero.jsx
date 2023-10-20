import Crystal from '../assets/react.svg'

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white font-poppins">
      <div className="w-[700px] text-left ml-[130px]">
        <p className="text-md uppercase text-gray-300">Our Team Works</p>
        <h1 className="sm:text-7xl text-xl font-bold uppercase">Crystal</h1>
        <h1 className="sm:text-7xl text-xl font-bold uppercase text-primary">Metaverse</h1>
        <p className="text-lg mt-4 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus at, optio incidunt asperiores delectus itaque iusto fuga labore, consectetur, voluptas sunt earum commodi!</p>
        <button className="bg-blue-600 text-white px-6 py-2 mt-6 rounded-full hover:bg-blue-800 focus:outline-none duration-100">
          Login
        </button>
        <button className="bg-transparent ml-10 text-white outline outline-4 outline-blue-800 px-6 py-2 mt-6 
        rounded-full hover:bg-blue-800 focus:outline-none hover:outline-none duration-100">
          Learn More
        </button>
      </div>
      <div className="w-[700px] ml-16">
        <img
          src={Crystal} // Passe den Pfad zum Bild an
          alt="Crystal"
          className="w-[500px]"
        />
      </div>
      <div className='absolute z-[-999] w-[40%] h-[35%] top-0 left-0 
      pink__gradient ' />
    </div>
    
  );
};

export default Hero;
