import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Container from './components/Container'
import Results from './pages/Results'
import Product from './pages/Product'
import SEO from './components/SEO'

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
          </Switch>
        </Container>
      </div>
    </Router>
  )
}

export default App
