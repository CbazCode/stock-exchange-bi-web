import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-title">
        <h1 className="title">BOLSA DE VALORES</h1>
      </div>
      <div className="container-url">
        <iframe
        className="url"
        src="https://app.powerbi.com/view?r=eyJrIjoiNTIyNjZlMDQtOWY1Mi00MGZjLTgwMzYtYTA5MmFkN2QyOTA4IiwidCI6ImUzOWEwZDFhLWJhOTUtNDMzMi04N2M5LTk5Mjc4YzNiZDE4NyJ9" 
        title="Bi-web"
        height="580" width="900"
        />
      </div>
    </div>
  );
}

export default App;
