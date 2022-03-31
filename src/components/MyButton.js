import "./styles/MyButton.css";

const MyButton = (props) => {

  const isOperator = valor => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=");
  };

  return (
    <button className={`button-container ${isOperator(props.children) ? "operator" : null}`} onClick={() => props.handleClick(props.children)}>
      {props.children}
    </button>
  );
};

export default MyButton;
