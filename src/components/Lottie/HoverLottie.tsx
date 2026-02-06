import Lottie from "lottie-react";
import { useLottieHoverAnimation } from "@/components/Lottie/useLottieHoverAnimation";
import type { HoverLottieProps } from "./types";

export function HoverLottie({
  animation,
  autoplay = false,
  loop = false,
  enterSpeed,
  leaveSpeed,
  enterDirection,
  leaveDirection,
  restartOnEnter,
  containerProps,
  ...lottieProps
}: HoverLottieProps) {
  const { lottieRef, hoverHandlers } = useLottieHoverAnimation({
    enterSpeed,
    leaveSpeed,
    enterDirection,
    leaveDirection,
    restartOnEnter,
  });

  return (
    <div {...containerProps} {...hoverHandlers} aria-hidden="true">
      <Lottie
        {...lottieProps}
        lottieRef={lottieRef}
        animationData={animation}
        autoplay={autoplay}
        loop={loop}
      />
    </div>
  );
}
