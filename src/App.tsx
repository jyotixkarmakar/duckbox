import MainContainer from "./core/layout/MainContainer";

function App() {
  const appName="Duckbox";
  let userName="John Doe";
  return (
      <MainContainer parentAppName={appName} parentUserName={userName}></MainContainer>
  );
}

export default App;
