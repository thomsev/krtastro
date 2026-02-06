import { useCallback, useMemo, useRef } from "react";
import type { LottieRefCurrentProps } from "lottie-react";
import type { HoverHandlers, useLottieHoverAnimationOptions } from "./types";

export const useLottieHoverAnimation = (
  options: useLottieHoverAnimationOptions = {},
) => {
  const {
    enterSpeed = 2,
    leaveSpeed = 3,
    enterDirection = 1,
    leaveDirection = -1,
    restartOnEnter = true,
  } = options;

  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const playEnter = useCallback(() => {
    const lottie = lottieRef.current;
    if (!lottie) return;

    if (restartOnEnter) {
      lottie.stop();
    }

    lottie.setSpeed(enterSpeed);
    lottie.setDirection(enterDirection);
    lottie.play();
  }, [enterDirection, enterSpeed, restartOnEnter]);

  const playLeave = useCallback(() => {
    const lottie = lottieRef.current;
    if (!lottie) return;

    lottie.setSpeed(leaveSpeed);
    lottie.setDirection(leaveDirection);
    lottie.play();
  }, [leaveDirection, leaveSpeed]);

  const hoverHandlers = useMemo<HoverHandlers>(
    () => ({
      onMouseEnter: playEnter,
      onMouseLeave: playLeave,
    }),
    [playEnter, playLeave],
  );

  return {
    lottieRef,
    hoverHandlers,
    playEnter,
    playLeave,
  };
};
