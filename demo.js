const flatten = (input) => {
    const result = {};
    function flatMy(current, path = []) {
        if (typeof (current) === 'object' && current !== null) {
            for (const [key, value] of Object.entries(current)) {
                console.log(key, value)
                flatMy(value, path.concat(key))
            }
        } else {
            if (current !== null && current !== undefined) {
                result[path.join('.')] = current;
            }
        }
    }
    flatMy(input)
    return result;
}


var input = {
    a: 1,
    b: [1, 2, { c: true }, [3]],
    d: { e: 2, f: 3 },
    g: null,
}

const output = flatten(input);
console.log(output, 'ouput')