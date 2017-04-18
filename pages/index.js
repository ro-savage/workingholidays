"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Table_1 = require("../components/table/Table");
const CountryComparisonTable_1 = require("../features/CountryComparisonTable/CountryComparisonTable");
exports.default = () => (React.createElement("div", null,
    React.createElement("h1", null, "Working Holiday visa!"),
    React.createElement(Table_1.default, null),
    React.createElement(CountryComparisonTable_1.default, null)));
