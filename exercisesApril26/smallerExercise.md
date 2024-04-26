### React exercise - continuation of some-example-2

#### Step 1: Convert Todos to Stateful Component
Refactor the `NewComponent` to use the `useState` hook for managing the `todos` array. This will allow you to dynamically add, remove, or modify todos.

**Task**: Convert the `todos` array into a state variable using `useState`.

#### Step 2: Adding New Todos
Add functionality to allow the user to add new todos through an input field and a button. This will teach handling of form inputs and state updates based on user interaction.

**Task**: Implement an input field and button in `NewComponent` to add new todos to the state.

#### Step 3: Toggle Todo Completion
Implement functionality to toggle the completion status of todos. This introduces event handling and updating specific items in an array stored in state.

**Task**: Add an `onClick` event to each todo item that toggles its `done` status in the state.

#### Step 4: Use Effect for Debugging
Use the `useEffect` hook to log a message every time the list of todos changes. This demonstrates the basic usage of `useEffect` for reacting to state changes.

**Task**: Implement `useEffect` to log "Todos updated" every time the `todos` state changes.

#### Step 5: Adding Styling
Apply conditional styling to the todos to strike through the text of completed items. This will demonstrate dynamic CSS with React.

**Task**: Add conditional styling to todos based on their `done` status.

### Enhanced NewComponent Skeleton
Here's how you might begin modifying `NewComponent` for step 1:

```javascript
function NewComponent() {
  const [person, setPerson] = useState({ name: "Bob", age: 25 });
  const [todos, setTodos] = useState([
    { description: "Learn react", done: false },
    { description: "Celebrate Kingsday", done: false }
  ]);

  const todosList = todos.map((todo, index) => (
    <li key={index}>{todo.description}</li>
  ));

  return (
    <div>
      <h1>Hello, {person.name}!</h1>
      <ul>{todosList}</ul>
      <CounterComponent />
    </div>
  );
}
```