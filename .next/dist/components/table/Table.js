"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");

var props = function props() {
    (0, _classCallCheck3.default)(this, props);
};

var Table = function Table(props) {
    console.log(props);
    console.log(props.data);
    return React.createElement("div", null, React.createElement("h2", null, props.title), React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Countries"), React.createElement("th", null, "Visa"), React.createElement("th", null, "Max Age"), React.createElement("th", null, "Length"), React.createElement("th", null, "Degree"), React.createElement("th", null, "Notes"), React.createElement("th", null, "Refs"))), React.createElement("tbody", null, props.data.map(function (item) {
        return React.createElement("tr", null, React.createElement("td", null, "Australia"), React.createElement("td", null, "Yes"), React.createElement("td", null, "30"), React.createElement("td", null, "1"), React.createElement("td", null, "No"), React.createElement("td", null, "Max 3 months at each job."), React.createElement("td", null, "ref"));
    }))), React.createElement("style", { jsx: true }, "\n        table, tr, td, th {\n          border: 1px solid black;\n          border-collapse: collapse;\n          padding: 3px;\n        }\n     "));
};
Table.defaultProps = {
    title: '',
    data: []
};
exports.default = Table;