import "./styles/MyClearButton.css";

const MyClearButton = (props) => {
  return (
    <button className="clear-button" onClick={props.handleClear}>
      {props.children}
    </button>
  );
};

export default MyClearButton;
