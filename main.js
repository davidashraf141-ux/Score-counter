const decreaseBtn1 = document.getElementById("decreaseBtn1");
const increaseBtn1 = document.getElementById("increaseBtn1");
const resetBtn1 = document.getElementById("resetBtn1");
const countLabel1 = document.getElementById("countLabel1");
let count1 = 0;
const decreaseBtn2 = document.getElementById("decreaseBtn2");
const increaseBtn2 = document.getElementById("increaseBtn2");
const resetBtn2 = document.getElementById("resetBtn2");
const countLabel2 = document.getElementById("countLabel2");
let count2 = 0;
const decreaseBtn3 = document.getElementById("decreaseBtn3");
const increaseBtn3 = document.getElementById("increaseBtn3");
const resetBtn3 = document.getElementById("resetBtn3");
const countLabel3 = document.getElementById("countLabel3");
let count3 = 0;

let p1 = window.prompt("Enter the name of the first player")
let p2 = window.prompt("Enter the name of the second player")
let p3 = window.prompt("Enter the name of the third player")

document.getElementById("Name1").textContent = p1;
document.getElementById("Name2").textContent = p2;
document.getElementById("Name3").textContent = p3;
// first user counter
increaseBtn1.onclick = function () {
    if(count1 < 999){
        count1++;
        countLabel1.textContent = count1;
    }
}

decreaseBtn1.onclick = function () {
    if (count1 > 0) {
        count1--;
        countLabel1.textContent = count1;
    }
}

resetBtn1.onclick = function () {
    count1 = 0;
    countLabel1.textContent = count1;
}

// second user counter
increaseBtn2.onclick = function () {
    if (count2 < 999) {
        count2++;
        countLabel2.textContent = count2;
    }
}

decreaseBtn2.onclick = function () {
    if (count2 > 0) {
        count2--;
        countLabel2.textContent = count2;
    }
}

resetBtn2.onclick = function () {
    count2 = 0;
    countLabel2.textContent = count2;
}

// third user counter
increaseBtn3.onclick = function () {
    if (count3 < 999) {
        count3++;
        countLabel3.textContent = count3;
    }
}

decreaseBtn3.onclick = function () {
    if (count3 > 0) {
        count3--;
        countLabel3.textContent = count3;
    }
}

resetBtn3.onclick = function () {
    count3 = 0;
    countLabel3.textContent = count3;
}

