const add = (x, y) => { return x + y }
const multiply = (x, y) => { return x * y }
const toCelsius = (f) => { return (5/9) * (f - 32)}


const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity();
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  }
  else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = '';
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const s = document.querySelector('#guest').value.replace(regex, '')
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    
    if (i >= 0 && j >= 0){
      ans = `${s}, ${i} + ${j} = ${add(i, j)}.`
    }
    else {
      ans = `${s}, Please enter numbers in both fields to calculate`
    }
    document.querySelector('#result').innerHTML = ans
  }
}

const updateWithMultiply = async (event) => {
  document.querySelector('#result').innerHTML = '';
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const s = document.querySelector('#guest').value.replace(regex, '')
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    if (i >= 0 && j >= 0){
      ans = `${s}, ${i} * ${j} = ${multiply(i, j)}.`
    }
    else {
      ans = `${s}, Please enter numbers in both fields to calculate`
    }
    document.querySelector('#result').innerHTML = ans
  }
}

const updateWithCelsius = async (event) => {
  // document.querySelector('#result').innerHTML = '';
  const regex = /[^a-zA-Z_]/g
  const s = document.querySelector('#guest').value.replace(regex, '')
  const i = parseInt(document.querySelector('#thirddNumber').value)
  if (i >= 0 || i <= 0){
    ans = `${s}, ${i} fahrenheit is ${Math.round(toCelsius(i))} celsius.`
  }
  else {
    ans = `${s}, Please enter a number in fehrenhite field`
  }
  document.querySelector('#result').innerHTML = ans

}


// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if (event.target && event.target.id === 'firstNumber' ||
    event.target && event.target.id === 'secondNumber') {
    validate(event)
  }
});

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
});

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'multiplyButton') { updateWithMultiply(event) }
});

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'celsiusButton') { updateWithCelsius(event) }
});
