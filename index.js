const Button = (props) => {
  const { name, className } = props;
  return <button className={className}> {name} </button>;
};

const element = (
  <div className="container">
    <h1> Social Buttons </h1>
    <div className="button-container">
      <Button name="like" className="like-button" />
      <Button name="comment" className="comment-button" />
      <Button name="share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
