let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let currentIndex = 0;

function showNextNumber() {
    let output = document.getElementById('output');
    if (currentIndex < array.length) {
        output.innerText = "Next Number: " + array[currentIndex];
        currentIndex++;
    } else {
        output.innerText = "No more numbers";
    }
}