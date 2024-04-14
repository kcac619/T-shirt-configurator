import Canvas from "./CanvasModel";
import Customiser from "./pages/Customiser";
import Home from "./pages/Home";
function App() {
  // Keep-Alive Script for Frontend (Browser)

  function openUrl(retries = 10) {
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
            `Error fetching ${url} - Status code: ${response.status}`
          );
          if (retries > 0) {
            console.log(`Retrying in 1 minute. Retries left: ${retries - 1}`);
            setTimeout(() => openUrl(retries - 1), 60000); // Retry after 1 minute
          } else {
            console.log("No more retries left.");
          }
        }
      })
      .catch((error) => {
        console.error(`Error fetching ${url}: ${error.message}`);
        if (retries > 0) {
          console.log(`Retrying in 1 minute. Retries left: ${retries - 1}`);
          setTimeout(() => openUrl(retries - 1), 60000); // Retry after 1 minute
        } else {
          console.log("No more retries left.");
        }
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
