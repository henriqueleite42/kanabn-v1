import React from "react";

import { Input } from "./style";

const FakeInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  onChange,
  disabled,
}) => {
  return <Input value={value} onChange={onChange} disabled={disabled} />;
};

export default FakeInput;
