import styles from './InputBox.module.css'
function InputBox({data})
{
    return(
        <input type="text" value={data} className={styles.InputBox} readOnly/>
    )
}
export default InputBox;