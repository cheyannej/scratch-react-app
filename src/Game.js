import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import './Game.css';

const unityContent = new UnityContent(
  "../Build/Pairs_Web.json",
  "../Build/UnityLoader.js", {
    adjustOnWindowResize: true
  }
);

const Game = () => {
  return (
    <div id="unity">
    <Unity unityContent={unityContent} />
    </div>
  );
}

export default Game;
