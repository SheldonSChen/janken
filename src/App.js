import './App.css';
import GithubCorner from 'react-github-corner';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <GithubCorner
        href={"https://github.com/SheldonSChen/janken"}
        bannerColor="#C44A41"
        octoColor="#fff"
        size={80}
        direction="left"
      />
      <Game />
    </div>
  );
}

export default App;
