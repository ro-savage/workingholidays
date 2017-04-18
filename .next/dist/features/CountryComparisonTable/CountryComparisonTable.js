"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Table_1 = require("../../components/table/Table");
var data = {
    homeCountry: 'New Zealand',
    countries: [{
        country: 'Australia',
        visa: true,
        maxAge: 30,
        length: 1,
        degree: false,
        notes: 'Blah blah'
    }, {
        country: 'Canada',
        visa: true,
        maxAge: 35,
        length: 2,
        degree: false,
        notes: 'Blah blah'
    }]
};
var CountryComparisonTable = function CountryComparisonTable() {
    return React.createElement(Table_1.default, { title: data.homeCountry, data: data.countries });
};
exports.default = CountryComparisonTable;