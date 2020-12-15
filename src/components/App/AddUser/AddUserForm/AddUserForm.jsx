import { Field, reduxForm } from "redux-form"
import styles from "./AddUserForm.module.css"
import { renderField } from "../../../common/FormControls/FormControls"

const required = (value) => (value ? undefined : "*Required Field")

const AddUserForm = (props) => {
	const { handleSubmit } = props
	return (
		<form onSubmit={handleSubmit(props.onSubmitHandler)}>
			<div className={styles.flex}>
				<Field name="id" component={renderField} label="id" type="number" validate={required} />
				<Field
					name="firstName"
					component={renderField}
					label="firstName"
					type="text"
					validate={required}
				/>
				<Field
					name="lastName"
					component={renderField}
					label="lastName"
					type="text"
					validate={required}
				/>
				<Field
					name="email"
					component={renderField}
					label="email"
					type="email"
					validate={required}
				/>
				<Field name="phone" component={renderField} label="phone" type="tel" validate={required} />
			</div>

			<button type="submit" disabled={props.invalid}>
				Добавить в таблицу
			</button>
		</form>
	)
}

export default reduxForm({
	form: "addUser"
})(AddUserForm)
