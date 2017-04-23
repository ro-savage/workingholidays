"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Table_1 = require("../components/table/Table");
const CountryComparisonTable_1 = require("../features/CountryComparisonTable/CountryComparisonTable");
const CountrySelect_1 = require("../features/CountrySelect/CountrySelect");
const data = {
    Australia: {
        homeCountry: 'Australia',
        countries: [
            {
                country: 'Canada',
                visa: true,
                maxAge: 35,
                length: 2,
                degree: false,
                notes: 'Blah blah'
            },
            {
                country: 'New Zealand',
                visa: true,
                maxAge: 24,
                length: 1,
                degree: false,
                notes: 'NZ man'
            },
        ]
    },
    NewZealand: {
        homeCountry: 'New Zealand',
        countries: [
            {
                country: 'Australia',
                visa: true,
                maxAge: 30,
                length: 1,
                degree: false,
                notes: 'Blah blah'
            },
            {
                country: 'Canada',
                visa: true,
                maxAge: 35,
                length: 2,
                degree: false,
                notes: 'Blah blah'
            }
        ]
    }
};
exports.default = () => (React.createElement("div", null,
    React.createElement("h1", null, "Working Holiday visa!"),
    React.createElement(Table_1.default, { title: "test", data: [] }),
    React.createElement(CountrySelect_1.default, { data: data }),
    React.createElement(CountryComparisonTable_1.default, null)));
