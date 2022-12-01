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

let symbols = ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä", "y", "x", "c", "v", "b", "n", "m"];
let bigger_value = false;
let special_symbols = [",", ".", "-", "ß"];
let speical_symbols_2 = [";", ":", "_", "?"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let numbers_2 = ["!", '"', "§", "$",  "%", "&", "/", "(", ")", "="];

function bigger(){
    if(bigger_value===false){
        bigger_value = true;
        document.getElementById("bigger_symbol").style.backgroundColor = "dimgrey";


        for(let a = 0; a < symbols.length; a++){
            document.getElementById(symbols[a]).innerHTML = symbols[a].toUpperCase();
        }
        for(let b = 0; b < special_symbols.length; b++){
            document.getElementById(special_symbols[b]).innerHTML = speical_symbols_2[b];
        }

        for(let c = 0; c < numbers.length; c++){
            document.getElementById(numbers[c]).innerHTML = numbers_2[c];
        }




    }else{
        bigger_value = false;
        document.getElementById("bigger_symbol").style.backgroundColor = "lightgrey";
        for(let a = 0; a < symbols.length; a++){
            document.getElementById(symbols[a]).innerHTML = symbols[a].toLowerCase();
        }
        for(let b = 0; b < special_symbols.length; b++){
            document.getElementById(special_symbols[b]).innerHTML = special_symbols[b];
        }

        for(let c = 0; c < numbers.length; c++){
            document.getElementById(numbers[c]).innerHTML = numbers[c];
        }
    }
    console.log(bigger_value)
}