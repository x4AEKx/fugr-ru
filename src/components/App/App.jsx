import Preloader from "../common/Preloader/Preloader"
import UserInfo from "./UserInfo/UserInfo"
import Search from "./Search/Search"
import Pagination from "./Pagination/Pagination"
import Table from "./Table/Table"
import styles from "./App.module.css"
import Buttons from "./Buttons/Buttons"
import AddUser from "./AddUser/AddUser"

const App = (props) => {
	return (
		<div className={styles.container}>
			{props.initApp ? (
				props.isLoading ? (
					<Preloader />
				) : (
					<>
						<Pagination
							currentPage={props.currentPage}
							paginate={props.paginate}
							pageSize={props.pageSize}
							filteredData={props.filteredData}
						/>
						<Search onSearch={props.onSearch} />
						<AddUser
							onSubmitHandler={props.onSubmitHandler}
							setShowForm={props.setShowForm}
							isShowForm={props.isShowForm}
						/>
						<Table
							tableSorting={props.tableSorting}
							handleSort={props.handleSort}
							getFilteredData={props.getFilteredData}
							currentUsers={props.currentUsers}
							onRow={props.onRow}
						/>
						{props.userInfo && <UserInfo user={props.userInfo} />}
					</>
				)
			) : (
				<Buttons getUsers={props.getUsers} />
			)}
		</div>
	)
}

export default App
