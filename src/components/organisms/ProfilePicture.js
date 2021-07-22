import React, {useEffect, useRef, useState} from "react";

import Button from "../atoms/Button";

const ProfilePicture = ({ details, setDetails, section, setSection }) => {

    const uploadedImage = useRef(null);
    const imageUploader = useRef(null);

    const [disabled, setDisabled] = useState(true)

    const handleImageUpload = e => {
        const [file] = e.target.files;
        const fileSizeInMB = file.size / (1024 * 1024)

        if(fileSizeInMB < 5){
            if (file) {
                const reader = new FileReader();
                const { current } = uploadedImage;
                current.file = file;
                reader.onload = e => {
                    current.src = e.target.result;
                    setDetails({...details, profilePicture: `${reader.result}` })
                };
                reader.readAsDataURL(file);        
            }
            setDisabled(false)
        }else{
            alert("File Size is greater than 5MB")
        }
    };

    useEffect(() => {
        setSection({...section, first: false})

        if(details.profilePicture !== ""){
            setDisabled(false)
        }

    },[details.profilePicture])

    return(
        <div className="flex flex-col justify-center items-center w-full">
            <h2 className="text-white text-4xl font-extrabold pb-4">Upload your profile picture</h2>
            <input
                type="file"
                accept=".png, .jpg"
                onChange={handleImageUpload}
                ref={imageUploader}
                className="hidden"
            />
            <div
                onClick={() => imageUploader.current.click()}
            >
                <img
                    ref={uploadedImage}
                    className="w-36 h-36 border-solid border-2 border-gray-400 rounded-full"
                    src={details?.profilePicture ? details.profilePicture : null}
                />
            </div>
            <h3 className="text-white pt-2 font-medium">Click to upload Image</h3>
            <Button text="Next" disabled={disabled} onClick={() => setSection({...section, third: true, second: false})} />
        </div>
        )
}

export default ProfilePicture