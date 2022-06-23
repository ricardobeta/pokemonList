import { State } from "./Context";


type UpdatedName = {
    type: 'updatedName',
    payload: string
}


export const MyReducer = ( state: State, action: UpdatedName):State => {
    switch (action.type) {
        case 'updatedName':
            return {...state, name: action.payload}
        default:
            return state
    }
}