import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchProduct, resetSearch } from '../redux/actions/searchAction'
import { loadProduct } from '../redux/actions/loadProduct'
import Product from '../components/Product'
import Breadcrumb from '../components/Breadcrumb'
import Loading from '../components/Loading'
import Error from '../components/Error'
import NotFound from './404'


class ItemView extends Component {
  constructor(props) {
    super(props)
    this.state = { hasID: false, notFound: false }
    this.searchProduct = this.props.searchProduct.bind(this)
    this.resetSearch = this.props.resetSearch.bind(this)
    this.loadProduct = this.props.loadProduct.bind(this)
  }

  async componentWillMount() {
    const { id } = this.props.match.params
    await this.loadProduct(id)
    if (Object.keys(this.props.item).length > 0) {
      await this.searchProduct(this.props.item.item.title)
      this.setState({ hasID: true })
    } else {
      this.setState({ notFound: true })
    }
  }

  componentWillUnmount() {
    this.resetSearch()
  }

  render() {
    return (
      <div>
        {this.state.hasID ? (
          <>
            <Breadcrumb categories={Object.keys(this.props.results).length > 0 ? this.props.results.categories : []} />
            <Product item={this.props.item.item} />
          </>
        ) : this.state.notFound ? (
          <Error message="Página no encontrada" />
        ) : (
          <Loading />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({ results: state.searchResult, item: state.productInfo })

export default withRouter(
  connect(
    mapStateToProps,
    { searchProduct, loadProduct, resetSearch }
  )(ItemView)
)
