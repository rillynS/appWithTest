const initialState = {
    user1:{
        id:0,
        password:1111,
        isAuth:false,
        rightAnswer:0,
    },
    user2:{
        id:1,
        password:1111,
        isAuth:false,
        rightAnswer:0,
    }
}


export const usersReducer=(state=initialState,actions) => {
    switch(actions.type){
        
        
        default:
            return state
    }
}