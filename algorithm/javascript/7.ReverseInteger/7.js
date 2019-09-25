/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // 获取2 ** 31位整数的字符串
    var int32 = "2147483648";

    // 将获取到的数字转为字符串
    var stringX = String(x);
    var flag = false;
    if (~stringX.indexOf("-")) {
        stringX = stringX.slice(1, stringX.length);
        flag = true;
    }

    // 将字符串转为数组
    var arrayX = stringX.split("");

    arrayX = arrayX.reverse();


    stringX = arrayX.join("");


    if (stringX.length > int32.length) {
        return 0;
    } else if (stringX.length == int32.length) {
        if (stringX > int32) {
            return 0;
        } else {
            if (flag) {
                return - Number(stringX);
            } else {
                return Number(stringX);
            }
        }
    } else {
        if (flag) {
            return - Number(stringX);
        } else {
            return Number(stringX);
        }
    }
};