import {useState} from 'react';
import HomeRouter from './routers/homeRouter';
//context import
import LoginContext from './context/loginContext';




function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (

    <LoginContext.Provider value={ isLogged,setIsLogged }>
      <HomeRouter/>
    </LoginContext.Provider>
    
  )
}

export default App;
