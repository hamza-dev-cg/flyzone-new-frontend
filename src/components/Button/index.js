import React from "react";
import ButtonWrapper from "./style";

const Index = (props) => {
  const {
    variant,
    type = "button",
    className,
    text,
    disabled,
    onClick,
    width,
    startIcon,
    height,
    loading, // Added loading prop
  } = props;

  return (
    <ButtonWrapper
      onClick={onClick}
      variant={variant}
      type={type}
      className={className}
      disabled={disabled || loading} 
      width={width}
      height={height}
    >
      {loading ? (
        <div className="spinner-border spinner-border-sm text-light" role="status"></div>
      ) : (
        <>
          {startIcon && startIcon}
          {text && <span className={startIcon ? "ms-1" : ""}>{text}</span>}
        </>
      )}

    </ButtonWrapper>
  );
};

export default Index;
