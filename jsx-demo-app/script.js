const divApp = document.getElementById("app");
const root = ReactDOM.createRoot(divApp);

function NewComponent() {
    let example = "Bob";
    return (
        <div>
            <h1>Hello { example }!</h1>
        </div>
    )
}
root.render(<NewComponent />);