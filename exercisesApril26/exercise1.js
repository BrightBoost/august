function SomeButton() {
  return <button>Hello</button>;
}
// create a component for a heading "My ultimate to do list"
// create a component function for a to do list (just a <ul> is fine, you can give it some <li> directly)


const divApp = document.getElementById("root");
const root = ReactDOM.createRoot(divApp);

// render the heading and the todolist
root.render();
