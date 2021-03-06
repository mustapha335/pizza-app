import styles from '../styles/Add.module.css'

const AddButton = ({ setClose }) => {
  return (
    <div className={styles.buttonContainer}>
      <div onClick={() => setClose(false)} className={styles.mainAddButton}>
        Add New Pizza
      </div>
    </div>
  )
}

export default AddButton
