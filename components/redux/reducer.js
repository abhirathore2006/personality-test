let reducer = function(state,action){
    
    switch (action.type) {
        case 'SAVE_ANSWER':
            
            let ans = state.answer.map((cur,i)=>{ return i==action.answer[0] ?  action.answer[1]  : cur;
               
            })
            
            console.log(ans)
            return Object.assign({},state,{
                answer : ans
               
            });
            
        
        default:
                return state;
    }
    
}

export default reducer