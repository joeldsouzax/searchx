import React from "react";

export const useError = () => {
  const [error, setValue] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");
  const setError = (value: boolean, message: string) => {
    setValue(value);
    setMessage(message);
  };
  return { error, message, setError };
};
