// import { createStore, applyMiddleware } from 'redux'
import { createStore } from 'redux'
import { reducers } from './reducers'
// import logger from '../middlewares/logger'
// import updateRate from '../middlewares/updateOneRate'

// const enhancer = applyMiddleware(logger)
// const store = createStore(reducer, {}, enhancer)
export const store = createStore(reducers, {})

//dev only
window.store = store
