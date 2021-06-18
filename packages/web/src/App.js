import {useState} from 'react';
import HomeRouter from './routers/homeRouter';
import AppRouter from './routers/appRouter';
//context import
import LoginContext from './context/loginContext';

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {!isLogged &&
        <LoginContext.Provider value={ {isLogged,setIsLogged} }>
          <HomeRouter/>
        </LoginContext.Provider>
      }

      {isLogged &&
        <LoginContext.Provider value={ {isLogged,setIsLogged} }>
          <AppRouter/>
        </LoginContext.Provider>
      }

    </>
  )
}

export default App;
