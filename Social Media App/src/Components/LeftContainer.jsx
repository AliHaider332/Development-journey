import { useEffect, useState } from 'react';
import HeaderElement from './HeaderElement';
import Welcome from './Welcome';
import Loading from './Loading';
import styles from './LeftContainer.module.css';
import { AllPost } from '../Store/AllPostContext';
import { useNavigate } from 'react-router-dom';

function LeftContainer({ children }) {
  const [postCards, setPosts] = useState([]);
  const [mode, changeMode] = useState(true);
  const [loading, changeLoading] = useState(true);
  const navigate = useNavigate();

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
        if (err.name !== 'AbortError') {
          console.error('Fetch error:', err);
        }
        changeLoading(false);
      }
    };

    fetchPosts();
    return () => controller.abort();
  }, []);

  async function addPost(value) {
    setPosts(prev => [value, ...prev]);

    try {
      await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: value.id,
          title: value.title,
          userId: value.userId,
          body: value.body,
          tags: Array.isArray(value.tag) ? value.tag : [value.tag],
        }),
      });

      changeMode(false);
      navigate('/');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  }

  function deletePost(id) {
    setPosts(prev => prev.filter(item => item.id !== id));
  }

  return (
    <AllPost.Provider value={{ postCards, addPost, deletePost, changeMode }}>

      <div className={styles.LeftContainer}>
        <HeaderElement />
        { mode ? <Welcome /> : loading ? <Loading /> : children}
      </div>
      
    </AllPost.Provider>
  );
}

export default LeftContainer;
