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
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    
       console.log(formInfo) 

    return {handleChange, formInfo}
}