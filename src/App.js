import { CountersBox } from "./components/CountersBox/CountersBox";
import { PlayerOptionsBox } from "./components/PlayerOptionsBox/PlayerOptionsBox";
import { StoryBox } from "./components/StoryBox/StoryBox";
import Header from "./components/Header/Header";

export function App() {
  return (
    <>
      <Header />
      <CountersBox />
      <PlayerOptionsBox />
      <StoryBox />
    </>
  );
}
