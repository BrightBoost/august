let imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oXbqADlBdhbgwDNjZlf35tmhNz4HJ-7yqxoBgyuQ1YqBVsO_bv5fyKhPMpJLW1tq8uM&usqp=CAU";
let imageAlt = "coffee";
let person = {
    name: "Maaike",
    customStyle: {
        backgroundColor: "lightyellow",
        color: "#444444"
    }
};

function TodoList() {
    const [todos, setTodos] = React.useState(["coffee", "more coffee"]);
    const [newTodo, setNewTodo] = React.useState("");

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div style={person.customStyle}>
            <h1>{person.name}'s to do's</h1>
            <img src={imageUrl} alt={imageAlt} />
            <form onSubmit={addTodo}>
                <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} required />
                <button type="submit">Add todo</button>
            </form>
            <ul>
                {
                    todos.map((item, index) => 
                        <li key={index}>
                            {item}
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

const divApp = document.querySelector("#app");
const root = ReactDOM.createRoot(divApp);
root.render(<TodoList />);
