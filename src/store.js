// import { createStore, applyMiddleware } from 'redux'
import { createStore } from 'redux'
import reducer from './reducers'
// import logger from '../middlewares/logger'
// import updateRate from '../middlewares/updateOneRate'

// const enhancer = applyMiddleware(logger)
// const store = createStore(reducer, {}, enhancer)
const store = createStore(reducer, {})

//dev only
window.store = store

export default store