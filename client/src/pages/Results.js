import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { searchProduct, resetSearch } from '../redux/actions/searchAction'
import Breadcrumb from '../components/Breadcrumb'
import ResultList from '../components/ResultList'
import Loading from '../components/Loading'
import Error from '../components/Error'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = { hasQuery: false, notFound: false, noResults: false }
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

  updateSearch = async () => {
    this.resetSearch()
    const { search } = window.location
    const query = queryString.parse(search)

    if (typeof query.search) {
      this.setState({ hasQuery: true })
      await this.searchProduct(query.search)

      if (Object.keys(this.props.results).length === 0) {
        this.setState({ noResults: true })
      }
    }

    if (query.search === undefined) {
      this.setState({ notFound: true })
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
        ) : this.state.notFound ? (
          <Error message="Página no encontrada" />
        ) : this.state.noResults ? (
          <Error message="No se encontraron resultados" />
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
