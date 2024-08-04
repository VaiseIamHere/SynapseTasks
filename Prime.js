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

console.log(prime_list(0,12))

/*
<----------------- Output ----------------->
 {
  '0': '0',
  '1': '1',
  '2': '10',
  '3': '11',
  '4': [ 1, 2, 4 ],
  '5': '101',
  '6': [ 1, 2, 3, 6 ],
  '7': '111',
  '8': [ 1, 2, 4, 8 ],
  '9': [ 1, 3, 9 ],
  '10': [ 1, 2, 5, 10 ],
  '11': '1011'
}
*/
