import { useDispatch, useSelector } from 'react-redux';

function StateButton() {
  const dispatcher = useDispatch();
  const state = useSelector((store) => store.privacy);
  const mode = !state ? "Hide" : "Show";
  return (
    <button
      type="button"
      className="btn btn-info"
      style={{ margin: '5px' }}
      onClick={() => {
        dispatcher({ type: 'mode' });
      }}
    >
      {mode}
    </button>
  );
}
export default StateButton;
