import Modal from "../Components/Modal";
import { useState } from "react";






function ModalPage(){

    const [showModal,setShowModal]=useState(false);
    
    if(showModal){
        document.body.classList.add("overflow-hidden")
    }
    else{
        document.body.classList.remove("overflow-hidden")
    }
    
    
    const handleClick=()=>{
        
        setShowModal(!showModal);
    }
    
    const buttonAccept=<button className="p-3 bg-green-500 m-3 rounded-sm" onClick={handleClick}>Accept</button>
    const buttonClose=<button className="p-3 bg-red-500 m-3 rounded-sm" onClick={handleClick}>Reject</button>



    return (

        <div>
            <button className="p-3 bg-green-500 m-3 rounded-sm" onClick={handleClick}>Open Modal</button>
        {showModal && <Modal handleClick={handleClick} buttonAccept={buttonAccept} buttonClose={buttonClose} >
            This is important agreement you must have to accept it or reject it to continue using our app.
        </Modal>}
       </div>

    )
}



export default ModalPage;