const newArr = [11, 2, 1, 9, 5, 7];

function sumOfDifferences(arr) {
    let sum = 0;
    const sortedArr = arr.sort((a, b) => b - a);

    if (arr.length == 0 || arr.length == 1) {
        return 0;
    } else {

        for (let i = 0; i < arr.length - 1; i++) {
            sum += (sortedArr[i] - sortedArr[i + 1]);
        }
        return sum;
    }
}