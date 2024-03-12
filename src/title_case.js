const titleCase = (str, minorWords) => {
    
    if (str === "") {
        return "";
    }

    const newStr = []
    
    const lowerCaseStr = str.toLowerCase().split(" ")
    const minorWordsArr = minorWords ? minorWords.toLowerCase().split(" ") : "";
        
    for (let i = 0; i < lowerCaseStr.length; i++) {
        const word = lowerCaseStr[i]
        if (i === 0 || minorWordsArr.indexOf(word) === -1) {
          newStr.push(word.charAt(0).toUpperCase() + word.slice(1))
        } else {
          newStr.push(word)
        }
     
    }
  return newStr.join (" ")
}

export default titleCase;