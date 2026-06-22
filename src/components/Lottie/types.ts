import type { HTMLAttributes } from 'react';

export type LottieDirection = 1 | -1;

export type HoverLottieProps = {
  animation: unknown;
  autoplay?: boolean;
  loop?: boolean;
  enterSpeed?: number;
  leaveSpeed?: number;
  enterDirection?: LottieDirection;
  leaveDirection?: LottieDirection;
  restartOnEnter?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
};
