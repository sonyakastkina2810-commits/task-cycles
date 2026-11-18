export function rangeSum(a, b) {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

export function iterationCount(num) {
    let count = 0;

    while (num / 2 > 0.1) {
        num = num / 2;
        count++;
    }

    return count;
}

export function symbolsReplace(text) {
    const chars = text.split('');
    let i = 2;

    if (chars.length === 0) {
        return text;
    }

    do {
        if (i < chars.length) {
            chars[i] = '_';
        }
        i += 3;
    } while (i < chars.length);

    return chars.join('');
}