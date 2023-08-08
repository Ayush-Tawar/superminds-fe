import { useState } from "react";

export default function useFormField(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    setError(false);
  };

  return [
    {
      value,
      setValue,
      error,
      setError,
    },
    {
      value,
      error,
      onChange,
    },
  ];
}
