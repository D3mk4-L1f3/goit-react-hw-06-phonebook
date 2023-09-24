import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from './components/App';
import './index.css';
import { createRoot } from 'react-dom/client'; // Update this line

const root = document.getElementById('root');
const reactRoot = createRoot(root); // Update this line

reactRoot.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
