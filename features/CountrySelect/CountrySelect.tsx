import * as React from 'react'

interface Iprops {
  data: ICountry
}

interface Idata {
  [key:string]: ICountry
}

interface ICountry {
  homeCountry: string
  countries: any[]
}

// interface Icountries {
//   country: string
//   visa: boolean
//   maxAge: number
//   length: number
//   degree: boolean
//   notes: string
// }

const CountrySelect: React.StatelessComponent<Iprops>= ({data}) => {
  const countryList = Object.keys(data)
  console.log(countryList)
  return (
    <select>
      {countryList.map(item => <option value={item} key={item}>{data[item].homeCountry}</option>)}
    </select>
  )
}

export default CountrySelect
