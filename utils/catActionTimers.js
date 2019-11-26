import _ from "underscore";

const ROTATION_DURATION = 66;
const LANDING_DURATION = 200;
const HURTING_DURATION = 300;

let ROTATING_TIMER = null;
let LANDING_TIMER = null;
let HURTING_TIMER = null;

export const isRotating = () => !!ROTATING_TIMER;
export const isLanding = () => !!LANDING_TIMER;
export const isHurting = () => !!HURTING_TIMER;

export const resetRotating = () => (ROTATING_TIMER = null);
export const resetLanding = () => (LANDING_TIMER = null);
export const resetHurting = () => (HURTING_TIMER = null);

export const canStartRotating = () =>
  !isHurting() && !ROTATING_TIMER && !LANDING_TIMER;

export const startRotating = cb => {
  cb();
  return {
    then: tn => {
      clearTimeout(ROTATING_TIMER);
      ROTATING_TIMER = setTimeout(() => {
        tn();
        resetRotating();
      }, ROTATION_DURATION);
    }
  };
};

export const startLanding = cb => {
  cb();
  return {
    then: tn => {
      clearTimeout(LANDING_TIMER);
      LANDING_TIMER = setTimeout(() => {
        tn();
        resetLanding();
      }, LANDING_DURATION);
    }
  };
};

export const startHurting = cb => {
  cb();
  return {
    then: tn => {
      clearTimeout(ROTATING_TIMER);
      clearTimeout(LANDING_TIMER);
      clearTimeout(HURTING_TIMER);
      HURTING_TIMER = setTimeout(() => {
        tn();
        resetHurting();
      }, HURTING_DURATION);
    }
  };
};
