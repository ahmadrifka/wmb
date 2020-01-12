const optionsState ={
    menu : {
        id:'',
        name:'',
        price:'',
    },
}

function OptionsReducer (state=optionsState, action){
    const{type, menu}= action;

    switch (type) {
        case 'ADD_NEW_MENU':
            console.log(state.menu)
            return {...state, menu}
        default:
          return state
    }
}

export default OptionsReducer;