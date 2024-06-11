import { motion } from "framer-motion";

interface Props {
  topic: string;
  description: string;
  lastOne: boolean;
  active: number;
  index: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const animations = {
  initial: { opacity: 0, y: "-10vh" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-10vh" },
};

function Item({
  topic,
  description,
  lastOne,
  active,
  index,
  setActive,
}: Props) {
  return (
    <div>
      <div className=" flex justify-between">
        <h2
          onClick={() => (active !== index ? setActive(index) : setActive(-1))}
          className=" font-semibold text-p3 transition delay-100 ease-in-out duration-300 hover:text-p2 cursor-pointer"
        >
          {topic}
        </h2>
        {index !== active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            fill="none"
            viewBox="0 0 30 31"
            onClick={() => setActive(index)}
          >
            <path
              fill="#AD28EB"
              d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            fill="none"
            viewBox="0 0 30 31"
            onClick={() => setActive(-1)}
          >
            <path
              fill="#301534"
              d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
            />
          </svg>
        )}
      </div>
      {index === active && (
        <motion.p
          className=" text-pdull text-justify mt-4"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {description}
        </motion.p>
      )}
      {!lastOne && <div className=" h-[1px] opacity-15 my-7 bg-pdull" />}
    </div>
  );
}

export default Item;
