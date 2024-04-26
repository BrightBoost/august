# To do app

## Step 1
Modify the to do app. Make sure it displays your name, a style you like. Change the image, and change the default todo's.

## Step 2 - Complete to do
We're going to add the functionality to complete to do's. This will require updating the `addToDo` a little bit as well.

**Suggested steps**

1. Update the structure of your `todos` state to hold objects instead of strings. Each object should have two properties: `text` (the todo text) and `completed` (a boolean indicating completion status).
   
   Example:
   ```javascript
   const [todos, setTodos] = React.useState([{text: "coffee", completed: false}, {text: "more coffee", completed: false}]);
   ```

2. For each `li` element, add a checkbox.
3. Implement a function called `toggleCompletion` that takes an index as a parameter. This function should toggle the `completed` status of the todo at the given index.
4. Attach an `onChange` event to each checkbox. When its state changes, it should call the `toggleCompletion` function with the index of the associated todo.
5. Style the todo text to appear with a strike-through if its `completed` property is true. This can be done using conditional rendering and inline CSS or by adding a class dynamically.


## Step 3 - Delete to do 

**Suggested steps**

1. In the `TodoList` component, for each `li` element representing a todo, add a button "Delete".
2. Implement a function called `deleteTodo` that takes an index as a parameter. This function should remove the todo at the specified index from the `todos` state.
3. Attach an `onClick` event to the "Delete" button for each todo. When clicked, it should call the `deleteTodo` function with the index of the todo it's clicked for.

**Hint**: You can use the JavaScript `filter` function to help with deleting the todo.
 

## Step 4: Challenging!

**Suggested steps**

We want to allow users to categorize their todos (e.g., Work, Personal, Family). The user should be able to filter the displayed todos based on the selected category.

**Steps**:

1. Add a dropdown/select element above the list of todos. This should have options like "All", "Work", "Personal", "Family", etc.
2. Extend the todo object structure in your state to include a `category` property.
3. When adding a new todo, let the user select a category for the todo from the dropdown.
4. Implement a new piece of state called `selectedCategory` which tracks the currently selected category from the dropdown.
5. Adjust the rendered list of todos to only show those that match the `selectedCategory` unless "All" is selected, in which case all todos should be displayed.
6. (Challenging 2.0) Allow users to define their own categories by adding a new category to the dropdown.

**Hint**: Use the JavaScript `filter` function to filter todos based on the selected category before mapping them to JSX.
