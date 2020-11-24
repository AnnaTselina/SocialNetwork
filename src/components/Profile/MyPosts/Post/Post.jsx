import React from 'react';
import p from "./Post.module.css"


const Post  = (props) => {
    return (
          <div className = {p.item}>
            <img src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"></img>
              {props.message}  

              <div>
                <span>Likes</span>
                {props.likesCount}
              </div>       
          </div>   
    );
}

export default Post;