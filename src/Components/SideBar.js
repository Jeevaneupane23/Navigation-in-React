import Links from "./Links";


function SideBar(){

    const links=[
        {label:"Home",path:'/'},
        {label:"About",path:'/about'},
        {label:"Contact",path:'/contact'},
        {label:"Modal",path:'/modal'},
    ]
    const renderedList=links.map((link)=>{
        return <Links key={link.label} link={link.path}>{link.label}</Links>
    })




    return (
        <div className="flex flex-col">
            {renderedList}
        </div>
    )
}

export default SideBar;