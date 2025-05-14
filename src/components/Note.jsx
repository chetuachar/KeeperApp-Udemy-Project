import "../css/Note.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  const handleOnClick = () => {
    props.onDelete(props.id);
  };
  const { title, content } = props;
  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={handleOnClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
