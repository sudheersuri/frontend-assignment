import { ADD_FLOW, DELETE_FLOW, EDIT_FLOW, GET_EXPENDITURE_DATA, IExpenditureAction } from "./expenditure-action-types";

const initialData = {
    data: [] as any
}


export default function expenditureReducer(state = initialData, action: IExpenditureAction) {
    
    let newData = action.payload && [...action.payload.data];
    
    switch (action.type) {
        case GET_EXPENDITURE_DATA:
            break;
        case ADD_FLOW:
            newData.splice(1, 0, ["InFlow", "OutFlow", 1]);
            break;
        case EDIT_FLOW:
            newData[action.payload.x][action.payload.y] = action.payload.value;
            break;
        case DELETE_FLOW:
            newData.splice(action.payload.x, 1);
            break;
        default:
            return state;
    }
    
    return {
        data: newData
    }
}