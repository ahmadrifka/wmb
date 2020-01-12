
const tableState ={
    loading: true,
    table:[],
}

function TableReducers (state=tableState, action){
   const {type, loading, table} = action;
    switch (type) {
        case 'FETCH_TABLE':
            return {...state, loading:true }
        case 'FETCH_TABLE_DONE':
            return {...state, loading, table}
        default:
            return state;
    }
}

export default TableReducers;