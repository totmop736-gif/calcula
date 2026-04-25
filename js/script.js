const inputs = document.getElementById('input');
const button__plus = document.getElementById('plus');
const button__minus = document.getElementById('minus');
const result = document.querySelector('.result__sum')
const history__list = document.querySelector('.history__list')
const button__C = document.querySelector('.C')


function get_element() {
  let newelement = document.createElement('div')
  newelement.classList.add('history__item')
  return newelement
}

function check() {
  return (typeof(history__list.children[0]) === 'undefined')  
}

function new_element(f, operation, input) {

  if (f === true) {
    let newelement = get_element()
    newelement.innerHTML = `
      <p class="number__conteiner">0</p>
      <div class="operation ${operation}"></div>
      <p class="number__conteiner">${input}</p>
      <div class="operation equally"></div>
      <p class="history__result">${input}</p>`
    history__list.append(newelement)
    return(input)
  } else if (f === false) {
    let new_result
    let previous_result = history__list.children[0].children[4].textContent
    if (operation === "plus") {
      new_result = Number(previous_result) + Number(input)
    } else if (operation === "minus") {
      new_result = Number(previous_result) - Number(input)
    }
    let newelement = get_element()
    newelement.innerHTML = `
      <p class="number__conteiner">${previous_result}</p>
      <div class="operation ${operation}"></div>
      <p class="number__conteiner">${input}</p>
      <div class="operation equally"></div>
      <p class="history__result">${new_result}</p>`
    history__list.prepend(newelement)
    return(new_result)
  }
}

function mig() {
  return new Promise((resul) => {
    result.classList.add('blink')
    setTimeout(() => {
      resul(result.classList.remove('blink'))
    },700)
  })
}



button__plus.addEventListener('click', function() {
  let input = inputs.value
  if (!input) return
  result.textContent = new_element(check(), 'plus', input)
  mig()
  inputs.value = ""
})

button__minus.addEventListener('click', function() {
  let input = inputs.value
  console.log(input)
  if (!input) return
  result.textContent = new_element(check(), 'minus', input)
  inputs.value = ""
})

button__C.addEventListener('click', function() {
  history__list.textContent = ""
  result.textContent = ""
})