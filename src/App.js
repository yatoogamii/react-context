import React from 'react';
import Child from './components/Child';

const AppContext = React.createContext('light');
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export default AppContext;

export class App extends React.Component {
  render() {
    const user = {name: 'test'};
    return (
      <AppProvider value={user}>
        <Child />
      </AppProvider>
    );
  }
}
