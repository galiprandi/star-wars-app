import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'

// Styles
import './index.css'

// Components
import { Home } from './Components/Home/Home'
import { CharacterDetails } from './Components/CharacterDetails/CharacterDetails'
import { Error404 } from './Components/Error404/Error404'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/character/:id`}
            component={CharacterDetails}
          />
          <Route component={Error404} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
