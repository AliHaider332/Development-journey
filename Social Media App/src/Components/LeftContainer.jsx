import { useEffect, useState } from 'react';
import HeaderElement from './HeaderElement';
import Post from './Post';
import InputData from './InputData';
import Welcome from './Welcome';
import Loading from './Loading';
import styles from './LeftContainer.module.css';
import { AllPost } from '../Store/AllPostContext';

function LeftContainer({ clickButton }) {
  const [postCards, setPosts] = useState([]);
  const [mode, changeMode] = useState(true);
  const [loading, changeLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
  
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/posts', { signal });
        const data = await res.json();
        setPosts(data.posts);
        changeLoading(false);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Failed to fetch posts:', err);
          changeLoading(false);
        }
      }
    };
  
    fetchPosts();
  
    return () => {
      controller.abort(); // cleanup on unmount
    };
  }, []);
  

  function addPost(value) {
    setPosts(prevPosts => [value, ...prevPosts]);
  }

  function deletePost(id) {
    const newPostCards = postCards.filter(item => item.id !== id);
    setPosts(newPostCards);
  }

  return (
    <AllPost.Provider value={{ postCards, addPost, deletePost, changeMode }}>
      <div className={styles.LeftContainer}>
        <HeaderElement />
        {loading ? (
          <Loading />
        ) : mode ? (
          <Welcome />
        ) : clickButton === 'Home' ? (
          <Post />
        ) : (
          <InputData />
        )}
      </div>
    </AllPost.Provider>
  );
}

export default LeftContainer;
