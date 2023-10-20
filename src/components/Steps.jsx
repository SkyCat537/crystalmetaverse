import Card1 from '../assets/react.svg';
import Card2 from '../assets/react.svg';
import Card3 from '../assets/react.svg';

const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white font-poppins text-center mt-[50px]">
      {/* Text oben */}
      <p className="text-md uppercase text-gray-300 mb-7">Our Team Works</p>
      <h1 className="text-5xl font-bold"><span className='text-primary'>Control</span> Of Your Cards</h1>
      <p className="text-lg mt-4 text-gray-500 w-[800px] mb-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus at, optio incidunt asperiores delectus itaque iusto fuga labore, consectetur, voluptas sunt earum commodi!
      </p>

      {/* Boxen */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {/* Box 1 */}
        <div className="relative w-[300px] h-[400px] rounded-md overflow-hidden transition-transform transform scale-100 hover:scale-105 bg-gradient-to-b from-transparent to-gray-900">
          <img src={Card1} alt="Bild 1" className="w-full absolute -top-0.5" />
          <p className="absolute bottom-4 text-center w-full text-light">Register</p>
          <div className='absolute z-[100] w-[40%] h-[35%] bottom-0 
      pink__gradient ' />
        </div>

        {/* Box 2 */}
        <div className="relative w-[300px] h-[400px] rounded-md overflow-hidden transition-transform transform scale-100 hover:scale-105 bg-gradient-to-b from-transparent to-gray-900">
          <img src={Card2} alt="Bild 2" className="w-full absolute -top-0.5" />
          <p className="absolute bottom-4 text-center w-full">Trade</p>
        </div>

        {/* Box 3 */}
        <div className="relative w-[300px] h-[400px] rounded-md overflow-hidden transition-transform transform scale-100 hover:scale-105 bg-gradient-to-b from-transparent to-gray-900">
          <img src={Card3} alt="Bild 3" className="w-full absolute -top-0.5" />
          <p className="absolute bottom-4 text-center w-full">Win</p>
        </div>
      </div>
      
    </div>
  );
};

export default Steps;
