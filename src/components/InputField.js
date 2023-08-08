const InputField = (props) => {
  const { type, className, placeholder, options, error, ...rest } = props;
  const errorIndicator = (
    <div className="text-xs md:text-base font-medium mt-[1px] text-red-400 min-h-[25px]">
      {error ? error : ""}
    </div>
  );
  let commonClassName = `appearance-none bg-transparent font-glancyrThin font-14-20 font-[200] tracking-[0.5em] w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none border-white border-opacity-[30%] border-b-[1px]${
    error
      ? "border-red-400 focus:border-emerald-400 border-b-[0.5px]"
      : "border-white border-b-[0.5px] focus:border-emerald-400"
  }  outline-none border-b-2 bg-transparent`;
  const label = (
    <label className="hidden" id={placeholder + " label"} htmlFor={placeholder}>
      {placeholder}
    </label>
  );
  if (type === "select") {
    return (
      <div className="md:col-span-2 ">
        {label}
        <select
          id={placeholder}
          className={`select uppercase px-2 ${commonClassName}`}
          style={{
            backgroundColor: "#0D250E",
            width: "100% !important",
            maxWidth: "100% !important",
          }}
          {...rest}>
          <option value="" className="pt-2 w-[50vw]">
            INTERESTED IN
          </option>
          {options.map((opt) => {
            return (
              <option
                key={opt}
                value={opt}
                className="pt-2 w-[50vw]"
                style={{
                  display: "flex",
                  backgroundColor: "transparent",
                  paddingTop: "1rem",
                  height: "fit-content",
                  overflow: "hidden",
                }}>
                {opt}
              </option>
            );
          })}
        </select>
        {errorIndicator}
      </div>
    );
  }

  if (type === "textArea") {
    return (
      <div className=" md:col-span-2">
        {label}
        <textarea
          id={placeholder}
          placeholder={placeholder}
          rows={1}
          className={`min-h-[30px] md:min-h-[40px] max-h-8 ${commonClassName}`}
          {...rest}
        />
        {errorIndicator}
      </div>
    );
  }

  if (type === "date") {
    return (
      <div className="">
        {label}
        <input
          id={placeholder}
          type="date"
          placeholder={placeholder}
          className={`relative ${commonClassName}`}
          {...rest}
        />
        {errorIndicator}
      </div>
    );
  }
  if (type === "tel") {
    return (
      <div className={` ${className}`}>
        {label}
        <input
          id={placeholder}
          type={type}
          onInput={(a) =>
            (a.target.value = a.target.value
              .replace(/[^0-9.]/g, "")
              .replace(/(\..*)\./g, "$1"))
          }
          placeholder={placeholder}
          className={`${commonClassName}`}
          {...rest}
        />
        {errorIndicator}
      </div>
    );
  }
  return (
    <div className={` ${className} `}>
      {label}
      <input
        id={placeholder}
        type={type}
        placeholder={placeholder}
        className={`${commonClassName}`}
        {...rest}
      />
      {errorIndicator}
    </div>
  );
};

export default InputField;
