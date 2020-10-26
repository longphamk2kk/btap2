let arr = prompt("nhap vao mot mang").split(",");
arr = arr.map(Number);
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length && j !== i; j++) {
        if (arr[i] == arr[j]) {
            arr.splice(i, 1) && arr.splice(j, 1);
        }
    }
};
console.log(arr)