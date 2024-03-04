export const Post = ({ title, text, date }) => {
  return (
    <div className="post">
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
      <h5 className="date">Date: {date}</h5>
    </div>
  );
};
