const divApp = document.getElementById("app");
const root = ReactDOM.createRoot(divApp);
let todos = [
  { description: "Learn react", done: false },
  { description: "Celebrate Kingsday", done: false },
];
function NewComponent() {
  let example = "Bob";
  let dog = {
    name: "Bobby",
    age: 2,
  };

let todosList = todos.map(todo => <li>{todo.description}</li>);

  console.log(todosList)

  return (
    <div>
      <h1>Hello {example}!</h1>
      <p>
        This is my dog {dog.name}, he's {dog.age} years old.
      </p>
      <ul>{ todosList }</ul>
    </div>
  );
}
root.render(<NewComponent />);
