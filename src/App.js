import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import TopBar from "./components/TopBar";
import useToggleNavigation from "./hooks/useToggleNavigation";
const games = [
  { title: "zelda breath of the wild", plateform: "switch" },
  { title: "guardians of the galaxy", plateform: "ps4" },
];
const gamesTwo = [
  { title: "zelda breath of the wild", plateform: "switch" },
  { title: "guardians of the galaxy", plateform: "ps4" },
  { title: "guardians of the galaxy", plateform: "ps4" },
  { title: "guardians of the galaxy", plateform: "ps4" },
];

function App() {
  const { isToggle } = useToggleNavigation();
  const activeStyle = isToggle
    ? "left-[80px] w-[calc(100%-80px)]"
    : "left-[300px] w-[calc(100%-300px)]";

  const [videoGames, setVideoGames] = useState([]);

  let myGames = [];
  const setMyGames = (jeux) => {
    myGames = jeux;
    console.log({ myGames });
  };

  setTimeout(() => {
    setMyGames(games);
  }, 2000);

  useEffect(() => {
    setTimeout(() => {
      setVideoGames(games);
    }, 2000);
  }, [setVideoGames]);

  return (
    <div>
      <Navigation />
      {/* main */}
      <div className={`${activeStyle} absolute min-h-[100vh] bg-white transition-all duration-500`}>
        <TopBar />
        <h3>With hook</h3>
        <>
          {videoGames.map((videoGame, index) => (
            <div key={index}>
              {videoGame.title} {videoGame.plateform}
            </div>
          ))}
        </>
        <>
          <button onClick={() => setVideoGames(gamesTwo)}>Refresh</button>
        </>
        <h3>without hook</h3>
        <>
          {myGames.map((videoGame, index) => (
            <div key={index}>
              {videoGame.title} {videoGame.plateform}
            </div>
          ))}
        </>
        <>
          <button onClick={() => setMyGames(gamesTwo)}>Refresh</button>
        </>
        {/* topbar */}
        {/* cardboxs */}
        {/* details tables */}
      </div>
    </div>
  );
}

export default App;
