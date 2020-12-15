import React from "react"
import { connect } from "react-redux"
import {
	getUsers,
	setCurrentPage,
	setTableSorting,
	setUsers,
	setSearch,
	setUserInfo,
	setUser,
	setShowForm
} from "../../redux/appReducer"
import App from "./App"
import { sortingFunc } from "../common/utils/utils"

class AppContainer extends React.Component {
	paginate = (page) => {
		this.props.setCurrentPage(page)
	}

	onSearch = ({ search }) => {
		debugger
		this.props.setCurrentPage(1)
		this.props.setSearch(search)
	}

	onRow = (user) => {
		this.props.setUserInfo(user)
	}

	submit = ({ id, firstName, lastName, email, phone }) => {
		this.props.setUser(id, firstName, lastName, email, phone)
		this.props.setShowForm(false)
	}

	getFilteredData = () => {
		const { users, search } = this.props

		if (!search) {
			return users
		}

		return users.filter((item) => {
			return (
				item.firstName.toLowerCase().includes(search.toLowerCase()) ||
				item.lastName.toLowerCase().includes(search.toLowerCase()) ||
				item.email.toLowerCase().includes(search.toLowerCase()) ||
				item.phone.includes(search)
			)
		})
	}

	handleSort = (id, label, sortMethod) => {
		let currentSortMethod = ""
		switch (sortMethod) {
			case "":
				currentSortMethod = "asc"
				break
			case "asc":
				currentSortMethod = "desc"
				break
			case "desc":
				currentSortMethod = "asc"
				break
			default:
				currentSortMethod = "asc"
		}

		const sortData = sortingFunc(this.props.users, label, currentSortMethod)

		this.props.setTableSorting(id, currentSortMethod)
		this.props.setUsers(sortData)
	}

	render() {
		const filteredData = this.getFilteredData()

		const indexOfLastPost = this.props.currentPage * this.props.pageSize
		const indexOfFirstPost = indexOfLastPost - this.props.pageSize
		const currentUsers = filteredData.slice(indexOfFirstPost, indexOfLastPost)
		return (
			<App
				isLoading={this.props.isLoading}
				users={this.props.users}
				userInfo={this.props.userInfo}
				paginate={this.paginate}
				tableSorting={this.props.tableSorting}
				handleSort={this.handleSort}
				getFilteredData={this.getFilteredData}
				pageSize={this.props.pageSize}
				currentUsers={currentUsers}
				filteredData={filteredData}
				onSearch={this.onSearch}
				onRow={this.onRow}
				getUsers={this.props.getUsers}
				initApp={this.props.initApp}
				currentPage={this.props.currentPage}
				onSubmitHandler={this.submit}
				setShowForm={this.props.setShowForm}
				isShowForm={this.props.isShowForm}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.users.isLoading,
		users: state.users.users,
		userInfo: state.users.userInfo,
		tableSorting: state.users.tableSorting,
		search: state.users.search,
		pageSize: state.users.pageSize,
		currentPage: state.users.currentPage,
		initApp: state.users.initApp,
		isShowForm: state.users.isShowForm
	}
}

export default connect(mapStateToProps, {
	getUsers,
	setCurrentPage,
	setTableSorting,
	setUsers,
	setSearch,
	setUserInfo,
	setUser,
	setShowForm
})(AppContainer)
