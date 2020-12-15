import styles from "./Pagination.module.css"

const Pagination = ({ filteredData, pageSize, currentPage, paginate }) => {
	const pages = []

	for (let i = 1; i <= Math.ceil(filteredData.length / pageSize); i++) {
		pages.push(i)
	}

	return (
		<div className={styles.pagination}>
			{pages.map((page) => (
				<span className={currentPage === page && styles.selected} onClick={() => paginate(page)}>
					{page}
				</span>
			))}
		</div>
	)
}

export default Pagination
