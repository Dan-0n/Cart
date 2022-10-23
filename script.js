

function enablePrint(){ 
    var check = document.getElementById("check");
    var print = document.getElementById("print");
    if (check.checked){
        print.removeAttribute("disabled");
    }else{
        print.disabled = "true";
    }

}

function printAlert(){
    var textCart = "Los artículos de mi carrito son: " + 
    "y el precio total es: " + 
    "Forma de pago: ";
    var textError = "Seleccione una forma de pago";
    if (payment.value == "select"){
        alert(textError);
    }else{
        alert(textCart);
    }

}

function paymentMethod(){
    var card = document.getElementById("card");
    var cash = document.getElementById("cash");
    if(payment.value == "card"){
        card.style.display ="block";
        cash.style.display ="none";
    }else if (payment.value == "cash"){
        cash.style.display ="block";
        card.style.display ="none";
    }else{
        card.style.display = "none";
        cash.style.display = "none";
    }

}

function clearFields(){
    document.getElementById("cart").value = "";


}