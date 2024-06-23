import { animate, motion } from "framer-motion"

// variants
const stairAnimation = {
    initial : {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// reverse index calculate
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};


const Stairs = () => {
  return (
    <>
        
    </>
  )
}

export default Stairs