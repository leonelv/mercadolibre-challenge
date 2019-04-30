import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { searchProduct, resetSearch } from '../redux/actions/searchAction'
import Breadcrumb from '../components/Breadcrumb'
import ResultList from '../components/ResultList'
import Loading from '../components/Loading'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = { hasQuery: false }
    this.searchProduct = this.props.searchProduct.bind(this)
    this.resetSearch = this.props.resetSearch.bind(this)
  }

  componentWillMount() {
    if (Object.keys(this.props.results).length > 0) {
    }

    this.updateSearch()
    this.unlistenRouteChange = this.props.history.listen(this.updateSearch)
  }

  componentWillUnmount() {
    this.resetSearch()
    this.unlistenRouteChange()
  }

  updateSearch = () => {
    this.resetSearch()
    const { search } = window.location
    const query = queryString.parse(search)
    if (query.search) {
      this.setState({ hasQuery: true })
      this.searchProduct(query.search)
    }
  }

  render() {
    return (
      <div>
        {this.state.hasQuery && Object.keys(this.props.results).length > 0 ? (
          <>
            <Breadcrumb categories={this.props.results.categories} />
            <ResultList results={this.props.results.items} />
          </>
        ) : (
          <Loading />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({ results: state.searchResult })

export default withRouter(
  connect(
    mapStateToProps,
    { searchProduct, resetSearch }
  )(Results)
)
