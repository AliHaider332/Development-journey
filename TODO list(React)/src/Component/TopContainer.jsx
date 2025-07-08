import styles from './TopContainer.module.css';
function TopContainer({ getInputValue, getInputDate, addTask ,inputValue,intputDate}) {
  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Task"
          className={styles.inputPlace}
          value={inputValue}
          onChange={(event) => {
            getInputValue(event.target.value);
          }}
        />
      </div>

      <div className="col-4">
        <input
          type="date"
          value={intputDate}
          onChange={(event) => {
            getInputDate(event.target.value);
          }}
        />
      </div>

      <div className="col-2">
        <button type="button" class="btn btn-success" onClick={addTask}>
          ADD
        </button>
      </div>
    </div>
  );
}
export default TopContainer;
