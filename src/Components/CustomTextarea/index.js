import "./style.css";

const CustomTextarea = (props) => {
  return (
    <>
      <div className="inputWrapper">
        {props?.label && (
          <label htmlFor={props?.id} className={props?.labelClass}>
            {props?.label}
            <span>{props?.required ? "*" : ""}</span>
          </label>
        )}

        <textarea
          type={props?.type}
          placeholder={props?.placeholder}
          required={props?.required}
          disabled={props.disabled}
          id={props?.id}
          name={props?.name}
          className={props?.inputClass}
          onChange={props?.onChange}
          onFocus={props?.onFocus}
          onBlur={props?.onBlur}
          value={props.value}
        />
      </div>
    </>
  );
};
export default CustomTextarea;
