const display = document.querySelector('.hesapBilgi');
const bttn = document.querySelector('.butonlar');

let displayDeger = '0';
let ilkDeger = null;
let operator = null;
let kontrolDeger = false;

guncelleDisplay();

function guncelleDisplay() {
    display.value = displayDeger;
}

bttn.addEventListener('click', function (e) {
    const element = e.target;

    if (!element.matches('button')) return;

    if (element.classList.contains('operator')) {
        alOperator(element.value);
        guncelleDisplay();
        return;
    }
    if (element.classList.contains('ondalik')) {
        inputOndalik();
        guncelleDisplay();
        return;
    }
    if (element.classList.contains('clear')) {
        clear();
        guncelleDisplay();
        return;
    }

    inputSayi(element.value);
    guncelleDisplay();
});

function inputSayi(num) {
    if (kontrolDeger) {
        displayDeger = num;
        kontrolDeger = false;
    } else {
        displayDeger = displayDeger === '0' ? num : displayDeger + num;
    }
}

function inputOndalik() {
    if (!displayDeger.includes('.')) {
        displayDeger += '.';
    }
}
function clear() {
    displayDeger = '0';
}

function hesapla(bir,iki,operator){
    if(operator==='+'){
        return bir + iki;
    } else if (operator==='-'){
        return bir-iki;
    }else if (operator==='*'){
        return bir*iki;
    }else if (operator==='/'){
        return bir/iki;
    }
    return iki;
}

function alOperator(digerOperator){
    const deger = parseFloat(displayDeger);
    if(operator && kontrolDeger){
        operator=digerOperator;
        return;
    }
    if (ilkDeger === null) {
        ilkDeger = deger;
    } else if(operator){
        const sonuc = hesapla(ilkDeger,deger,operator);
        displayDeger=String(sonuc);
        ilkDeger=sonuc;
    }

    kontrolDeger = true;
    operator = digerOperator;

}




