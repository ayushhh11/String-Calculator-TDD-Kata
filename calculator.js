export const sum = (string) => {
    if (string === '') {
        return 0;
    }

    let d = /,|\n/;
    if (string.startsWith("//")) {
        const parts = string.split("\n");
        d = new RegExp(parts[0].slice(2));
        string = parts.slice(1).join("\n"); 
    }

    const numberArray = string.split(d);
        const numbers = [];
        const negatives = [];

        for (const num of numberArray) {
            if (num.trim() !== '') {
                const parsedNumber = parseInt(num, 10);
                if (isNaN(parsedNumber)) continue;
                if (parsedNumber < 0) {
                    negatives.push(parsedNumber);
                }
                numbers.push(parsedNumber);
            }
        }

        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }

        return numbers.reduce((sum, num) => sum + num, 0);
};

