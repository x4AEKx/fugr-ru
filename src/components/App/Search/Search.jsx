import { Field, reduxForm } from "redux-form"
import { renderSearch } from "../../common/FormControls/FormControls"
import styles from "./Search.module.css"

const SearchForm = ({ handleSubmit, onSearch }) => {
	return (
		<div className={styles.search}>
			<form className={styles.flex} onSubmit={handleSubmit(onSearch)}>
				<Field
					name="search"
					label="Найти"
					type="text"
					placeholder="Введите текст"
					component={renderSearch}
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	)
}

export default reduxForm({
	form: "search"
})(SearchForm)
