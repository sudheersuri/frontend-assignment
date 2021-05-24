import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import expenditureReducer from './expenditureVisualization/expenditure-action-reducer'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
// import rootReducer from './reducers'

export interface IAppState{
    expenditureData: {data:any[]}
}

const rootReducer = combineReducers({
    expenditureData: expenditureReducer
})

export default function configureStore() {
    const middlewares = [thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const composedEnhancers = compose(middlewareEnhancer)
    const store = createStore(rootReducer, composedEnhancers);
    return store
}
