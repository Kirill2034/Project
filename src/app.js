import './style.css'

const iddInput = document.querySelector('.iddInput');
const delInput = document.querySelector('.delInput');
const addBtn = document.querySelector('#addBtn');
const delBtn = document.querySelector('#delBtn');
const balanse = document.querySelector('#balanse');
const ZpBalans = document.querySelector('#ZpBalans');
const internet = document.querySelector('#internet');
let delFood = document.querySelector('#delFood');
let AllBalanse = 0;
let balansFoods = 0;
let internetBalans = 0;
let balansZp = 0;
delFood.innerHTML = 0;
ZpBalans.innerHTML = 0;
internet.innerHTML = 0;

state = {
    balance: 0,
    eating: 0
}

addBtn.addEventListener('click', AddBalanse)

function AddBalanse() {
    let add = prompt("Выберете Категорию");
    let currentBalanseAdd = Number(iddInput.value);

    AllBalanse = AllBalanse + currentBalanseAdd;
    if (add == 'Зп'.toLowerCase()) {
        balansZp = balansZp + currentBalanseAdd;
        ZpBalans.innerHTML = balansZp;
        balanse.innerHTML = AllBalanse;
        iddInput.value = '';
    } else{
        currentBalanseAdd = 0;
    }
}

delBtn.addEventListener('click', delBalanse)

function delBalanse() {
    let del = prompt("Выберете Категорию");
    let currentBalanseDel = Number(delInput.value);

    if (del == 'Еда'.toLowerCase()) {
        balansFoods = balansFoods + currentBalanseDel;
        AllBalanse = AllBalanse - currentBalanseDel;
        balanse.innerHTML = AllBalanse;
        delFood.innerHTML = balansFoods;
        delInput.value = '';
    } else if (del == 'Инет'.toLowerCase()) {
        internetBalans = internetBalans + currentBalanseDel;
        AllBalanse = AllBalanse - currentBalanseDel;
        balanse.innerHTML = AllBalanse;
        internet.innerHTML = internetBalans;
        delInput.value = '';
    }
}