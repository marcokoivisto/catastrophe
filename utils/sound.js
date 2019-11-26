import { Audio } from "expo-av";

const backgroundSound = new Audio.Sound();
const levelSound = new Audio.Sound();
const tunaSound = new Audio.Sound();
const obstacleSound = new Audio.Sound();

const loadSounds = async () => {
  await loadSound(
    backgroundSound,
    require("../assets/sounds/background.mp3"),
    true
  );
  await loadSound(levelSound, require("../assets/sounds/level.mp3"), true);
  await loadSound(tunaSound, require("../assets/sounds/meow.mp3"), false);
  await loadSound(
    obstacleSound,
    require("../assets/sounds/obstacle.mp3"),
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

export { loadSounds, backgroundSound, levelSound, tunaSound, obstacleSound };
