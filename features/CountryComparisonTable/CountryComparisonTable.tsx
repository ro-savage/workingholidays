import * as React from 'react'

import Table from '../../components/table/Table'

const data = {
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

const CountryComparisonTable = () => {

  return <Table title={data.homeCountry} data={data.countries} />
}

export default CountryComparisonTable
