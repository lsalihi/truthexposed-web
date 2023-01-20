import {Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./SecretBox.css"
import {db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';


function SecretBox() {
  const [secretMessage , setSecretMessage ] = useState("");
  const [secretImage, setSecretImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();
    addDoc(collection(db , "posts"),{
      text: secretMessage,
      image: secretImage,
      avatar: "https://www.shutterstock.com/shutterstock/photos/1564462096/display_1500/stock-photo-old-texture-green-concrete-wall-grunge-background-1564462096.jpg" ,
      lastModified:"1d ago",
      createdDate: "katara me",
      verified:true ,
    } );

    setSecretImage("");
    setSecretMessage("");
  
  };

  return (
    <div className='secretBox'>
      <form>
        <div className='secretBox__input'>
          <Avatar src='https://www.shutterstock.com/shutterstock/photos/1564462096/display_1500/stock-photo-old-texture-green-concrete-wall-grunge-background-1564462096.jpg'/>
          <input 
          onChange={(e) => setSecretMessage( e.target.value)}
          value={secretMessage} 
          placeholder='What is your secret?' 
          type="text"
          />
        </div>
        <input 
        onChange={(e) => setSecretImage(e.target.value)}
        value={secretImage}
        className='secretBox__themeInput' 
        placeholder='Enter your Themes' 
        type="text"
        />
        <Button
        onClick={sendTweet}
        type='submit'
        className='secretBox__postButton'>Post
        </Button>
      </form>
    </div>
  )
}

export default SecretBox
