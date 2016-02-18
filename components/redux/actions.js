let actions = {
    saveAnswer : function(answer){
        return {
            type : "SAVE_ANSWER",
            answer : answer
        }
            
    },
    
    saveDob  :  function(dob){
        return {
            type : "SAVE_DOB",
            dob : dob
        }
    },    
    saveEmail : function(email){
        return {
            type : "SAVE_EMAIL",
            email : email
        }
    }
        
    
        
    
}

export default actions