import React, { Component } from 'react'
import Map from'../components/Map'
import Search from'../components/Search'
import Layout from '../components/Layout';

class App extends React.Component {

  render() {
    return (
      <Layout>
        <Search></Search>
        <Map></Map>
      </Layout>
    )
  }
}
 

export default App