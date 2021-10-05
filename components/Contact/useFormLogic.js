import { useState, useEffect } from "react";

export default function useFormLogic() {

    const initialForm = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formInfo, setFormInfo] = useState(initialForm)

    function handleChange(e) {
        console.log(e)
        const value = e.target.value
        setFormInfo({
            ...formInfo,
            [e.target.name]: value
        })
    }

    
       console.log(formInfo) 
    

    


    return {handleChange, formInfo}
}