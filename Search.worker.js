import Fuse from "fuse.js"

let searchWeights = [
  {
    name: "nom",
    weight: 0.6
  },
  {
    name: "catégorie",
    weight: 0.2
  },
  {
    name: "sous catégorie",
    weight: 0.2
  }
]
console.log("SALUT JE SUIS LE WEBWORKER")
let fuse = null

onmessage = function(event) {
  if (event.data.entries)
    fuse = new Fuse(event.data.entries, {
      keys: searchWeights
    })

  if (event.data.input) {
    let results = fuse.search(event.data.input)
    postMessage(results.slice(0, 10))
  }
}
