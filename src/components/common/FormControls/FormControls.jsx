import styles from "./FormControls.module.css"

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
	<div>
		<label>{label}</label>
		<input {...input} placeholder={label} type={type} />
		{touched &&
			((error && <span className={styles.red}>{error}</span>) ||
				(warning && <span className={styles.red}>{warning}</span>))}
	</div>
)

export const renderSearch = ({
	input,
	label,
	type,
	placeholder,
	meta: { touched, error, warning }
}) => (
	<div>
		<label className={styles.mr5}>{label}</label>
		<input {...input} placeholder={placeholder} type={type} />
		{touched &&
			((error && <span className={styles.red}>{error}</span>) ||
				(warning && <span className={styles.red}>{warning}</span>))}
	</div>
)
