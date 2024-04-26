class ShoppingList extends React.Component {
  render() {
    return (
      <div>
        <h3>Shopping List:</h3>
        <ul>
          <li>Apples</li>
          <li>Bananas</li>
          <li>Carrots</li>
        </ul>
      </div>
    );
  }
}

//Select DOM element to render on
const domContainer = document.querySelector("#app");

// Render ShoppingList component at root
ReactDOM.render(<ShoppingList />, domContainer);
