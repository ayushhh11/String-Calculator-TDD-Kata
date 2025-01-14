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

};

