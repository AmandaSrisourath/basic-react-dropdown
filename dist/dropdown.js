import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes, { object } from "prop-types";
/**
 * Create dropdown
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

function Dropdown(props) {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const {
    options = [],
    onChange,
    value
  } = props;
  /**
   * Open and close dropdown
   * @param event
   */

  const switchIsOpen = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  /**
   * Send selected value to onChange Props
   * @param event
   */


  const handleClick = e => {
    const option = options.find(opt => opt.value === e.target.getAttribute("data-value"));
    onChange(option.value);
  };

  useEffect(() => {
    /**
     * Close dropdown when click outside
     * @param e
     */
    const checkIfClickedOutside = e => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    name: "button",
    onClick: switchIsOpen,
    "data-testid": "selected-value"
  }, !value ? /*#__PURE__*/React.createElement("p", null, "Options") : value, isOpen ? /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAngleUp
  }) : /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAngleDown
  })), isOpen && /*#__PURE__*/React.createElement(Select, {
    "data-testid": "select",
    onClick: handleClick,
    width: ref.current && ref.current.offsetWidth
  }, options.map(option => /*#__PURE__*/React.createElement(Paragraph, {
    key: option.label,
    "data-value": option.value,
    onClick: switchIsOpen
  }, option.label))));
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(object).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string
};
Dropdown.defaultProps = {
  options: []
};
const Button = styled.button`
  font-size: 16px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background: #f1f2fa;
  border: none;
  width: 100%;
  height: 40px;
  cursor: pointer;
`;
const Select = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 4px;
  box-shadow: 5px 10px 18px #888888;
  width: ${props => props.width ? `${props.width}px` : '300px'};
  height: 120px;
  overflow: auto;
  cursor: pointer;
`;
const Paragraph = styled.p`
  padding: 11px 16px;
  margin: 0;

  &:hover {
    background: #f1f2fa;
    border-radius: 4px;
  }
`;
export { Dropdown };