export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

let test = 'hello'
console.log(test)

const Person = {}

Person.name = 'Paul'
console.log(Person.name)
