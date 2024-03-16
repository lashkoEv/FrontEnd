export const Button = ({ onClickHandler, text }) => {
  return (
    <button
      className="btn bg-slate-500 rounded-lg px-4 py-2"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};
