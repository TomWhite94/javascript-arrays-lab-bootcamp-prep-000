var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  console.log(kittens)
}
destructivelyAppendKitten("Ralph")