### 排序

#### 冒泡排序
``` js
function bubbleSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
```

#### 选择排序
``` js
function selectSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}
```

#### 插入排序
``` js
function insertSort(arr) {
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while(j >=0 &&  arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = temp
    } 
    return arr;
}
```