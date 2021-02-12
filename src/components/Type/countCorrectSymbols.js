export const countCorrectSymbols = (text,userInput) => {
  const clearText = text.replace(' ','');
  const clearUserInput = userInput.replace(' ','')
  return clearUserInput.split('').filter((letter,index) => letter === clearText[index]).length
}