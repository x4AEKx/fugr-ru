const UserInfo = ({ user }) => {
	return (
		<>
			<div>
				Выбран пользователь <b>{`${user.firstName} ${user.lastName}`}</b>
			</div>
			<div>Описание:</div>
			<textarea>{user.description}</textarea>
			<div>
				Адрес проживания: <b>{user.address.streetAddress}</b>
			</div>
			<div>
				Город: <b>{user.address.city}</b>
			</div>
			<div>
				Провинция/штат: <b>{user.address.state}</b>
			</div>
			<div>
				Индекс: <b>{user.address.zip}</b>
			</div>
		</>
	)
}

export default UserInfo
