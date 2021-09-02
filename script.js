var price = Number(document.getElementById("price").innerHTML);
document.getElementById("price").innerHTML = price.toLocaleString();



function fn_addCount(){
    var productNum = Number(document.getElementById("productCount").value);
    var sum = 0;
    if(productNum>=0 && productNum <20){
        productNum++;
        document.getElementById("productCount").value = productNum;
        sum = price * productNum;
        sum = sum.toLocaleString();
        document.getElementById("result").innerText = sum;
    } else {
        return false;
    }
}

function fn_subCount(){
    var productNum = Number(document.getElementById("productCount").value);
    var sum = 0;
    if(productNum>0 && productNum<=20){
        productNum--;
        document.getElementById("productCount").value = productNum;
        sum = price * productNum;
        sum = sum.toLocaleString();
        document.getElementById("result").innerText = sum;
    } else {
        return false;
    }
}

function fn_calResult(){
    var productNum = Number(document.getElementById("productCount").value);
    var sum = 0;
    if(productNum>0 && productNum<=20){
        sum = price * productNum
        sum = sum.toLocaleString();
        document.getElementById("result").innerText = sum;
        document.getElementById("productCount").value = productNum;
    } else if(productNum == null || productNum == ""){
        document.getElementById("productCount").value = productNum;
    } else {
        alert("상품개수를 확인해주세요!");
        document.getElementById("productCount").value = 0;
        document.getElementById("result").innerText = 0;
    } 
}
