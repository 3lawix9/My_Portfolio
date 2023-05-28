// import React from "react";
// import { useInView } from "react-intersection-observer";

// import { motion } from "framer-motion";

// const SlideFromLeft = ({ children }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const slideFromLeft = {
//     hidden: {
//       opacity: 0,
//       x: -100,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.8,
//         type: 'spring',
//         bounce: 0.3,
//       },
//     },
//   };

//   return (
//     <motion.div variants={slideFromLeft} initial="hidden" ref={ref} animate={inView ? 'visible' : 'hidden'}>
//       {children}
//     </motion.div>
//   );
// };


// export default SlideFromLeft;
