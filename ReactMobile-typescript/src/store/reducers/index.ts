import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

const Initstate = {
    
};

const Common = (state: any = Initstate, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

let Reducer = (history: any) => combineReducers({
    router: connectRouter(history),
    Common
})

export default Reducer