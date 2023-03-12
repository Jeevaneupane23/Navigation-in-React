import useNavigationContext from "../hooks/custom-hooks-navigation";



function Links({children,link}){
    const {navigate}=useNavigationContext();


   const handleClick=(events)=>{
    if(events.metaKey || events.ctrlKey){
        return;
    }
    events.preventDefault();
    navigate(link);
    
   }


    return (
        <a onClick={handleClick} href={link}>{children}</a>
    )
}

export default Links;