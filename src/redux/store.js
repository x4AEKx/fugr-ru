import { applyMiddleware, combineReducers, createStore } from "redux"
import { reducer as formReducer } from "redux-form"
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer"

const reducers = combineReducers({
	users: appReducer,
	form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
