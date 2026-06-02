function calculatePi(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let denominator = 2 * i + 1; 

        if (i % 2 === 0) {
            sum += 1 / denominator;
        } else {
            sum -= 1 / denominator;
        }
    }

    return 4 * sum;
}

console.log(calculatePi(1000));