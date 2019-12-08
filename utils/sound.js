import { Audio } from "expo-av";

const backgroundSound = new Audio.Sound();
const levelSound = new Audio.Sound();
const tunaSound = new Audio.Sound();
const obstacleSound = new Audio.Sound();
const meowSound = new Audio.Sound();
const gameOver = new Audio.Sound();
const gameWin = new Audio.Sound();

const toggleSounds = async isMuted => {
  backgroundSound.setIsMutedAsync(isMuted);
  levelSound.setIsMutedAsync(isMuted);
  tunaSound.setIsMutedAsync(isMuted);
  obstacleSound.setIsMutedAsync(isMuted);
  gameOver.setIsMutedAsync(isMuted);
  gameWin.setIsMutedAsync(isMuted);
};

const loadSounds = async () => {
  await loadSound(
    backgroundSound,
    require("../assets/sounds/background.mp3"),
    true
  );
  await loadSound(levelSound, require("../assets/sounds/purr.wav"), true);
  await loadSound(tunaSound, require("../assets/sounds/tuna1.wav"), false);
  await loadSound(meowSound, require("../assets/sounds/meow.mp3"), false);
  await loadSound(gameOver, require("../assets/sounds/game-over-2.wav"), false);
  await loadSound(gameWin, require("../assets/sounds/game-win.wav"), false);
  await loadSound(
    obstacleSound,
    require("../assets/sounds/hit-obstacle.wav"),
    false
  );

  return { backgroundSound, levelSound };
};

const loadSound = async (player, file, shouldLoop) => {
  try {
    await player.loadAsync(file);
    await player.setIsLoopingAsync(shouldLoop);
  } catch (error) {
    console.log(error);
  }
};

export {
  loadSounds,
  backgroundSound,
  levelSound,
  tunaSound,
  obstacleSound,
  meowSound,
  toggleSounds,
  gameOver,
  gameWin
};
