import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useEffect } from "react";

const Meme = ({ details, setDetails, section, setSection }) => {
    const memes  = details.memes

    useEffect(() => {
        setSection({...section, first: false})
    },[details.memes])

    return(
        <>
            <Input type="text" placeholder="Meme 1" value={memes.meme1} onChange={e => (setDetails({...details, memes: { ...memes, meme1: e.target.value}}))} />
            <img src={memes.meme1 !== "" ? memes.meme1 : null} className={`${memes.meme1 ? "w-28 h-28" : "py-2" }`} />   
            <Input type="text" placeholder="Meme 2" value={memes.meme2} onChange={e => (setDetails({...details, memes: { ...memes, meme2: e.target.value}}))} />
            <img src={memes.meme2 !== "" ? memes.meme2 : null} className={`${memes.meme2 ? "w-28 h-28" : "py-2" }`} />
            <Input type="text" placeholder="Meme 3" value={memes.meme3} onChange={e => (setDetails({...details, memes: { ...memes, meme3: e.target.value}}))} />
            <img src={memes.meme3 !== "" ? memes.meme3 : null} className={`${memes.meme3 ? "w-28 h-28" : "py-2" }`}/>
            <Input type="text" placeholder="Meme 4" value={memes.meme4} onChange={e => (setDetails({...details, memes: { ...memes, meme4: e.target.value}}))} />
            <img src={memes.meme4 !== "" ? memes.meme4 : null} className={`${memes.meme4 ? "w-28 h-28" : "py-2" }`}/>
            <Input type="text" placeholder="Meme 5" value={memes.meme5} onChange={e => (setDetails({...details, memes: { ...memes, meme5: e.target.value}}))} />
            <img src={memes.meme5 !== "" ? memes.meme5 : null} className={`${memes.meme5 ? "w-28 h-28" : "py-2" }`} />
        </>
    )
}

export default Meme