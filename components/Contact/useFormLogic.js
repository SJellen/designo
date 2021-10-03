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
        const value = e.target.value
        setFormInfo({
            ...formInfo,
            [e.target.name]: value
        })
    }

    useEffect(() => {
       console.log(formInfo) 
    }, [formInfo])

    


    return {handleChange, formInfo}
}