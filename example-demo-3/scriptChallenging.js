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
    const [todos, setTodos] = React.useState([
        {text: "coffee", completed: false, category: "Personal"},
        {text: "presentation", completed: false, category: "Work"}
    ]);
    const [newTodo, setNewTodo] = React.useState("");
    const [selectedCategory, setSelectedCategory] = React.useState("All");
    const [newTodoCategory, setNewTodoCategory] = React.useState("Personal"); // for the category of the new todo

    const addTodo = (event) => {
        event.preventDefault();
        const newTodoItem = {
            text: newTodo,
            completed: false,
            category: newTodoCategory
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo("");
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const toggleCompletion = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    return (
        <div style={person.customStyle}>
            <h1>{person.name}'s to do's</h1>
            <img src={imageUrl} alt={imageAlt} />
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Grocery">Grocery</option>
            </select>
            <form onSubmit={addTodo}>
                <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} required />
                <select value={newTodoCategory} onChange={e => setNewTodoCategory(e.target.value)}>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Grocery">Grocery</option>
                </select>
                <button type="submit">Add todo</button>
            </form>
            <ul>
                {
                    todos
                    .filter(todo => selectedCategory === "All" || todo.category === selectedCategory)
                    .map((item, index) => 
                        <li key={index} style={item.completed ? {textDecoration: "line-through"} : {}}>
                            <input type="checkbox" checked={item.completed} onChange={() => toggleCompletion(index)} />
                            {item.text} ({item.category})
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