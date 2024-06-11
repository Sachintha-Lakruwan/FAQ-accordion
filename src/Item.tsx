interface Props {
  topic: string;
  description: string;
  lastOne: boolean;
  active: number;
  index: number;
}

function Item({ topic, description, lastOne, active, index }: Props) {
  return (
    <div>
      <div className=" flex justify-between">
        <h2 className=" font-semibold text-p3">{topic}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          fill="none"
          viewBox="0 0 30 31"
        >
          <path
            fill="#AD28EB"
            d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
          />
        </svg>
      </div>
      {index === active && (
        <p className=" text-pdull text-justify mt-4">{description}</p>
      )}
      {!lastOne && <div className=" h-[1px] opacity-15 my-7 bg-pdull" />}
    </div>
  );
}

export default Item;
