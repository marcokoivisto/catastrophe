const ROTATION_DURATION = 33;
const LANDING_DURATION = 200;
const HURTING_DURATION = 300;
const FINAL_LANDING_DURATION = 900;
const JUMPING_DURATION = 200;

let ROTATING_TIMER = null;
let LANDING_TIMER = null;
let HURTING_TIMER = null;
let FINAL_LANDING_TIMER = null;
let JUMPING_TIMER = null;

export const isRotating = () => !!ROTATING_TIMER;
export const isLanding = () => !!LANDING_TIMER;
export const isHurting = () => !!HURTING_TIMER;
export const isJumping = () => !!JUMPING_TIMER;
export const isFinalLanding = () => !!FINAL_LANDING_TIMER;

const resetRotating = () => (ROTATING_TIMER = null);
const resetLanding = () => (LANDING_TIMER = null);
const resetHurting = () => (HURTING_TIMER = null);
const resetFinalLanding = () => (FINAL_LANDING_TIMER = null);
const resetJumping = () => (JUMPING_TIMER = null);

export const canStartRotating = () =>
  !isHurting() && !isJumping() && !ROTATING_TIMER && !LANDING_TIMER;

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
      clearTimeout(JUMPING_TIMER);
      JUMPING_TIMER = setTimeout(() => {
        tn();
        resetJumping();
        resetRotating();
        resetLanding();
      }, JUMPING_DURATION);
    }
  };
};

export const startJumping = cb => {
  cb();
  return {
    then: tn => {
      clearTimeout(ROTATING_TIMER);
      clearTimeout(LANDING_TIMER);
      clearTimeout(HURTING_TIMER);
      HURTING_TIMER = setTimeout(() => {
        tn();
        resetHurting();
        resetRotating();
        resetLanding();
      }, HURTING_DURATION);
    }
  };
};

export const startFinalLanding = cb => {
  cb();
  return {
    then: tn => {
      clearTimeout(ROTATING_TIMER);
      clearTimeout(LANDING_TIMER);
      clearTimeout(FINAL_LANDING_TIMER);
      FINAL_LANDING_TIMER = setTimeout(() => {
        tn();
        resetFinalLanding();
        resetRotating();
        resetLanding();
      }, FINAL_LANDING_DURATION);
    }
  };
};
