export const countCorrectSymbols = (text,userInput) => {
  const clearText = text.replaceAll(' ','');
  const clearUserInput = userInput.replaceAll(' ','')
  return clearUserInput.split('').filter((letter,index) => letter === clearText[index]).length
}