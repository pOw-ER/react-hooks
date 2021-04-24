

const NewsCard = (props) => {
  return (
    <div>
      <h1>-{props.title}</h1>
      <p>{props.user_id}</p>
      {props.completed ? <input type="checkbox" name="checks" id="checks" checked /> : <input type="checkbox" name="checks" id="checks" />}
    </div>

  );
}

export default NewsCard;
