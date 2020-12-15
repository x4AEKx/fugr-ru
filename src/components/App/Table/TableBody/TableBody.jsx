const TableBody = ({ currentUsers, onRow }) => {
	const userList = currentUsers.map((user) => (
		<tr key={user.phone} onClick={() => onRow(user)}>
			<td>{user.id}</td>
			<td>{user.firstName}</td>
			<td>{user.lastName}</td>
			<td>{user.email}</td>
			<td>{user.phone}</td>
		</tr>
	))

	return <tbody>{userList}</tbody>
}

export default TableBody
