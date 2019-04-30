import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Container from './components/Container'
import SEO from './components/SEO'
import Results from './pages/Results'
import Product from './pages/Product'
import Error from './components/Error'

const NotFound = () => {
  return <Error message="Página no encontrada" />
}

function App() {
  return (
    <Router>
      <div className="App">
        <SEO />
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/items/:id" component={Product} />
            <Route path="/items" component={Results} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
    </Router>
  )
}

export default App
