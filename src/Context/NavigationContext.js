import { useState,createContext,useEffect } from "react";


const NavigationContext=createContext();

function NavigationProvider({children}){
    const [currentPath,setCurrentPath]=useState(window.location.pathname);
    


    useEffect(()=>{
        const handler=()=>{
            setCurrentPath(window.location.pathname)
        }
      window.addEventListener('popstate',handler);


      return (
        ()=>{
            window.removeEventListener('popstate',handler);
        }
      )
      

    },[])
   

    function navigate(to){
        setCurrentPath(to);
        window.history.pushState({},'',to);
    }



    return (
        <NavigationContext.Provider value={{navigate,currentPath}}>
            {children}

        </NavigationContext.Provider>
    )
}

export default NavigationContext;
export {NavigationProvider};


