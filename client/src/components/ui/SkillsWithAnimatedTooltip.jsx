import { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import { skillsObj } from "../../assets/data/skills";
import PropTypes from "prop-types";

const SkillsWithAnimatedTooltip = ({ items = [] }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <Slide direction={"up"} delay={100 + idx * 60} key={idx} triggerOnce>
          <Fade delay={200 + idx * 60} triggerOnce>
            <div
              className="-mr-4 relative group"
              key={item}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence mode="popLayout">
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 10,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,
                      rotate: rotate,
                      whiteSpace: "nowrap",
                    }}
                    className="absolute -top-16 right-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                  >
                    <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                    <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                    <div
                      className={`font-bold text-white relative z-30 text-base`}
                    >
                      {item}
                    </div>
                    {/* <div className="text-white text-xs">{"hsyasda"}</div> */}
                  </motion.div>
                )}
              </AnimatePresence>
              <div
                className="p-4 rounded-full aspect-square flex justify-center items-center dark:bg-slate-600/30 bg-white drop-shadow-xl group-hover:scale-105 group-hover:z-30 object-top relative transition duration-500"
                onMouseMove={handleMouseMove}
              >
                {skillsObj[item]}
              </div>
            </div>
          </Fade>
        </Slide>
      ))}
    </>
  );
};

SkillsWithAnimatedTooltip.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SkillsWithAnimatedTooltip;
