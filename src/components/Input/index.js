import React from "react";
import Form from "react-bootstrap/Form";
//style
import InputWrapper from "./style";

const Index = ({ label,type,placeholder,as,className,marginBottom,value,onChange,name,onKeyDown }) => {
  return (
    <InputWrapper marginBottom={marginBottom} className={className  }>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control onKeyDown={onKeyDown} as={as} value={value} name={name} type={type} className={className} onChange={onChange} placeholder={placeholder} />
    </InputWrapper>
  );
};

export default Index;
