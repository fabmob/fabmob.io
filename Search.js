import React, { useEffect, useState, useRef } from "react"
import Worker from "worker-loader!./Search.worker.js"
import data from "dsv-loader?delimiter=,!./data.csv"
import Highlighter from "react-highlight-words"

let worker = new Worker()

export function debounce(timeout, fn) {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), timeout)
  }
}

let requestSearch = (input, setSearching) => {
    setSearching(true)
    worker.postMessage({ input })
  },
  debouncedSearch = debounce(300, requestSearch)

export default function() {
  const [input, setInput] = useState("")
  let [results, setResults] = useState([])
  let [searching, setSearching] = useState(true)

  useEffect(() => {
    worker.postMessage({ entries: data })
    worker.onmessage = ({ data: results }) => {
      setSearching(false)
      setResults(results)
    }
  }, [])

  let validInput = input.length > 2

  return (
    <div
      css={`
        input {
          border: 1px solid dark-blue;
          border-radius: 0.3rem;
          padding: 0.1rem 0.6rem;
          font-size: 150%;
          border-style: solid;
          margin-left: 1rem;
        }
      `}
    >
      <h1>Qu'est-ce qu'on mange ?</h1>
      <input
        value={input}
        placeholder="Ta recherche"
        onChange={e => {
          let input = e.target.value
          setInput(input)
          if (validInput) debouncedSearch(input, setSearching)
        }}
      />
      {validInput && searching && " ⏳"}
      {validInput && !searching && !results.length && "Rien trouvé :("}
      {validInput && results.map(r => <Item data={r} input={input} />)}
    </div>
  )
}

const Item = ({ input, data }) => (
  <li
    key={data[0]}
    css={`
      box-shadow: 0 1px 3px rgba(41, 117, 209, 0.12),
        0 1px 2px rgba(41, 117, 209, 0.24);
      width: 16rem;
      background: #fdfcff;
      padding: 0.6rem 1rem;
      margin: 1rem;
      list-style-type: none;

      border-radius: 0.6rem;
    `}
  >
    <h3>
      <Highlighter
        highlightStyle={{
          background: "#88c13e",
          color: "white",
          fontWeight: 400
        }}
        searchWords={input.split(" ")}
        textToHighlight={data.nom}
      />
    </h3>
    <div>
      <Highlighter
        highlightStyle={{ background: "#88c13e", color: "white" }}
        searchWords={input.split(" ")}
        textToHighlight={data.catégorie}
      />
    </div>
    <span>Indicateur : {data["i1"]}</span>
  </li>
)
