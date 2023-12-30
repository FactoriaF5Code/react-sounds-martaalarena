import "./App.css";
import audioE from "./assets/ACORDE-E.mp3";
import audioA from "./assets/ACORDE-A.mp3";
import audioD from "./assets/ACORDE-D.mp3";
import audioG from "./assets/ACORDE-G.mp3";
import audioB from "./assets/ACORDE-B.mp3";
import audioF from "./assets/ACORDE-F.mp3";

function App() {

  const audios = {
   E: new Audio(audioE),
   A: new Audio(audioA),
   D: new Audio(audioD),
   G: new Audio(audioG),
   B: new Audio(audioB),
   F: new Audio(audioF)
    }

    function play(acorde){
      audios[acorde].play();
    }

  return (
    <>
    <h1>Acordes guitarra acústica</h1>
      <div>
        <button className="E" onClick={() => play('E')}> E</button>
        <button className="A" onClick={() => play('A')}> A</button>
        <button className="D" onClick={() => play('D')}> D</button>
        <button className="G" onClick={() => play('G')}> G</button>
        <button className="B" onClick={() => play('B')}> B</button>
        <button className="F" onClick={() => play('F')}> F</button>
      </div>
    </>
  );
}

export default App;
