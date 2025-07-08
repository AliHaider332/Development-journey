import styles from './ButtonContainer.module.css';
function ButtonContainer({ buttonClick }) {
  const buttonList = [
    'C',
    '1',
    '2',
    '+',
    '3',
    '4',
    '-',
    '5',
    '6',
    '*',
    '7',
    '8',
    '/',
    '=',
    '9',
    '0',
    '.',
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonList.map((button) => {
        return (
          <button
            key={button}
            className={styles.box}
            onClick={() => {
              buttonClick(button);
            }}
            
          >
            {button}{' '}
          </button>
        );
      })}
    </div>
  );
}
export default ButtonContainer;
