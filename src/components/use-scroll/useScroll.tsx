import { InViewHookResponse, useInView } from 'react-intersection-observer';
import { AnimationControls, useAnimation } from 'framer-motion';

export const useScroll = (): [
  (node?: Element | null | undefined) => void,
  AnimationControls
] => {
  const [element, view] = useInView({ threshold: 0.3 });
  const controls = useAnimation();
  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }
  return [element, controls];
};
