var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  console.log(kittens)
}
destructivelyAppendKitten("Ralph")


function desructivelyPrependKitten(name) {
  kittens.unshift(name)
  console.log(kittens)
}
desructivelyPrependKitten("Bob")
