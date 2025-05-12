import "../css/Note.css";

const Note = (props) => {
  const handleOnClick = () => {
    props.onDelete(props.id);
  };
  const { title, content } = props;
  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={handleOnClick}>DELETE</button>
    </div>
  );
};

export default Note;
