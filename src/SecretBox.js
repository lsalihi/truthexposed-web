import {Avatar, Button } from '@mui/material'
import React from 'react'
import "./SecretBox.css"


function SecretBox() {
  return (
    <div className='secretBox'>
      <form>
        <div className='secretBox__input'>
          <Avatar src='https://www.shutterstock.com/shutterstock/photos/1564462096/display_1500/stock-photo-old-texture-green-concrete-wall-grunge-background-1564462096.jpg'/>
          <input placeholder='What is your secret?' type="text"/>
        </div>
        <input className='secretBox__themeInput' placeholder='Enter your Themes' type="text"/>
        <Button className='secretBox__postButton'>Post</Button>
      </form>
    </div>
  )
}

export default SecretBox
