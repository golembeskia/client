import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { searchReducer } from './searchReducer'
import { cartReducer } from './cartReducer'
import { compareReducer } from './compareReducer'
import { drawerReducer } from './drawerReducer'

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  compare: compareReducer,
  drawer: drawerReducer
})

export default rootReducer
