export const sum = (a)=> {
    if(a==''){
        return 0;
    }
    a= a.replace(/\D/g,'')
    let number_array = a.split("")
    let total = 0
    for(let number of number_array){
        total = total+ Number(number)
    }
    return total

}

