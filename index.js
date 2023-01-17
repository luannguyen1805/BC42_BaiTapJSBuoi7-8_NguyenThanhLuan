// Khai báo Nhập số n
let resultList = [];
let resultN = document.getElementById("result");
document.getElementById("btnThemSo").onclick = function () {
    let numN = +document.getElementById("numN").value;
    resultList.push(numN);
    resultN.innerHTML = resultList;
}

// Bài 1: Tổng số dương
document.getElementById("btn1").onclick = function () {
    let sum = 0;
    resultList.forEach((value) => {
        if (value >= 0) {
            sum += value;
        }
    })
    document.getElementById("result1").innerHTML = "Tổng số dương: " + sum;
}

// Bài 2: Đếm số dương
document.querySelector("#btn2").addEventListener("click", () => {
    let count = 0;
    resultList.forEach((value) => {
        if (value > 0) {
            count++;
        }
    })
    document.querySelector("#result2").innerHTML = "Số dương: " + count;
})

// Bài 3: Tìm số nhỏ nhất
function btn3() {
    let min = resultList[0];
    resultList.forEach((value) => {
        if (value < min) {
            min = value;
        }
        document.querySelector("#result3").innerHTML = "Số nhỏ nhất: " + min;
    })

}

// Bài 4: Tìm số dương nhỏ nhất
let result4 = document.querySelector("#result4");
document.querySelector("#btn4").addEventListener("click", () => {
    let minList = [];
    for (let i = 0; i < resultList.length; i++) {
        if (resultList[i] <= 0) {
            result4.innerHTML = "Không có số dương trong mảng";
        } else {
            minList.push(resultList[i]);
        }
    }
    let min = minList[0]
    minList.forEach((value) => {
        if (value < min) {
            min = value;
        }
        result4.innerHTML = "Số dương nhỏ nhất: " + min;
    })
})

//Bài 5: Tìm số chẵn cuối cùng
let result5 = document.querySelector("#result5");
document.querySelector("#btn5").addEventListener("click", () => {
    for (let i = resultList.length - 1; i >= 0; i--) {
        if (resultList[i] % 2 === 0) {
            result5.innerHTML = "Số chẵn cuối cùng: " + resultList[i];
            break;
        } else {
            result5.innerHTML = "Số chẵn cuối cùng: 0"
        }
    }
})

// Bài 6: Đổi chỗ
document.querySelector("#btn6").addEventListener("click", () => {
    let viTri1 = +document.querySelector("#viTri1").value;
    let vitri2 = +document.querySelector("#viTri2").value;
    let temp = resultList[viTri1];
    resultList[viTri1] = resultList[vitri2];
    resultList[vitri2] = temp;
    document.querySelector("#result6").innerHTML = "Mảng sau khi đổi: " + resultList;
})

// Bài 7: Sắp xếp tăng dần
function compare(a, b) {
    return a - b;
}
document.querySelector("#btn7").addEventListener("click", () => {
    resultList.sort(compare);
    document.querySelector("#result7").innerHTML = "Mảng sau khi sắp xếp: " + resultList;
})

// Bài 8: Tìm số nguyên tố đầu tiên
let result8 = document.querySelector("#result8");
function testPrime(n) {
    if (n < 2) {
        return false;
    }
    if (n === 2) {
        return true
    }
    if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
document.querySelector("#btn8").addEventListener("click", () => {
    for (let i = 0; i < resultList.length; i++) {
        if (testPrime(resultList[i])) {
            result8.innerHTML = "số nguyên tố đầu tiên: " + resultList[i];
            break;
        } else {
            result8.innerHTML = -1;
        }
    }
})

// Bài 9: Đếm số nguyên
let arrbai9 = [];
let numsBai9 = document.querySelector("#spanBai9");
let result9 = document.querySelector("#result9");
document.querySelector("#btnNhapSo").addEventListener("click", () => {
    let nhapSo = +document.querySelector("#txtNhapSo").value;
    arrbai9.push(nhapSo);
    numsBai9.innerHTML = arrbai9;
})
document.querySelector("#btn9").addEventListener("click", () => {
    let count = 0;
    arrbai9.forEach((value) => {
        if (Number.isInteger(value)) {
            count++;
        }
    })
    result9.innerHTML = "Số nguyên: " + count;
})

// Bài 10: So sánh số lượng số âm và dương
let result10 = document.querySelector("#result10");

function soSanh(a, b) {
    if (a === b) {
        result10.innerHTML = "Số âm = Số dương";
    } else if (a < b) {
        result10.innerHTML = "Số âm > Số dương"
    } else {
        result10.innerHTML = "Số dương > Số âm"
    }
}

document.querySelector("#btn10").addEventListener("click", () => {
    let countSoDuong = 0;
    let countSoAm = 0;
    resultList.forEach((value) => {
        if (value === 0) {
            countSoDuong += 0;
            countSoAm += 0;
        } else if (value > 0) {
            countSoDuong++;
        } else {
            countSoAm++;
        }
    })
    soSanh(countSoDuong, countSoAm);
})

//-----------------------------------------------
let x = document.querySelectorAll(".card-header");
for (let i = 0; i < x.length; i++) {
    x[i].onclick = function () {
        let temp = this.nextElementSibling;
        if (temp.style.display === "none") {
            temp.style.display = "block"
        } else {
            temp.style.display = "none"
        }
    }
}


