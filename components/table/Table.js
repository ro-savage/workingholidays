"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class props {
}
const Table = (props) => {
    console.log(props);
    console.log(props.data);
    return (React.createElement("div", null,
        React.createElement("h2", null, props.title),
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Countries"),
                    React.createElement("th", null, "Visa"),
                    React.createElement("th", null, "Max Age"),
                    React.createElement("th", null, "Length"),
                    React.createElement("th", null, "Degree"),
                    React.createElement("th", null, "Notes"),
                    React.createElement("th", null, "Refs"))),
            React.createElement("tbody", null, props.data.map(item => (React.createElement("tr", null,
                React.createElement("td", null, "Australia"),
                React.createElement("td", null, "Yes"),
                React.createElement("td", null, "30"),
                React.createElement("td", null, "1"),
                React.createElement("td", null, "No"),
                React.createElement("td", null, "Max 3 months at each job."),
                React.createElement("td", null, "ref")))))),
        React.createElement("style", { jsx: true }, `
        table, tr, td, th {
          border: 1px solid black;
          border-collapse: collapse;
          padding: 3px;
        }
     `)));
};
Table.defaultProps = {
    title: '',
    data: []
};
exports.default = Table;
