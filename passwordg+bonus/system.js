const passwordCreater = (obj) => {
    passwordSet = "abcdefghijklmnopqrstuvwxyz"
    const checkNumbers = obj.numbers
    const specialCharacters = obj.specialCharacters
    const capitals = obj.capitals
    length = null
    if(typeof obj.lengthofp == typeof []){
        length = Math.floor(Math.random()*(obj.lengthofp[1] - obj.lengthofp[0]+1) + obj.lengthofp[0])
    }
    else                    length = obj.lengthofp - 1
    if(capitals)            passwordSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(specialCharacters)   passwordSet += "&#@*"
    if(checkNumbers)        passwordSet += "0123456789"
    password = ""
    l = passwordSet.length
    for(i=0; i<length; ++i){
        j = Math.floor(Math.random()*l + 1)
        password += passwordSet.charAt(j)
    }
    if(capitals){
        index = Math.floor(Math.random()*length - 1)
        password = password.substring(0,index) + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random()*26 + 1)) + password.substring(index,length)
    }
    if(specialCharacters){
        index = Math.floor(Math.random()*length - 1)
        password = password.substring(0,index) + "&#@*".charAt(Math.floor(Math.random()*4 + 1)) + password.substring(index,length)
    }
    if(checkNumbers){
        index = Math.floor(Math.random()*length - 1)
        password = password.substring(0,index) + "0123456789".charAt(Math.floor(Math.random()*10 + 1)) + password.substring(index,length)
    }
    return password
}

const binary = (a) => {
    let str = "";
    do{
        if(a%2 == 0)    str = "0" + str;
        else            str = "1" + str;
        a = ~~(a/2);
    }while(a!=0)
    return str;
}

const prime_list = (a, b) => {
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


const sendPassword = (req, res) => {
    obj = req.body
    password = passwordCreater(obj)
    obj['password'] = password
    res.status(200).json(obj)
}

const task1 = (req, res) => {
    a = req.body.range[0]
    b = req.body.range[1]
    list = prime_list(a,b)
    obj = {response: list}
    res.status(200).json(obj)
}
module.exports = {
    sendPassword,
    task1
}
