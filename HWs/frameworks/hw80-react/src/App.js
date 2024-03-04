import "./App.css";
import { Header, Footer, Main } from "./components";
import { getLinksData, getPostsData } from "./utils";

function App() {
  return (
    <div className="App">
      <Header
        logoSrc="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709424000&semt=ais"
        linksData={getLinksData()}
      />

      <Main postsData={getPostsData()} />

      <Footer>Copyright (c) 2024</Footer>
    </div>
  );
}

export default App;
