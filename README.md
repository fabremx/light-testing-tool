# Light testing tool 

## 🚩 Why ?

Use it when you cannot download packages or you want to test simple things.

## ⚙️ How it works ?

Assertions available:
- `toEqual`: Allow you to check deep equality between two literals type, complex arrays or complex objects.

**Example**

```js
const { it, expect } = require('./lightTestingTool');

it('should return a succeeded test', () => {
    const result = {
        key: "value1",
        arr: [1, 2],
        obj: {
            otherKey: "value2"
        }
    };
    const expected = {
        key: "value1",
        arr: [1, 2],
        obj: {
            otherKey: "value2"
        }
    };

    return expect(result).toEqual(expected);
});
```

**Output example**

![output](https://i.ibb.co/C0L72th/light-Testing-Tool.jpg)
