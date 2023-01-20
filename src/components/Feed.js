import React, { useState , useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import "./Feed.css"
import SecretBox from './SecretBox'
import Post from './Post'
import "firebase/firestore";
import {db} from "../firebase"
import SearchIcon from '@mui/icons-material/Search';



function Feed() {
  const[posts, setPosts] = useState ([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const postsRef = collection(db, "posts");   
      const querySnapshot = await getDocs(postsRef);
      setPosts(querySnapshot.docs.map((elem) => ({...elem.data(), id: elem.id})));
    }
    fetchData().catch(console.error)
  }, [])


  return (
    <div className='feed'>
      {/* header  */}
      <div className='feed__header'>
        <h2>Home</h2>
        <div className="feed__input">
        <SearchIcon className="feed__searchIcon" />
        <input placeholder="Search Truth-Exposed" type="text" />
      </div>
      </div>
      <SecretBox />
      {posts.map((post) => (
        <Post 
        key={post.id}
        createdDate={post.createdDate} 
        lastModifiedDate={post.lastModifiedDate}
        text={post.text}
        verified={post.verified}
        avatar={post.avatar}
        image={post.image}
        />
      ))}
    </div>
  )
}

export default Feed
