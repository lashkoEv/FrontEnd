import { Button } from "../Button/Button";

export const Product = ({ data, onClickHandler, text, inCart }) => {
  let button;

  if (!inCart) {
    button = <Button text={text} onClickHandler={() => onClickHandler()} />;
  }

  return (
    <div className="p-6 rounded-2xl bg-slate-600 flex flex-col gap-4 relative">
      <img src={data.src} alt={data.title} />

      <div className="flex justify-end absolute top-6 right-3">
        <span className="bg-lime-600 px-3 py-1">{data.category}</span>
      </div>

      <div className="flex w-full justify-between py-6 items-center flex-wrap">
        <h3 className="text-l">{data.title}</h3>

        <h3 className="text-xl">{data.price} $</h3>
      </div>

      {button}
    </div>
  );
};
