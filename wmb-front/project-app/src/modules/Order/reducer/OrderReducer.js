const orderState={
    order: {
        id:'',
        transaction:'',
        menu: '',
        qty: ''
    },
    selectOrders:[],
    transaction:{
        id: '',
        name: '',
        amount_of_customer:'',
        tables:'',
        status:'Unpaid',
        price:'',
        total_Price:'',
        change:'',
        order:[]
        // cashier:'',
    },
    loading:true,

}

function OrderReducer(state=orderState, action){
    const{type, transaction, menus, indexMenu, orders, loading, index, input, trans } = action;

    switch (type) {
        case 'ADD_CUSTOMER':
            console.log('reducer customer',state.transaction)
            return {...state, transaction}

        case 'SELECT_TABLE':
            console.log('selectable', state.transaction)
            console.log('selecttablereducer',trans)
            return {...state,
                transaction: trans
            }
        case 'ADD_ITEMS':
            const selectedItem = menus.find((e,i)=>
                indexMenu === i
            )
            // console.log('additemstrans',transItem)
            // console.log('additems',state.transaction.id)
            const {order, ...newTrans}=state.transaction
            console.log('ini select',state.selectedItem)
            return {...state,
                order: {...state.order,
                    menu:selectedItem,
                    transaction: { ...newTrans },
                }
            }
        case 'INPUT_QTY':
            return {...state, order:{...state.order, qty:input}}

        case 'FETCH_ORDER':
            return {...state, loading:true }

        case 'FETCH_ORDER_DONE':
            console.log('masuk fetch')
            return {...state, loading, orders}

        case 'DELETE_ITEMS':
            return {...state,
                orders: state.orders.menus.filter((e,id)=> id !== index)}

        // case 'FETCH_LIST_ORDERS':
        //     return {...state,
        //     selectOrders:state.selectOrders.push(orderId)
        // }
        default:
            return state;
    }
}


export default OrderReducer