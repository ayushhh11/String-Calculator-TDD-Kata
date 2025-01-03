export const sum = (string)=> {
    if(string==''){
        return 0;
    }
    if(string.includes('-')){
        return "negative numbers not allowed"
    }
    string= string.replace(/\D/g,'')
    let number_array = string.split("")
    let total = 0
    for(let number of number_array){
        total = total+ Number(number)
    }
    return total

}

