import React from 'react';
import p from "./MyPosts.module.css"
import Post from './Post/Post';





const MyPosts  = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {  
    props.addPost()       
  }

  let changeNewPostText = () => {
    let text = newPostElement.current.value;  
    //props.updateNewPostActionCreator(text)  
    props.changeNewPostText(text);
  }
  


  let postElements = props.profilePage.posts.map(p =>  <Post message={p.message} likesCount={p.likesCount} id={p.id}   />)
  
    return (

        <div className = {p.postsBlock}>
          <h3>my posts</h3>
          <div>
            <div>
              <textarea ref={newPostElement} onChange = {changeNewPostText} value={props.profilePage.newPostText}></textarea>
            </div>
            <div>
              <button onClick = {addPost}>Add post</button>
            </div>
          </div>
          <div className = {p.posts}> 
            {postElements}
          </div>
          
        </div>
    
    );
}

export default MyPosts;