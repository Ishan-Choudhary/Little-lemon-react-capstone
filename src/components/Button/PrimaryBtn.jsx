import "../../assests/styles/Btn/PrimaryBtnStyle.css";

const PrimaryBtn = ({ content, onClick }) => {
  return (
    <button className="primary-btn" onClick={onClick}>
      {content}
    </button>
  );
};

export default PrimaryBtn;
