/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Input = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 14px 14px 70px;
  margin-top: 8px;
  border-radius: ${(props) => props.$radius || "14px"};
  border: none;
  border-right: ${(props) => props.$border || "none"};
  background-color: #f7f7fb;
  color: transparent;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &:invalid {
    border: 1px solid red;
  }

  &:invalid + span::after {
    position: absolute;
    bottom: -20px;
    left: 0;
    content: "Only 5 digits. Min - 1 km";
    color: red;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
  }
`;

export const FalseInput = styled.div`
  display: flex;
  color: #121417;
  position: absolute;
  bottom: 14px;
  left: ${(props) => props.$left || "24px"};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;

export const Blink = styled.div`
  margin-left: 1px;
  display: inline-block;
  width: 1px;
  height: 18px;
  background-color: black;
  animation: cursor-blink 1s infinite;

  @keyframes cursor-blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

export const WrapSecondInput = styled.div`
  position: relative;
`;

export const ButtonSearch = styled.button`
  display: flex;
  width: ${(props) => props.width || "136px"};
  height: 48px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    fontSize: "16px",
    lineHeight: "1.25",
    fontWeight: "500",
    color: state.isSelected ? "#121417" : "rgba(18, 20, 23, 0.20)",
    backgroundColor: "#FFF",
    cursor: "pointer",
    padding: "0px",
    margin: "0px",

    "&:not(:last-child)": {
      marginBottom: "8px",
    },
  }),

  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    fontSize: "18px",
    lineHeight: "1.11",
    color: "#121417",
  }),

  menu: (defaultStyles) => ({
    ...defaultStyles,
    width: "224px",
    height: "272px",
    padding: "14px 8px 14px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    background: "#FFF",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
  }),

  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "transparent",
  }),

  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    paddingRight: "18px",
    color: "#121417",
  }),

  container: (defaultStyles) => ({
    ...defaultStyles,
    border: `none`,
    borderRadius: "14px",
    marginTop: "8px",
    outline: "none",
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: "14px 0px 14px 18px",
    margin: "0px",
  }),

  input: (styles) => ({
    ...styles,
    padding: "0px",
    margin: "0px",
  }),

  menuList: (base) => ({
    ...base,
    margin: "0px",
    padding: "0px",
    height: "244px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(18, 20, 23, 0.05)",
      borderRadius: "10px",
    },
  }),

  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: "#121417",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "1.11",
    margin: "0px",
    padding: "0px",
  }),
};

export const firstSelectStyles = {
  ...customStyles,
  control: (defaultStyles) => ({
    ...defaultStyles,
    cursor: "pointer",
    background: "#F7F7FB",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    height: "48px",
    borderRadius: "14px",
    border: "none",
    outline: "none",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.11",
    width: "224px",
  }),
};

export const secondSelectStyles = {
  ...customStyles,
  control: (defaultStyles) => ({
    ...defaultStyles,
    cursor: "pointer",
    background: "#F7F7FB",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    height: "48px",
    borderRadius: "14px",
    border: "none",
    outline: "none",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.11",
    width: "125px",
    paddingLeft: "21px",
  }),
};
