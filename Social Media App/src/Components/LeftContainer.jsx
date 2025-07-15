import HeaderElement from './HeaderElement';
import Post from './Post';
import styles from './LeftContainer.module.css';
import InputData from './InputData';
import { AllPost } from '../Store/AllPostContext';
import { useState } from 'react';
function LeftContainer({ clickButton }) {
  const [postCards, setPosts] = useState([
    
  ]);

  function addPost(value){
    
    setPosts([value, ...postCards]);
  }
  function deletePost(id){
    let newPostCards=postCards.filter((item)=>{item.id!=id})
    setPosts(newPostCards);
  }
  return (
    <AllPost.Provider
      value={{postCards,addPost,deletePost}}
    >
      <div className={styles.LeftContainer}>
        <HeaderElement></HeaderElement>
        {clickButton === 'Home' ? <Post></Post> : <InputData></InputData>}
      </div>
    </AllPost.Provider>
  );
}
export default LeftContainer;
