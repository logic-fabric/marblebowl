import { CountersBox } from "./components/CountersBox/CountersBox";
import { PlayerOptionsBox } from "./components/PlayerOptionsBox/PlayerOptionsBox";
import { StoryBox } from "./components/StoryBox/StoryBox";

export function App() {
  return (
    <>
      <CountersBox />
      <PlayerOptionsBox />
      <StoryBox />
    </>
  );
}
