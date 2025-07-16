import { useContext, useRef } from 'react';
import { AllPost } from '../Store/AllPostContext';

function InputData() {
  const userIdRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const tagsRef = useRef();
  const { addPost } = useContext(AllPost);
  return (
    <form
      className="p-3"
      onSubmit={(e) => {
        e.preventDefault();
        addPost({
          id:Date.now(),
          userId: userIdRef.current.value,
          title: titleRef.current.value,
          body: descriptionRef.current.value,
          tags: tagsRef.current.value.split(' '),
        });
        userIdRef.current.value = '';
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        tagsRef.current.value = '';

      }}
    >
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter User ID"
          ref={userIdRef}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Post Title"
          ref={titleRef}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter Description"
          rows="3"
          ref={descriptionRef}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Tags (space-separated, e.g. react javascript)"
          ref={tagsRef}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit Post
      </button>
    </form>
  );
}
export default InputData;
