import styles from "./AddUser.module.css"
import AddUserForm from "./AddUserForm/AddUserForm"

const AddUser = (props) => {
	return (
		<div className={styles.container}>
			{props.isShowForm ? (
				<AddUserForm onSubmitHandler={props.onSubmitHandler} />
			) : (
				<button onClick={() => props.setShowForm(true)}>Добавить пользователя</button>
			)}
		</div>
	)
}

export default AddUser
