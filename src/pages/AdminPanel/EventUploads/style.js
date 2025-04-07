import Styled from "styled-components";

const FormWrapper = Styled.div`
    background-color: ${({ theme }) => theme.colors.whiteColor};
    width: 100%;
    padding: 24px;
    border-radius: 12px;

    .textarea-height {
      min-height: 200px;
      resize: none;
    }

    /* Upload Box Styling */
    .upload-box {
      width: 100%;
      height: 350px;
      border: 2px dashed #ccc;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      text-align: center;
      background-color: #f9f9f9;
    }

    .upload-box:hover {
      border-color: #007bff;
    }

    .drag-active {
      border-color: #007bff;
      background-color: #eaf2ff;
    }

    .upload-text {
      font-size: 16px;
      color: #666;
    }

    .file-input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    .img-preview {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
`;

export default FormWrapper;
