import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable';
import { middleware as reduxPackMiddleware } from 'redux-pack'
import { routerMiddleware } from 'react-router-redux'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

export const history = qhistory(
  createHistory(),
  stringify,
  parse,
)

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  reduxPackMiddleware,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  fromJS(initialState),
  composedEnhancers
)

export default store