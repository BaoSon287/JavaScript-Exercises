// obj1 === obj2 trả về false vì toán tử "===" so sánh địa chỉ tham chiếu
// không so sánh nội dung. 
function deepEqual(objA, objB) {
    if (!isObject(objA) || !isObject(objB)) {
        return false;
    }
    if (Object.keys(objA).length !== Object.keys(objB).length) {
        return false;
    }
    for (const key of Object.keys(objA)) {
        if (isObject(objA[key]) && isObject(objB[key])) {
            if (!deepEqual(objA[key], objB[key])) {
                return false;
            }
        } else if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
function isObject(value) {
    return value !== null && !Array.isArray(value) && typeof value === "object";
}
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(obj1, obj2));
