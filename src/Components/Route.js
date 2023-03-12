import useNavigationContext from "../hooks/custom-hooks-navigation";





function Route({children,path}){

  const {currentPath}=useNavigationContext();

  if(currentPath===path){
      return children;

  }
  return null;

}

export default Route;