import 'config/ReactotronConfig';
import 'config/StatusBarConfig';

import React from 'react';

import Navigator from 'navigation';
import { Provider } from 'react-redux';
import createStore from './store';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
