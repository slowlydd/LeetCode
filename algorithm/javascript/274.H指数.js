/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  if(!citations.length) {return 0;}
  citations.sort((a, b) => {
    return a - b;
  });
  let h = 1, res = 0;
  for(let i = citations.length - 1; i >= 0; i--) {
    if(citations[i] >= h) {
      res = h;
      h++;
    } else {
      break;
    }
  }
  return res;
};