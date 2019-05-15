import { combineReducers } from 'redux'

let common = {

}


const Common = (state = common, action) => {
    switch (action.type) {
        default:
            return state
    }
}



let reducer = combineReducers({
    Common: Common
})

export default reducer