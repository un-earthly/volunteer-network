import auth from "./firebase.init";
function App() {

  return (
    <div className="App">
      {/* <div className="banner"><img src="https://i.ibb.co/k4gJ5V4/homebanner.png" alt="" /></div> */}
      <div>
        {console.log(auth)}
      </div>
    </div>
  );
}

export default App;
