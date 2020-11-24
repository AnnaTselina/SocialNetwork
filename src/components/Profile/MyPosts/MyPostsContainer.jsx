import {addPostActionCreator} from '../../../redux/reducers/profile-reducer.js';
import {updateNewPostActionCreator} from '../../../redux/reducers/profile-reducer.js';
import MyPosts from './MyPosts'
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator()); 
    },
    changeNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;