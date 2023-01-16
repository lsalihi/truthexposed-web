import { Avatar } from '@mui/material';
import React from 'react';
import "./Post.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Button from '@mui/material/Button';


function Post({
    createdDate,
    id,
    text,
    verified,
    lastModifiedDate,
    image,
    avatar
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src= {avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {createdDate}
              {/* {" "} */}
              <span className='post__headerSpecial'>
                {verified && <VerifiedUserIcon className=" post__badge"/> }
                {lastModifiedDate}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p> {text} </p>
          </div>  
        </div>
        <img 
        src={image}
        alt=''
        />
         <div className="post__themes">
          <p>#smtg</p>
          <p>#smtg</p>
          <p>#smtg</p>
        </div>
        <div className="post__footer">
        <Button 
        color="primary" 
        startIcon={<KeyboardDoubleArrowUpIcon fontSize='small' />}>
        </Button>
        <Button
         color="primary" 
         startIcon={<KeyboardDoubleArrowDownIcon fontSize='small'/>}>
        </Button> 
        <Button
         color="primary" 
         startIcon={<ChatBubbleOutlineIcon fontSize='small'/>}>
        </Button> 
        <Button
         color="primary" 
         startIcon={ <NorthEastIcon fontSize='small' />}>
        </Button>
        </div>
      </div>

    </div>
  )
}

export default Post
