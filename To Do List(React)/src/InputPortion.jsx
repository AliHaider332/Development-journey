import styles from './InputPortion.module.css';

function InputPortion() {
  return (
    <div className={styles.element}>
      <div className="row">
        <div className="col-sm-6">
          <input type="text" placeholder="Enter Task" className={styles.INPUT} onChange={(event)=>{console.log(event.target.value)}}/>
        </div>
        <div className="col-sm-4">
          <input type="date" className={styles.date} />
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-success">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputPortion;
