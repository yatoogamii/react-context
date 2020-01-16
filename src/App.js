import React from 'react';
import ChildClassConsoleLog, {ChildClass, Childfunction} from './components/Child';
import AppContext, {AppProvider} from "./AppContext";
import ChildContext from "./components/ChildContext";
import {ChildProvider} from './components/ChildContext'

export default class App extends React.Component {

  static contextType = ChildContext;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("affichage du contexte enfant depuis le parent",this.context.valueChild)
  }

  render() {
    return (
      <>
      <AppProvider value={{valueApp: 'ok pour display le parent'}}>
        <ChildProvider>
        <ChildClassConsoleLog />
        <ChildClass/>
        <Childfunction/>
          </ChildProvider>
      </AppProvider>
        </>
    );
  }
}
