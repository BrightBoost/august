const divApp = document.getElementById("app");
const root = ReactDOM.createRoot(divApp);

let todos = [
  { description: "Learn react", done: false },
  { description: "Celebrate Kingsday", done: false },
];

function CounterComponent() {
    const [count, setCount] = React.useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>Click me for the {count - 1} time</button>
    )
}

function NewComponent() {
  let example = "Bob";
  let dog = {
    name: "Bobby",
    age: 2,
  };

  let todosList = todos.map((todo) => <li>{todo.description}</li>);

  console.log(todosList);

  return (
    <div>
      <h1>Hello {example}!</h1>
      <p>
        This is my dog {dog.name}, he's {dog.age} years old.
      </p>
      <ul>{todosList}</ul>
      <CounterComponent />
    </div>
  );
}

root.render(<NewComponent />);
