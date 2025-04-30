import "./styles.scss";
import clsx from "clsx";

const CallMeBlock = (props, { className }) => {
  return (
    <div onClick={props.onClick} className={clsx("CallMeBlock", className)}>
      <div className="CallMeBlock__inner">
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  );
};

export default CallMeBlock;
