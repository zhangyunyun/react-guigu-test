//redux状态管理
import {createStore} from 'redux'
import {counter} from './reducers'

const store = createStore(counter)
console.log(store)

export default store