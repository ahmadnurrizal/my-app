import Header from "./components/Header";


function App() {
  const title = 'learning react'
  const status = true
  
  return (
    <div className="App" style={{ marginLeft:50 }}>
      <Header/>

      <h3>{title}</h3>
      <p>My name is Rzall,, <b>Happy Hacking</b></p>
      <p>am I learning now ? {status ? 'YESS':'NOO'}</p>
    
    </div>
  );
}

export default App;
