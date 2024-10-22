import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Our <span className="text-purple">Questions</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Easy Questions"
          icon={<AceternityIcon order="Easy Questions" />}
          des="In first phase of studying we give our students easy questions to asnwer so they can easily solve."
          progress={30} // Example: 20% progress
          order="Easy"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Medium Questions"
          icon={<AceternityIcon order="Medium Questions" />}
          des="In second phase as the students studied a little we give our students medium questions to solve."
          progress={40} // Example: 40% progress
          order="Medium"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Hard Questions"
          icon={<AceternityIcon order="Hard Questions" />}
          des="In third phase as the student studied intermediate we give them hard questions to solve."
          progress={60} // Example: 60% progress
          order="Hard"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Extra Hard Questions"
          icon={<AceternityIcon order="Extra Hard Questions" />}
          des="In fourth phase as the student studied hard enough we give them our extra hard questions to solve."
          progress={80} // Example: 80% progress
          order="Extra Hard"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
  progress, // Progress value
  order,   // Difficulty level (Easy, Medium, Hard, Extra Hard)
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  progress: number;
  order: string; // New prop to handle difficulty level
}) => {
  const [hovered, setHovered] = useState(false);

  // Determine progress bar color based on order
  const getColorForOrder = (order: string) => {
    switch (order) {
      case "Easy":
        return "from-green-400 to-green-600"; // Easy level: Green
      case "Medium":
        return "from-yellow-400 to-yellow-600"; // Medium level: Yellow
      case "Hard":
        return "from-orange-400 to-orange-600"; // Hard level: Orange
      case "Extra Hard":
        return "from-red-400 to-red-600"; // Extra Hard level: Red
      default:
        return "from-gray-400 to-gray-600"; // Default: Gray
    }
  };

  const progressBarColor = getColorForOrder(order);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-white text-center group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>

        {/* Horizontal Progress Bar with color based on difficulty */}
        <div className="horizontal-progress-bar h-4 w-40 bg-gray-300 border-2 border-gray-500 rounded-full relative overflow-hidden mt-4 mx-auto shadow-lg">
          <div
            className={`absolute left-0 top-0 bg-gradient-to-r ${progressBarColor} h-full transition-all duration-500 ease-in-out`}
            style={{ width: `${progress}%` }}
          />
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-green-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
      >
        {order}
      </span>
    </button>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
