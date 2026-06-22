import { useEffect, useRef } from 'react';
import lottie, { type AnimationItem } from 'lottie-web/build/player/lottie_light';
import type { HoverLottieProps } from './types';

export function HoverLottie({
  animation,
  autoplay = false,
  loop = false,
  enterSpeed = 2,
  leaveSpeed = 3,
  enterDirection = 1,
  leaveDirection = -1,
  restartOnEnter = true,
  containerProps
}: HoverLottieProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const instance = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay,
      animationData: animation
    });

    animationRef.current = instance;
    return () => {
      instance.destroy();
      animationRef.current = null;
    };
  }, [animation, autoplay, loop]);

  const handleEnter = () => {
    const instance = animationRef.current;
    if (!instance) return;
    if (restartOnEnter) instance.stop();
    instance.setSpeed(enterSpeed);
    instance.setDirection(enterDirection);
    instance.play();
  };

  const handleLeave = () => {
    const instance = animationRef.current;
    if (!instance) return;
    instance.setSpeed(leaveSpeed);
    instance.setDirection(leaveDirection);
    instance.play();
  };

  return (
    <div
      {...containerProps}
      ref={containerRef}
      onMouseEnter={(event) => {
        containerProps?.onMouseEnter?.(event);
        handleEnter();
      }}
      onMouseLeave={(event) => {
        containerProps?.onMouseLeave?.(event);
        handleLeave();
      }}
      aria-hidden="true"
    />
  );
}
