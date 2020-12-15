import TableBody from "./TableBody/TableBody"
import TableHead from "./TableHead/TableHead"

const Table = (props) => {
	return (
		<table>
			<TableHead tableSorting={props.tableSorting} handleSort={props.handleSort} />
			<TableBody currentUsers={props.currentUsers} onRow={props.onRow} />
		</table>
	)
}

export default Table
