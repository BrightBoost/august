const divApp = document.getElementById("app");
const root = ReactDOM.createRoot(divApp);
const NewComponent = React.createElement("p", {}, "Hello world");
root.render(NewComponent);