import React from 'react';
import Logo from '../assets/logo.svg';
import '../styles/App.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect, ConnectedProps } from 'react-redux';
import { getFilters } from '../store/filter/actions';

class App extends React.Component<Props, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>client/src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/* basic router */}
        {/* 
        <Router>
          <div className="App">
            <Switch>
              <Route exact path={["/", "/home"]}>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router> 
        */}
      
      </div>
    );
  }
}

interface RootState {
  // mapState interface
  settingsReducer: {
      nameDisplay: boolean;
      darkMode: boolean;
  }
}

const mapState = (state: RootState) => ({
})

const mapDispatch = {
  getFilters: () => getFilters()
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  // additional props
}

export default connector(App);
