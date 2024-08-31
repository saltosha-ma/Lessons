import './App.css';
import React from "react";

function Title () {
  return (
      <h1>Title Component</h1>
  )
}

function Header () {
  return (
      <header>
        <Title />
        <h2>I am the Header Component</h2>
      </header>
  )
}

function Content () {
  return (
      <main>
        <Title />
        <p>I am the Content Component</p>
      </main>
  )
}

function Footer () {
  return (
      <footer>
        <Title />
        <h2>I am the Footer Component</h2>
      </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
