import Canvas from "./CanvasModel";
import Customiser from "./pages/Customiser";
import Home from "./pages/Home";
function App() {
  // Keep-Alive Script for Frontend (Browser)

  function openUrl() {
    const url = "https://tshirtconfigurator.onrender.com/";

    // Use the Fetch API to make an HTTP request
    fetch(url)
      .then((response) => {
        if (response.ok) {
          console.log(
            `Visited ${url} - Status code: ${response.status} , backend instance is ON`
          );
        } else {
          console.error(
            `Error fetching ${url} - Status code: ${response.status} \n Retrying in 1 minute`
          );
        }
      })
      .catch((error) => {
        console.error(`Error fetching ${url}: ${error.message}`);
      });
  }
  openUrl();
  // Call the function every 2 minutes (120,000 milliseconds)
  // setInterval(openUrl, 2 * 60 * 1000);

  return (
    <>
      <main className="app transition-all ease-in">
        <Home />
        <Canvas />
        <Customiser />
      </main>
    </>
  );
}

export default App;
