import styles from "./TableHead.module.css"

const TableHead = ({ tableSorting, handleSort }) => {
	const tableHeader = tableSorting.map((item, index) => (
		<th
			className={
				item.directionSort ? (item.directionSort === "asc" ? styles.asc : styles.desc) : ""
			}
			onClick={() => handleSort(index, item.label, item.directionSort)}
		>
			{item.label}
		</th>
	))

	return (
		<thead>
			<tr>{tableHeader}</tr>
		</thead>
	)
}

export default TableHead
