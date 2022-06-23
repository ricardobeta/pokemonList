import { State } from "./Context";


type UpdatedContext = {
    type: 'updatedName',
    payload: string
} | {
    type: 'updatedPaginationController',
    payload: {
        next: boolean,
        back: boolean
    }
}


export const MyReducer = ( state: State, action: UpdatedContext):State => {
    switch (action.type) {
        case 'updatedName':
            return {...state, name: action.payload}
        case 'updatedPaginationController':
            return {...state, ...action.payload}
        default:
            return state
    }
}