// 숫자형 누적 값 변수생성
let intSum = 0;

// 문자형 누적 값 로직용 변수생성
let strCurrent = 0;

function fnAdd() {
    // input의 value 가져오기
    let insVal = document.getElementById("ins").value;
    
    // 숫자형 값, 문자형 값 temporay 변수 생성
    let intVal;
    let strVal;

    // input값 공백처리
    if(insVal == "" || insVal == null) {
        alert("값을 입력해주세요!");
        return false;
    } else {
        intVal = Number(insVal);
        strVal = insVal;

        // 출력결과에 입력하기
            // 1. 숫자형 누적 연산
            intSum += intVal;
            document.getElementById("numberType").innerText = intSum;

            // 2. 문자형 누적 연산
            if( strCurrent == 0) {
                document.getElementById("stringType").innerHTML = "<div class=\"sample_" + strCurrent + "\">" + strVal + "</div>";
                strCurrent++;
            } else if( strCurrent != 0) {
                strVal = "<div class=\"sample_" + strCurrent + "\">" + strVal + "</div>";
                document.getElementById("stringType").innerHTML += strVal;
                strCurrent++;
            }
    }





}