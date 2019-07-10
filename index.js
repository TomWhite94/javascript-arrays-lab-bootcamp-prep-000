var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  kittens.pop(name)
  console.log(kittens)
}
destructivelyAppendKitten("Ralph")


function desructivelyPrependKitten(name) {
  kittens.unshift(name)
  kittens.shift(name)
  console.log(kittens)
}
desructivelyPrependKitten("Bob")
