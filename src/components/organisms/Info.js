import { useEffect, useState } from 'react';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Info = ({details, setDetails, section, setSection}) => {
    const { fullname, email, companyName, companySize} = details
    const [disabled, setDisabled] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(false)

    const checkEmail = () => {
        if(email.includes('@') || email == "")
            setIsEmailValid(true)
        else{
            setIsEmailValid(false)
            setDisabled(true)
        }
    }

    useEffect(() => {
        // To check if all the fields are filled or not
        if(fullname === "" || email === "" || companyName === "" || companySize === 0){
            setDisabled(true)
        }else{
            setDisabled(false)
        }
        checkEmail()
    },[details])

    return(
        <div className="flex flex-col w-full">
            <h2 className="text-white text-2xl font-extrabold flex">Enter your Info: </h2>
            <Input type="text" placeholder="Full name" value={fullname} onChange={e => (setDetails({...details, fullname: e.target.value}))} />
            <Input type="email" placeholder="Email" value={email} onChange={e => setDetails({...details, email: e.target.value})} className={`${isEmailValid ? "" : "border-solid border-2 border-red-400" }`}  />
            <Input type="text" placeholder="Company name" value={companyName} onChange={e => (setDetails({...details, companyName: e.target.value}))}/>
            <Input type="number" placeholder="Company size" value={companySize} onChange={e => (setDetails({...details, companySize: e.target.value}))}/>
            <Button text="Next" disabled={disabled} onClick={(e) => setSection({...section, second: true, first: false})} />
        </div>
    )
}

export default Info