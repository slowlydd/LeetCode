/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let newSecret = [];
  let newGuess = [];
  let length = 0;
  let A = 0;
  // 找出对应的 A
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      A++;
    } else {
      newSecret[length] = secret[i];
      newGuess[length++] = guess[i];
    }
  }

  let hash = {};

  // 将字符串转换为 map
  for (let i = 0; i < newSecret.length; i++) {
    if (hash[newSecret[i]]) {
      hash[newSecret[i]]++;
    } else {
      hash[newSecret[i]] = 1;
    }
  }

  // 在 hash 中查找 B
  let B = 0;
  for (let i = 0; i < newGuess.length; i++) {
    if (hash[newGuess[i]]) {
      B++;
      hash[newGuess[i]]--;
    }
  }
  return A + "A" + B + "B";
};
