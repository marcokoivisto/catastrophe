import { Audio } from "expo-av";

const player = new Audio.Sound();

const playBackgroundSound = () => {
  return playSound(player, require("../assets/sounds/background.mp3"), true);
};

const playLevelSound = () => {
  return playSound(player, require("../assets/sounds/level.mp3"), true);
};

const playSound = async (player, file, shouldLoop) => {
  try {
    await player.loadAsync(file);
    await player.playAsync();
    await player.setIsLoopingAsync(shouldLoop);
  } catch (error) {
    console.log(error);
  }
};

export { playBackgroundSound, playLevelSound };
