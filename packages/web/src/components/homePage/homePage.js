import diaryIcon from '../../assets/diaryIcon.png'



function HomePage(){

    return(
        <main className="dark:bg-gray-800 bg-white relative overflow-hidden ">
            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Personal
                            <span className="text-5xl sm:text-7xl">
                                Journal
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                            Personal Journal is an online diary where you can write about your day with a great text editor and good archive of your texts
                        </p>
                        <div className="flex mt-8">
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-indigo-900 border-2 border-transparent text-white text-md mr-4 hover:bg-indigo-400">
                                Get started
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img src={diaryIcon} className="max-w-xs mt-24 md:max-w-sm m-auto"/>
                    </div>
                </div>
            </div>
        </main>
         
    )
}

export default HomePage;