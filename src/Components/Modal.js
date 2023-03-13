
import  ReactDOM from "react-dom";





function Modal({children,buttonAccept,buttonClose,handleClick}){
    

  return ReactDOM.createPortal(
    <div>
       <div className="fixed bg-black opacity-80 inset-0 " onClick={handleClick}  >
         </div>
        <div className="fixed inset-40 bg-white flex flex-col justify-between p-3" >
        {children}
        
       
        <div className="self-end">
            {buttonAccept}
            {buttonClose}
        </div>
       </div>
       </div>,
       document.querySelector(".modal-container")

    )





    
}

export default Modal;