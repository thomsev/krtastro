import Lottie from "lottie-react";
import type { ComponentPropsWithoutRef, HTMLAttributes } from "react";

export type LottieDirection = 1 | -1;

export type HoverLottieProps = Omit<
  ComponentPropsWithoutRef<typeof Lottie>,
  "lottieRef" | "animationData" | "autoplay" | "loop"
> & {
  animation: unknown;
  autoplay?: boolean;
  loop?: boolean;
  enterSpeed?: number;
  leaveSpeed?: number;
  enterDirection?: LottieDirection;
  leaveDirection?: LottieDirection;
  restartOnEnter?: boolean;
  containerProps?: Omit<
    HTMLAttributes<HTMLDivElement>,
    "onMouseEnter" | "onMouseLeave"
  >;
};

export type useLottieHoverAnimationOptions = {
  enterSpeed?: number;
  leaveSpeed?: number;
  enterDirection?: LottieDirection;
  leaveDirection?: LottieDirection;
  restartOnEnter?: boolean;
};

export type HoverHandlers = Pick<
  HTMLAttributes<HTMLElement>,
  "onMouseEnter" | "onMouseLeave"
>;
