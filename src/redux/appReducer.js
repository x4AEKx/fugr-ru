import * as axios from "axios"

const SET_USERS = "SET_USERS"
const SET_LOADING = "SET_LOADING"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TABLE_SORTING = "SET_TABLE_SORTING"
const SET_SEARCH = "SET_SEARCH"
const SET_USER_INFO = "SET_USER_INFO"
const SET_INIT_APP = "SET_INIT_APP"
const SET_USER = "SET_USER"
const SET_SHOW_FORM = "SET_SHOW_FORM"

const initialState = {
	users: [],
	initApp: false,
	isLoading: false,
	tableSorting: [
		{ label: "id", directionSort: "" },
		{ label: "firstName", directionSort: "" },
		{ label: "lastName", directionSort: "" },
		{ label: "email", directionSort: "" },
		{ label: "phone", directionSort: "" }
	],
	pageSize: 50,
	isShowForm: false,
	currentPage: 1,
	userInfo: null,
	search: ""
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INIT_APP: {
			return {
				...state,
				initApp: action.initApp
			}
		}
		case SET_LOADING: {
			return {
				...state,
				isLoading: action.isLoading
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: action.users
			}
		}
		case SET_USER: {
			const newUser = {
				id: +action.id,
				firstName: action.firstName,
				lastName: action.lastName,
				email: action.email,
				phone: action.phone,
				description: "",
				address: {
					city: "-",
					state: "-",
					streetAddress: "-",
					zip: "-"
				}
			}
			return {
				...state,
				users: [newUser, ...state.users]
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.page
			}
		}
		case SET_TABLE_SORTING: {
			const changeColumn = state.tableSorting.map((e, index) => ({
				...e,
				directionSort: index === action.id ? action.currentSortMethod : ""
			}))
			return {
				...state,
				tableSorting: changeColumn
			}
		}
		case SET_SEARCH: {
			return {
				...state,
				search: action.value
			}
		}
		case SET_USER_INFO: {
			return {
				...state,
				userInfo: action.user
			}
		}
		case SET_SHOW_FORM: {
			return {
				...state,
				isShowForm: action.isShowForm
			}
		}
		default: {
			return state
		}
	}
}

const setInitApp = (initApp) => {
	return { type: SET_INIT_APP, initApp }
}

const setLoading = (isLoading) => {
	return { type: SET_LOADING, isLoading }
}

export const setShowForm = (isShowForm) => {
	return { type: SET_SHOW_FORM, isShowForm }
}

export const setUser = (id, firstName, lastName, email, phone) => {
	return { type: SET_USER, id, firstName, lastName, email, phone }
}

export const setUsers = (users) => {
	return { type: SET_USERS, users }
}

export const setUserInfo = (user) => {
	return { type: SET_USER_INFO, user }
}

export const setSearch = (value) => {
	return { type: SET_SEARCH, value }
}

export const setCurrentPage = (page) => {
	return { type: SET_CURRENT_PAGE, page }
}

export const setTableSorting = (id, currentSortMethod) => {
	return { type: SET_TABLE_SORTING, id, currentSortMethod }
}

export const getUsers = (url) => (dispatch) => {
	dispatch(setInitApp(true))
	dispatch(setLoading(true))
	axios.get(url).then((responce) => {
		dispatch(setUsers(responce.data))
		dispatch(setLoading(false))
	})
}

export default appReducer
