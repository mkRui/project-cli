import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

const Common = () => {

}

let Reducer = (history: any): any => combineReducers({
    router: connectRouter(history),
    Common
})

export default Reducer