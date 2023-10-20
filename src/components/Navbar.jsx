import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);

    const handleClickScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] m-auto px-4 sm:px-0 text-white'>
            {/* Logo (links) */}
            <img src={Logo} alt='logo' className='w-[124px] mt-5' />

            {/* Navigationslinks (Mitte) */}
            <ul className='hidden md:flex uppercase sm:mr-10'>
                <li
                    className='p-4 cursor-pointer text-primary font-bold'
                    onClick={() => handleClickScroll('section-1')}
                >
                    Home
                </li>

                <li
                    className='p-4 cursor-pointer hover:text-primary font-bold'
                    onClick={() => handleClickScroll('section-2')}
                >
                    Analytics
                </li>

                <li
                    className='p-4 cursor-pointer hover:text-primary font-bold'
                    onClick={() => handleClickScroll('section-3')}
                >
                    Newsletter
                </li>

                <li
                    className='p-4 cursor-pointer hover:text-primary font-bold'
                    onClick={() => handleClickScroll('section-4')}
                >
                    Pricing
                </li>
                
                {/* Weitere Navigationslinks nach Bedarf hinzufügen */}
            </ul>

            {/* Button (rechts) */}
            <div className='hidden md:flex items-center'>
                <button className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none'>
                    Login
                </button>
            </div>

            {/* Mobile */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
            </div>

            <div
                className={
                    nav
                        ? `fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500`
                        : `ease-out-in duration-500 fixed left-[-100%]`
                }
            >
                {/* Logo (links) im Mobile-Menu */}
                <img src={Logo} alt='logo' className='w-[124px] mt-5' />

                {/* Navigationslinks (Mitte) im Mobile-Menu */}
                <ul className='pt-4 uppercase'>
                    <li
                        className='p-4 border-b border-gray-600 cursor-pointer hover:text-primary font-bold'
                        onClick={() => {
                            handleNav();
                            handleClickScroll('section-1');
                        }}
                    >
                        Home
                    </li>

                    <li
                        className='p-4 border-b border-gray-600 cursor-pointer hover:text-primary font-bold'
                        onClick={() => {
                            handleNav();
                            handleClickScroll('section-2');
                        }}
                    >
                        Analytics
                    </li>

                    <li
                        className='p-4 border-b border-gray-600 cursor-pointer hover:text-primary font-bold'
                        onClick={() => {
                            handleNav();
                            handleClickScroll('section-3');
                        }}
                    >
                        Newsletter
                    </li>

                    <li
                        className='p-4 border-b border-gray-600 cursor-pointer hover:text-primary font-bold'
                        onClick={() => {
                            handleNav();
                            handleClickScroll('section-4');
                        }}
                    >
                        Pricing
                    </li>
                
                    {/* Weitere Navigationslinks im Mobile-Menu nach Bedarf hinzufügen */}
                </ul>

                {/* Button (rechts) im Mobile-Menu */}
                <div className='pt-4 text-center'>
                    <button className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
