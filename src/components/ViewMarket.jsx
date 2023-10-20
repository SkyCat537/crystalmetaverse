
import backgroundImage from '../assets/react.svg';

const ViewMarket = () => {
  return (
    <div
      className="bg-cover bg-center relative text-white py-16 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-[1240px] mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Explore the Market Now
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Discover the latest trends and opportunities in the market.
        </p>
        <a
          href="/market"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </a>
      </div>
      <div className="bg-black bg-opacity-50 h-full absolute w-full top-0 left-0"></div>
    </div>
  );
};

export default ViewMarket;
