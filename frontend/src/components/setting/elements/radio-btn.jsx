import { memo } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import SettingAction from "../../../store/setting/actions";

const RadioBtn = memo((props) => {
  const dispatch = useDispatch();
  const radioCheckValue = (selector, value) => {
    if (selector === value) {
      return true;
    }
    return false;
  };
  return (
    <div className={`text-center w-100`}>
      <input
        type="radio"
        value={props.value}
        className={"btn-check"}
        name={props.btnName}
        id={props.id}
        autoComplete="off"
        defaultChecked={radioCheckValue(props.defaultChecked, props.value)}
        onClick={() => {
          dispatch(SettingAction[props.btnName](props.value));
          if (
            props.btnName === "theme_scheme_direction" &&
            window.location.pathname === "/"
          ) {
            window.location.reload();
          }
        }}
      />
      <label
        className={"btn dir-btn cutomizer-button w-100"}
        htmlFor={props.id}
      >
        {props.children}
      </label>
    </div>
  );
});

RadioBtn.displayName = "RadioBtn";
RadioBtn.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  btnName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  defaultChecked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  children: PropTypes.node
};
export default RadioBtn;
