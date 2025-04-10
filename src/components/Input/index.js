import React from "react";
import Form from "react-bootstrap/Form";
// style
import InputWrapper from "./style";

const Input = React.forwardRef(
  (
    {
      label,
      type = "text",
      placeholder,
      as = "input",
      className,
      marginBottom,
      ...rest
    },
    ref
  ) => {
    return (
      <InputWrapper marginBottom={marginBottom} className={className}>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control
          ref={ref}
          as={as}
          type={type}
          placeholder={placeholder}
          className={className}
          {...rest}
        />
      </InputWrapper>
    );
  }
);

export default Input;
