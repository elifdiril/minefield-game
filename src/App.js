import Container from "./components/Container/index.js";
import { GameProvider } from "./contexts/GameContext.js";

function App() {
  return (
    <GameProvider>
      <Container />
    </GameProvider>
  );
}

export default App;
