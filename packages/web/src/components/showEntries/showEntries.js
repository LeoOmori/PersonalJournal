import {useEffect, useState} from 'react';

function ShowEntries({children}){
    
    const navVisibleclassName = "sidebar bg-gray-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out";
    const [navIsVisible, setNavIsVisible] = useState(false);
    const [navclassName, setNavclassName] = useState(navVisibleclassName);

    const handleClick = () => {

        setNavIsVisible(!navIsVisible);
        if(navIsVisible){
            setNavclassName("sidebar bg-gray-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out");
        }else{
            setNavclassName("sidebar bg-gray-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out");
        }

    }


    return(
        
        <div className="relative h-screen md:flex">

            <div className="bg-gray-800 flex text-gray-100 justify-end md:hidden">


                <button onClick={handleClick} className="  mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className={navclassName}>
                <nav>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Home
                    </a>
                    <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    About
                    </a>
                    <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Features
                    </a>
                    <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Pricing
                    </a>
                </nav>
            </div>
            {children}
            
        </div>

    )

}


export default ShowEntries