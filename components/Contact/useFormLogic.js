import { useState, useEffect } from "react";

export default function useFormLogic() {

    const initialForm = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formInfo, setFormInfo] = useState(initialForm)

    function errorStyles(element) {
        document.querySelector(`#${element}`).style.opacity = "1";
    }

    function handleChange(e) {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        errorStyles("nameError")
        errorStyles("emailError")
        errorStyles("phoneError")
        errorStyles("textAreaError")
        
    }

    
       console.log(formInfo) 

    return {handleChange, formInfo, handleSubmit}
}