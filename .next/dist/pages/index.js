"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Table_1 = require("../components/table/Table");
var CountryComparisonTable_1 = require("../features/CountryComparisonTable/CountryComparisonTable");
exports.default = function () {
    return React.createElement("div", null, React.createElement("h1", null, "Working Holiday visa!"), React.createElement(Table_1.default, null), React.createElement(CountryComparisonTable_1.default, null));
};