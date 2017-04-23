"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// interface Icountries {
//   country: string
//   visa: boolean
//   maxAge: number
//   length: number
//   degree: boolean
//   notes: string
// }
const CountrySelect = ({ data }) => {
    const countryList = Object.keys(data);
    console.log(countryList);
    return (React.createElement("select", null, countryList.map(item => React.createElement("option", { value: item, key: item }, data[item].homeCountry))));
};
exports.default = CountrySelect;
