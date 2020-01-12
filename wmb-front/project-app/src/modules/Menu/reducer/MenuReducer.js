
const menuState ={
    loading: true,
    menu:[],
    pesan: [],
}



function MenuReducer (state=menuState, action){
   const {type, loading, menu} = action;
   
    switch (type) {
        case 'FETCH_MENU':
            return {...state, loading:true }
        case 'FETCH_MENU_DONE':
            return {...state, loading, menu}
       
        // case 'CLEAR_ITEMS':
        //     return {...state, pesan: []}
        // case 'DELETE_ITEMS':
        //     return {...state, pesan: state.pesan.filter((e,id)=>{
        //         return id !== index;
        //     })}

        
        default:
            return state;
    }
}

export default MenuReducer;