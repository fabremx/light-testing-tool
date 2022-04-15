const RED_COLOR = '\x1b[31m%s\x1b[0m';
const GREEN_COLOR = '\x1b[32m%s\x1b[0m';
const YELLOW_COLOR = '\x1b[33m%s\x1b[0m';

function compareObjects(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (
        typeof obj1 !== 'object' ||
        typeof obj2 !== 'object' ||
        obj1 == null ||
        obj2 == null
    ) {
        return false;
    }

    const keysA = Object.keys(obj1);
    const keysB = Object.keys(obj2);

    if (keysA.length !== keysB.length) {
        return false;
    }

    let result = true;

    keysA.forEach((key) => {
        if (!keysB.includes(key)) {
            result = false;
        }

        if (
            typeof obj1[key] === 'function' ||
            typeof obj2[key] === 'function'
        ) {
            if (obj1[key].toString() !== obj2[key].toString()) {
                result = false;
            }
        }

        if (!compareObjects(obj1[key], obj2[key])) {
            result = false;
        }
    });

    return result;
}

const expect = (result) => {
    return {
        toEqual: (expected) => {
            return {
                bool: compareObjects(result, expected),
                result,
                expected
            }
        }
    }
}

const it = (message, callback) => {
    const output = callback();

    if (!output.bool) {
        console.log(RED_COLOR, `${message} - FAIL`)
        console.log(YELLOW_COLOR, 'Expected', output.expected)
        console.log(YELLOW_COLOR, 'But got', output.result, '\n')
    } else {
        console.log(GREEN_COLOR, `${message} - SUCCESS\n`)
    }
}

module.exports = {
    expect,
    it
}
