const output = document.querySelector("#output");
const copy_button = document.querySelector("#copy-button");

const PasswordLength = document.querySelector("#length");
const Number = document.querySelector("#number");
const Capital = document.querySelector("#capital");
const Small = document.querySelector("#small");
const Symbol = document.querySelector("#symbol");
const frm = document.querySelector("#frm");

copy_button.addEventListener("click",async()=>{
    const pass = output.value;

    if(pass)
    {
        await navigator.clipboard.writeText(pass);
        alert("Copy To Clipboard");

    }
    else
    {
        alert("There Is No Password To Copy");
    }


})


function RandomGenerationChar(min,max){

    const limit = max-min +1;
    const code = (Math.floor(Math.random()*limit)+min);
    return String.fromCharCode(code)
}


function NumberValue(){

    return RandomGenerationChar(48,57);
}

function CapitalValue(){
    return RandomGenerationChar(65,90);
}

function SmallValue(){
    return RandomGenerationChar(97,122);
}

function SymbolsValue(){
    var symbols = "`!@#$%^&*()_+?\/+="
    return symbols[Math.floor(Math.random()*symbols.length)];
}

const functionArray = [

    {
        element:Number,
        fun:NumberValue
    },

    {
        element:Capital,
        fun:CapitalValue
    },

    {
        element:Small,
        fun:SmallValue
    },

    {
        element:Symbol,
        fun:SymbolsValue
    }

]


frm.addEventListener("submit",(e)=>{

    e.preventDefault();
    let Limit = PasswordLength.value
    let GeneratePassword="";  

    const funArray = functionArray.filter(({element})=>element.checked);

    for ( i=0 ; i<Limit ; i++ ){

        const index =  Math.floor(Math.random()*funArray.length);
        const letter = funArray[index].fun();
        GeneratePassword+=letter;

        output.value = GeneratePassword;
    }
})


