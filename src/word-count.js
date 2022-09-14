//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const removeSpaceAtStart = (phrase) => {
  return phrase.replace(/^ /g, "")
}

const removeQuotes = (phrase) => {

  let phrase_noQuotes = phrase

  phrase_noQuotes = phrase_noQuotes.replaceAll(" '", " ")
  phrase_noQuotes = phrase_noQuotes.replaceAll("' ", " ")
  phrase_noQuotes = phrase_noQuotes.replaceAll(' "', " ")
  phrase_noQuotes = phrase_noQuotes.replaceAll('" ', " ")
  phrase_noQuotes = phrase_noQuotes.replaceAll(/"$/g, "")
  phrase_noQuotes = phrase_noQuotes.replaceAll(/^"/g, "")
  phrase_noQuotes = phrase_noQuotes.replaceAll(/'$/g, "")
  phrase_noQuotes = phrase_noQuotes.replaceAll(/^'/g, "")

  return phrase_noQuotes
}

const normalizeCase = (phrase) => {
  return phrase.toLowerCase()
}

const multipleToSingleSpace = (phrase) => {
  return phrase.replaceAll(/\s+/g, " ")
}

const removePunctuation = (phrase) => {
  return phrase.replaceAll(/[:!&@$%^\.]+/g, "")
}

const removeNewline = (phrase) => {
  return phrase.replaceAll(/[\n]+/g, "")
}

const commaToSpace = (phrase) => {
  return phrase.replaceAll(",", " ")
}

const stringToArray = (phrase) => {
  return phrase.split(" ")
}

const arrayToObject = (arr) => {
  let obj = {}
  
  arr.forEach(value => {
    if (value in obj) {
      obj[value] = obj[value] + 1
    } else {
      obj[value] = 1
    }
  })

  return obj
}

export const countWords = (phrase) => {

  let phrase_current = phrase

  phrase_current = commaToSpace(phrase_current)
  phrase_current = multipleToSingleSpace(phrase_current)
  phrase_current = removePunctuation(phrase_current)
  phrase_current = removeNewline(phrase_current)
  phrase_current = normalizeCase(phrase_current)
  phrase_current = removeQuotes(phrase_current)
  phrase_current = removeSpaceAtStart(phrase_current)

  let phrase_array = stringToArray(phrase_current)
  let phrase_object = arrayToObject(phrase_array)

  return phrase_object
};
