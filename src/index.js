module.exports = function check(str, bracketsConfig) {
    let pairs = new Map(bracketsConfig);
    let stack = [];
    for (let b of str.split('')) {
        if (pairs.get(stack[stack.length - 1]) === b) {
            stack.pop()
        } else if (pairs.has(b)) {
            stack.push(b)
        } else return false
    }
    return stack.length === 0
}
