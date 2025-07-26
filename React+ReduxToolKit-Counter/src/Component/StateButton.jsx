import { useDispatch, useSelector } from 'react-redux';
import { modeReducer } from './Store';
function StateButton() {
  const dispatcher = useDispatch();
  const state = useSelector((store) => store.mode.modeState);
  const mode = !state ? "Hide" : "Show";
  return (
    <button
      type="button"
      className="btn btn-info"
      style={{ margin: '5px' }}
      onClick={() => {
        dispatcher(modeReducer.CHANGE_MODE());
      }}
    >
      {mode}
    </button>
  );
}
export default StateButton;
