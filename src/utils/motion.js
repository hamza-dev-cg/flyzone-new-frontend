import { motion } from "framer-motion";

export const sentenceVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

export const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};

export const Typewriter = ({ text, ...rest }) => {
  return (
    <motion.p
      variants={sentenceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      {...rest}
    >
      {text.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};
