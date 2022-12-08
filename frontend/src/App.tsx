const url = "https://9af0-2600-6c50-7c7f-a5f-d8e1-3ea9-b6da-7799.ngrok.io/api";

fetch(url, {
  method: "get",
  headers: new Headers({
    // "mode": "no-cors",
    "Access-Control-Allow-Origin": "localhost:3000",
    "Access-Control-Request-Headers": "OPTIONS, GET, POST"
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

function App() {
  return <div>Test</div>
}

export default App
