import React, { useEffect, useState } from 'react';
import './App.css';

import axios from "axios";

import Info from './components/organisms/Info';
import ProfilePicture from './components/organisms/ProfilePicture';
import Meme from './components/organisms/Meme';
import End from './components/organisms/End';

import Button from './components/atoms/Button';

function App() {

  const savedData = (JSON.parse(localStorage.getItem("userInfo"))) 
  const sectionData  = (JSON.parse(localStorage.getItem("sectionInfo"))) 

  const [details, setDetails] = useState({
    fullname: savedData?.fullname ? savedData.fullname : "",
    email: savedData?.email ? savedData.email : "",
    companyName: savedData?.companyName ? savedData.companyName : "",
    companySize: savedData?.companySize ? savedData.companySize : "",
    profilePicture: savedData?.profilePicture ? savedData.profilePicture : "",
    memes: {
      meme1: savedData?.memes.meme1 ? savedData.memes.meme1 : "",
      meme2: savedData?.memes.meme2 ? savedData.memes.meme2 : "",
      meme3: savedData?.memes.meme3 ? savedData.memes.meme3 : "",
      meme4: savedData?.memes.meme4 ? savedData.memes.meme4 : "", 
      meme5: savedData?.memes.meme5 ? savedData.memes.meme5 : "",
    }
  })

  const [disabled, setDisabled] = useState(true)

  const [section, setSection] = useState({
    first: sectionData?.first ? sectionData.first : true,
    second: sectionData?.second ? sectionData.second : false,
    third: sectionData?.third ? sectionData.third : false,
    fourth: false
  })

  const sendData = async (e) => {
    e.preventDefault()
    
    const url = 'http://usetheta.herokuapp.com/'

    axios.post(url, details, {
      headers: {
        'Access-Control-Allow-Origin': "*",
        "Content-type": "application/json"
      },
    }).then(res => {
      console.log(res.status)

      localStorage.removeItem("userInfo")
      localStorage.removeItem("sectionInfo")

    })
    .catch(err => console.error(err))

    //Display the end Screen
    setSection({...section, third: false, fourth: true})
  }

  const storeLocally = () => {
    localStorage.setItem("userInfo", JSON.stringify(details))
    localStorage.setItem("sectionInfo", JSON.stringify(section))
  }

  useEffect(() => {
    storeLocally()

    //At least share one meme
    if(details.memes.meme1 !== "" || details.memes.meme2 !== "" || details.memes.meme3 !== "" || details.memes.meme4 !== "" || details.memes.meme5 !== ""){
      setDisabled(false)
    }

  },[details, section])

  return (
    <div className="App flex flex-col justify-center items-center h-screen w-screen">
      <form className="flex flex-col w-3/5 sm:w-1/5" onSubmit={sendData} >   
        { section.first ? <Info details={details} setDetails={setDetails} section={section} setSection={setSection} /> : null }
        { section.second ? <ProfilePicture details={details} setDetails={setDetails} section={section} setSection={setSection} /> : null }
        { section.third ? <Meme details={details} setDetails={setDetails} section={section} setSection={setSection} /> : null }
        { section.third ? <Button text="Submit" disabled={disabled} /> : null }
      </form>
      {section.fourth ? <End /> : null}
    </div>
  );
}

export default App;
