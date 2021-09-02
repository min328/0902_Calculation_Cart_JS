

function fn_addCount(){
    var price = document.getElementById("price").innerHTML;
    var productNum = Number(document.getElementById("productCount").value);
    var result = 0;
    if(productNum>=0 && productNum <20){
        productNum++;
        document.getElementById("productCount").value = productNum;
        document.getElementById("result").innerText = price * productNum;
    } else {
        return false;
    }
}

function fn_subCount(){
    var price = document.getElementById("price").innerHTML;
    var productNum = Number(document.getElementById("productCount").value);
    var result = 0;
    if(productNum>0 && productNum<=20){
        productNum--;
        document.getElementById("productCount").value = productNum;
        document.getElementById("result").innerText = price * productNum;
    } else {
        return false;
    }
}

function fn_calResult(){
    var price = document.getElementById("price").innerText;
    var productNum = Number(document.getElementById("productCount").value);
    var result = 0;
    if(productNum>0 && productNum<=20){
        result = price * productNum
        document.getElementById("result").innerText = result;
        document.getElementById("productCount").value = productNum;
    } else if(productNum == null || productNum == ""){
        document.getElementById("productCount").value = productNum;
    } else {
        alert("상품개수를 확인해주세요!");
        document.getElementById("productCount").value = 0;
        document.getElementById("result").innerText = 0;
    } 
}
