/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let numString = [];
  let codeString = [];

  // 分离数字日志和字母日志
  for (let i = 0; i < logs.length; i++) {
    let index = logs[i].indexOf(" ");
    if (isNaN(Number(logs[i][index + 1]))) {
      codeString[codeString.length] = logs[i];
    } else {
      numString[numString.length] = logs[i];
    }
  }

  // 将字母日志排序
  if (codeString.length > 1) {
    for (let j = 0; j < codeString.length; j++) {
      for (let i = 0; i < codeString.length - 1; i++) {
        let index = codeString[i].indexOf(" ");
        let index2 = codeString[i + 1].indexOf(" ");
        if (codeString[i].slice(index) > codeString[i + 1].slice(index2)) {
          let tempString = codeString[i + 1];
          codeString[i + 1] = codeString[i];
          codeString[i] = tempString;
        }
      }
    }
  }

  return codeString.concat(numString);
};

reorderLogFiles(["d 02", "2 5 3", "k r y", "6 srs", "x fp"]);