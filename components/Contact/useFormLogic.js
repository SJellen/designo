import { useState, useEffect } from "react";

export default function useFormLogic() {

    const initialForm = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formInfo, setFormInfo] = useState(initialForm)

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}

    function errorStyles(element) {
        document.querySelector(`#${element}`).style.opacity = "1";
    }

    function defaultStyles(element) {
        document.querySelector(`#${element}`).style.opacity = "";
    }

    function handleChange(e) {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (formInfo.name.length === 0) {
            errorStyles("nameError")
        } else {
            defaultStyles("nameError")
        }
        if (validateEmail(formInfo.email) === false) {
            errorStyles("emailError")
        } else {
            defaultStyles("emailError")
        }
        if (formInfo.phone.length === 0) {
            errorStyles("phoneError")
        } else {
            defaultStyles("phoneError")
        }
        if (formInfo.message.length === 0) {
            errorStyles("textAreaError")
        } else {
            defaultStyles("textAreaError")
        }
        setFormInfo(initialForm)   
    }

    return {handleChange, formInfo, handleSubmit}
}