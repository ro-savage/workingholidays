import * as React from 'react'
import Table from '../components/table/Table'
import CountryComparisonTable from '../features/CountryComparisonTable/CountryComparisonTable'
import CountrySelect from '../features/CountrySelect/CountrySelect'

const data = {
  Australia: {
    homeCountry: 'Australia',
    countries:
    [
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
      countries:
      [
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
}

export default () => (
  <div>
    <h1>Working Holiday visa!</h1>
    <Table title="test" data={[]} />
    <CountrySelect data={data} />
    <CountryComparisonTable />
  </div>
)
