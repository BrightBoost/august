function SomeButton() {
  return <button>Hello</button>;
}

const divApp = document.getElementById("root");
const root = ReactDOM.createRoot(divApp);
root.render(
  <div>
    <h1>Some title</h1>
    <SomeButton />
  </div>
);
