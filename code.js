let str = ""
function choose(val){
    if(bigger_value===true){
        let big_val = val.toUpperCase();
        str = str + big_val
        document.getElementById("text").innerHTML = str;
        console.log(val);
    }else{
        str = str + val
        document.getElementById("text").innerHTML = str;
        console.log(val);
    }
}

function delete_sym(){
    let new_str = str.split("")
    new_str.pop();
    str = new_str.join("");
    document.getElementById("text").innerHTML = str;
    console.log(str);
}

let symbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ß", "q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä", "y", "x", "c", "v", "b", "n", "m", ",", ".", "-"];
let bigger_value = false;

function bigger(){
    if(bigger_value===false){
        bigger_value = true;
        document.getElementById("bigger_symbol").style.backgroundColor = "dimgrey";

    }else{
        bigger_value = false;
        document.getElementById("bigger_symbol").style.backgroundColor = "lightgrey";
    }
    console.log(bigger_value)
}