import {useState} from 'react';
import validate from '../../utils/validateRegisterInfo';
import axios from '../../config/axios';
import {
    useHistory,
  } from "react-router-dom";

function RegisterForm(){

    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [checkPassword,setCheckPassword] = useState('');

    const [errors, setErrors] = useState({ });

    let history = useHistory();

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const {errorsList, isValid} = validate({name,surName,email,password,checkPassword});
        setErrors( errorsList );
        if(!isValid) return

        try{

            await axios.post('/user',{
                name,
                surname:surName,
                email,
                password,
            });

            history.push('/login');

        }catch(e){
            
            if(e.response.status === 409){

                setErrors({
                    ...errors,
                    authError:'email already have an account'
                })
            }
        }
    }


    return(
        <div className="flex flex-col max-w-md mx-auto mt-10 px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                Create a new account
            </div>
            <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
            Already have an account ?
            <a href="#" target="_blank" className="text-sm text-blue-500 underline hover:text-blue-700">
            Sign in
            </a>
            </span>
            <div className="p-6 mt-8">
                <form onSubmit={handleSubmit} >

                    <div className="flex gap-4 mb-2">
                        <div className=" relative ">
                        <input value={name} onChange={ (value) => { setName(value.target.value) } } type="text" id="create-account-first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" placeholder="First name"/>
                        </div>
                        <div className=" relative ">
                        <input value={surName} onChange={ (value) => { setSurName(value.target.value) } } type="text" id="create-account-last-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="surName" placeholder="Last name"/>
                        </div>
                    </div>
                    {errors.name && <p className='self-center text-center text-red-500'>{errors.name}</p>}
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                        <input value={email} onChange={(value) => { setEmail(value.target.value) }} type="text" id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Email"/>
                        </div>
                    </div>
                    {errors.email && <p className='self-center text-center text-red-500'>{errors.email}</p>}
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                        <input value={password} onChange={(value) => { setPassword(value.target.value) }} type="password" id="create-account-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" placeholder="Password"/>
                        </div>
                    </div>
                    {errors.password && <p className='self-center text-center text-red-500'>{errors.password}</p>}
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                        <input value={checkPassword} onChange={(value) => { setCheckPassword(value.target.value) }} type="password" id="create-account-passwordCompare" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password2" placeholder="Repeat Password"/>
                        </div>
                    </div>
                    {errors.checkPassword && <p className='self-center text-center text-red-500'>{errors.checkPassword}</p>}
                    {errors.passwordCheck && <p className='self-center text-center text-red-500'>{errors.passwordCheck}</p>}
                    <div className="flex w-full my-4">
                        <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Create Account
                        </button>
                    </div>
                    {errors.authError && <p className='self-center text-center text-red-500'>{errors.authError}</p>}
                </form>
               

            </div>
        </div>                

    )


}

export default RegisterForm;