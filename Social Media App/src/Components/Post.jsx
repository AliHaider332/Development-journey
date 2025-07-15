import { useContext } from 'react';
import { AllPost } from '../Store/AllPostContext';
import styles from './Post.module.css';
import { CiHeart } from 'react-icons/ci';

function Post() {
  const { postCards, deletePost } = useContext(AllPost);

  return (
    <div className={`d-flex flex-wrap gap-3 ${styles.postContainer}`}>
      {postCards.map((item, index) => (
        <div
          className={`card ${styles.customCard}`}
          style={{ width: '18rem' }}
          key={index}
        >
          <div className="card-body">
            <span
              class={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${styles.deleteButton}`}
              onClick={() => deletePost(item.id)}
              role="button"
            >
              X
            </span>
            <h5 className={`card-title ${styles.title}`}>{item.title}</h5>
            <p className={`card-text ${styles.description}`}>
              {item.description}
            </p>
            <div>
              <CiHeart />
              <span className={styles.reactionCount}>
                {Math.floor(Math.random() * 10)}
              </span>
            </div>
            
            {item.tags.map((tag, index) => {
              if (tag.trim() !== '') {
                return (
                  <span key={index} className={`badge text-bg-primary ${styles.tag}`}>
                    {tag}
                  </span>
                );
              }
              return null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
