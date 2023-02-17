function replaceString(str, oldSubStr, newSubStr) {
  while (str.includes(oldSubStr)) {
    str = str.replace(oldSubStr, newSubStr);
  }
  return str;
}

let exemple = "ceci est une phrase";
console.log(replaceString(exemple, "est", "étais"));

module.exports = replaceString;