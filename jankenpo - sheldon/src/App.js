import { useEffect, useState } from "react";
import rock from "./img/rock.png";
import paper from "./img/paper.png";
import scissors from "./img/scissors.png";
import lizard from "./img/lizard.png";
import spok from "./img/spok.png";
import loading from "./img/loading.gif";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Home() {
  const [selected, setSelected] = useState("Pick");
  const [cpuSelected, setCpuSelected] = useState("Pick");
  const [randNum, setRandNum] = useState(0);
  const cpu = ["Rock", "Paper", "Scissors", "Lizard", "Spok"];
  const [ready, setReady] = useState(false);
  const [showResult, setShowResult] = useState(0);
  const [load, setLoad] = useState(false);

  const MySwal = withReactContent(Swal);

  function MyButton(props) {
    return (
      <button
        type="button"
        onClick={() => clicked(props.selected)}
        className={`lg:p-6 sm:p-2 mx-2 basis-1/3 bg-white border border-gray-200 rounded-lg shadow focus:outline-none dark:bg-purple-500 dark:border-purple-600 ${props.ready == false ? "" : "hover:bg-purple-500 dark:hover:bg-purple-600"
          } `}
        disabled={props.ready == false ? true : false}
      >
        <h5 className="mb-2 lg:text-2xl sm:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <img
          src={props.img}
          className="lg:w-20 sm:w-10 mx-auto transform -scale-x-100"
          alt="imgBtn"
        />
      </button>
    );
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function clicked(name) {
    setLoad(true);

    setTimeout(function () {
      setLoad(false);
      setSelected(name);
      let rand = getRandomInt(3);
      if (rand != randNum) {
        setRandNum(rand);
        setCpuSelected(cpu[rand]);
      } else {
        setRandNum(getRandomInt(3));
        setCpuSelected(cpu[getRandomInt(3)]);
      }
    }, 3500);

    setTimeout(function () {
      setShowResult(showResult + 1);
    }, 3600);

  }

  function renderImg(selected, flip) {
    if (selected == "Rock")
      return (
        <img
          src={rock}
          className={`w-40 mx-auto ${flip ? "transform -scale-x-100" : ""}`}
          alt="rock"
        />
      );
    if (selected == "Paper")
      return (
        <img
          src={paper}
          className={`w-40 mx-auto ${flip ? "transform -scale-x-100" : ""}`}
          alt="paper"
        />
      );
    if (selected == "Scissors")
      return (
        <img
          src={scissors}
          className={`w-40 mx-auto ${flip ? "transform -scale-x-100" : ""}`}
          alt="scissors"
        />
      );
      if (selected == "Lizard")
      return (
        <img
          src={lizard}
          className={`w-40 mx-auto ${flip ? "transform -scale-x-100" : ""}`}
          alt="lizard"
        />
      );
      if (selected == "Spok")
      return (
        <img
          src={spok}
          className={`w-40 mx-auto ${flip ? "transform -scale-x-100" : ""}`}
          alt="spok"
        />
      );
    else
      return (
        <img
          src={loading}
          className="w-40 mx-auto"
          priority
          alt="loader"
        />
      );
  }

  function ifReady(ready) {
    if (ready == false) {
      return (
        <div
          type="button"
          className="mx-auto bg-purple-500 py-2 pb-4 cursor-pointer hover:bg-purple-600"
          onClick={() => {
            setReady(true);
          }}
        >
          <h1 className="text-center lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            READY
          </h1>
        </div>
      );
    } else {
    }
  }

  function alert(title){
    MySwal.fire({
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }

  useEffect(() => {
    if (showResult > 0) {
      if (selected != cpuSelected) {
        if (selected == "Rock") {
          if (cpuSelected == "Scissors") {
            alert('You Won!!')
          }
          if (cpuSelected == "Lizard") {
            alert('You Won!!')
          }
          if (cpuSelected == "Paper") {
            alert('You Lost!!')
          }
          if (cpuSelected == "Spok") {
            alert('You Lost!!')
          }
        }
        if (selected == "Paper") {
          if (cpuSelected == "Scissors") {
            alert('You Lost!!')
          }
          if (cpuSelected == "Lizard") {
            alert('You Lost!!')
          }
          if (cpuSelected == "Spok") {
            alert('You Won!!')
          }
          if (cpuSelected == "Rock") {
            alert('You Won!!')
          }
        }
        if (selected == "Scissors") {
          if (cpuSelected == "Paper") {
            alert('You Won!!')
          }
          if (cpuSelected == "Lizard") {
            alert('You Won!!')
          }
          if (cpuSelected == "Rock") {
            alert('You Lost!!')
          }
          if (cpuSelected == "Spok") {
            alert('You Lost!!')
          }
        }
        if (selected == "Lizard") {
          if (cpuSelected == "Paper") {
            alert('You Won!!')
          }
          if (cpuSelected == "Scissors") {
            alert('You Lost!!')
          }
          if (cpuSelected == "Rock") {
            alert('You Lost!!')
          }
          if (cpuSelected == "Spok") {
            alert('You Won!!')
          }
        }
        if (selected == "Spok") {
          if (cpuSelected == "Rock") {
            alert('You Won!!')
          }
          if (cpuSelected == "Scissors") {
            alert('You Won!!')
          }
          if (cpuSelected == "Paper") {
            alert('You Lost!!')
          }
          if (cpuSelected == "Lizard") {
            alert('You Lost!!')
          }
        }
      } else {
        alert('Draw!!')
      }
    }
  }, [showResult])


  function Arena(props) {
    if (load) {
      return (
        <div className="text-center flex justify-center basis-1/2 mx-auto animate-bounce">
          <div>
            <h1 className="text-center border border-green-400 text-green-400">
              Player
            </h1>
            {renderImg("Paper", true)}
          </div>
          <h1 className="text-2xl font-bold flex items-center">VS</h1>
          <div>
            <h1 className="text-center border border-red-600 text-red-600">
              Sheldon
            </h1>
            {renderImg("Paper", false)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-center flex justify-center basis-2/2 mx-auto">
          <div className="mx-auto">
            <h1 className="text-center border border-green-400 text-green-400">
              Player
            </h1>
            {renderImg(props.selected, true)}
          </div>
          <h1 className="text-2xl font-bold flex items-center">VS</h1>
          <div className="mx-auto">
            <h1 className="text-center border border-red-600 text-red-600">
              Sheldon
            </h1>
            {renderImg(props.cpuSelected, false)}
          </div>
        </div>
      );
    }
  }

  return (
    <>
      {console.log(showResult)}
      <main
        className="bg-white text-black "
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="mx-auto bg-purple-600 py-2 pb-4">
          <h1 className="text-center lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            {ready == true ? "Jankenpo-Sheldon" : "READY?"}
          </h1>
        </div>
        <div className="flex row my-10">
          <Arena selected={selected} cpuSelected={cpuSelected} load={load} />
        </div>

        <div className="flex flex-row my-5">
          <MyButton selected={"Rock"} img={rock} name="ROCK" ready={ready} />

          <MyButton selected={"Paper"} img={paper} name="PAPER" ready={ready} />

          <MyButton selected={"Scissors"} img={scissors} name="SCISSORS" ready={ready}/>
        
        </div>

        <div className="flex flex-row my-5">

          <MyButton selected={"Lizard"} img={lizard} name="LIZARD" ready={ready} />

          <MyButton selected={"Spok"} img={spok} name="SPOK" ready={ready} />
        
        </div>

        {ifReady(ready)}
      </main>
    </>
  );
}
