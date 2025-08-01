import React from "react";
import { motion } from "framer-motion";

// HOC for page transitions
const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      {/* Outgoing animation layer */}
      <motion.div
        className="slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Your actual page */}

      {/* Incoming animation layer */}
      <motion.div
        className="slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
