export function getResults(){
  let results = JSON.parse(localStorage.getItem("TypeApp"));
  return results ? results : []
}

export function setResult(speed,accuracy){
  let wpm = Math.floor(speed);
  let results = getResults();
  results.push({date:getCurrentData(),speed:wpm,accuracy})
  localStorage.setItem("TypeApp",JSON.stringify(results))
}

export function getDefaultTheme(){
  let theme = JSON.parse(localStorage.getItem("TypeAppTheme"));
  return theme ? theme : localStorage.setItem('TypeAppTheme',JSON.stringify(false))
}

export function setDefaultTheme(value){
  localStorage.setItem('TypeAppTheme',JSON.stringify(value))
}

export function getCurrentData(){
  const today  = new Date();
  return `${today.getDate()}.${today.getMonth()+1}.${String(today.getFullYear()).slice(-2)}`
}