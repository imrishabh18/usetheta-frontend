import { useEffect } from "react"

const End = () => {
    // useEffect(() => {
    //     localStorage.removeItem("userInfo")
    //     localStorage.removeItem("sectionInfo")
    // },[])
    return(
        <div>
            <h2 className="text-white text-4xl font-extrabold">Registered!</h2>
            <h3 className="text-white pt-2 font-medium">Thanks for taking the time to register yourself</h3>
        </div>
    )
}

export default End