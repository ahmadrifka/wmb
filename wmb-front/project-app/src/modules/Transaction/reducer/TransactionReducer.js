const transState ={
    loading:true,
    transaction:[],
}

function TransactionReducer(state=transState, action){
    const{type, loading, transaction, trxIndex, paymentValue } = action;

    switch (type) {
        case 'FETCH_TRANSACTION':
            return {...state, loading:true }
        case 'FETCH_TRANSACTION_DONE':
            return {...state, loading, transaction}
        case 'INPUT_PAYMENT':
            return{...state,
                transaction: state.transaction.map((item, index) => {
                    if(index === trxIndex) {
                        return { ...item, payment: Number(paymentValue) };
                    } else {
                        return item;
                    }
                })
            }
        default:
            return state
    }

}

export default TransactionReducer;