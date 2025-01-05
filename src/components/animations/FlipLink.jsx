import { color, motion } from 'framer-motion';
import { useDesktop } from '../../utils/Hooks';

const duration = 0.25;
const stagger = 0.025;

const FlipLink = ({ children, href, isActive, onClick }) => {
  const desktopAnimation = useDesktop();

  const variants = {
    active: desktopAnimation ? { scale: 5, margin: '1rem 6.25rem 0 6.8rem', color: 'black'} : {color: 'black'},
    initial: { color: 'rgb(170, 170, 170, 0.7)' }
  };

  const transition = {
    duration: 0.8,
    ease: 'easeInOut',
  };

  return (
    <motion.a
      initial='initial'
      whileHover='hovered'
      animate={isActive ? 'active' : 'initial'}
      href={href}
      onClick={onClick}
      className={`relative inline-block overflow-hidden whitespace-nowrap z-10`}
      style={{ lineHeight: 1 }}
      variants={variants}
      transition={transition}>
      <div>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' }
            }}
            transition={{
              duration: duration,
              ease: 'easeInOut',
              delay: stagger * i,
            }}
            className='inline-block'
            key={i}>
            {l}
          </motion.span>
        ))}
      </div>
      <div className='absolute inset-0'>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{
              duration: duration,
              ease: 'easeInOut',
              delay: stagger * i,
            }}
            className='inline-block'
            key={i}>
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;
