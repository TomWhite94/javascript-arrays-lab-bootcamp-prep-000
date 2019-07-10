var kittens = ["Milo", "Otis", "Garfield"]; //define your array here


function desructivelyPrependKitten(name) {
  kittens.unshift(name)
  console.log(kittens)
}
desructivelyPrependKitten("Bob")