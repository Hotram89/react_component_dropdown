"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _caret = _interopRequireDefault(require("./caret.svg"));
require("./Dropdown.css");
var _uuid = require("uuid");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Dropdown = props => {
  const arr = props.options;
  const [cName, setClassName] = (0, _react.useState)("");
  const [selected, setSelected] = (0, _react.useState)(props.placeholder);
  const toggleMenu = e => {
    if (!cName) {
      setClassName("menu-active");
    } else {
      setClassName("");
    }
  };
  const handleOption = e => {
    setSelected(e.target.innerHTML);
    props.select(e.target.innerHTML);
    setClassName("");
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "selected-option",
    onClick: toggleMenu
  }, selected, /*#__PURE__*/_react.default.createElement("img", {
    className: "dropdown-icon",
    src: _caret.default,
    alt: "dropdown icon"
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: cName + " dropdown-list "
  }, arr.map((el, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: (0, _uuid.v4)(),
    onClick: handleOption,
    className: props.cName
  }, el))));
};
var _default = Dropdown;
exports.default = _default;