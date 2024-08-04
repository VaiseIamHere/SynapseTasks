function binary(a){
    let str = "";
    do{
        if(a%2 == 0)    str = "0" + str;
        else            str = "1" + str;
        a = ~~(a/2);
    }while(a!=0)
    return str;
}

function prime_list(a, b){
    if(a > b){
        console.log("Enter Valid Range !!");
        return null;
    }
    let arr_list = {};
    for(let i=a; i<b; ++i){
        let list = [1];
        let cmp = ~~(i/2);
        for(let j=2; j<=cmp; ++j){
            if(i%j == 0)    list.push(j);
        }
        if(list.length == 1)    arr_list[i] = binary(i);
        else{
            list.push(i);
            arr_list[i] = list;
        }
    }
    return arr_list;
}

console.log("Required Output:\n",prime_list(0,12))
