import React, {useContext} from 'react';
import AppContext from './../AppContext';
import {AppConsumer} from './../AppContext'
import {ChildProvider} from './ChildContext'

export default class ChildClassConsoleLog extends React.Component {
  static contextType = AppContext;

  componentDidMount() {
    console.log("accès depuis la classe child 1: ", this.context.valueApp);
  }

  render() {
    return (
      <>
      <ChildProvider value={{valueChild: 'ok pour display le contexte du child'}}>
      </ChildProvider>
      </>
    );
  }
}


export class ChildClass extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <>
        <AppContext.Consumer>{parentContext=><>Classe 2 : {parentContext.valueApp}<br/></>}</AppContext.Consumer>
      </>
    );
  }

}


export function Childfunction() {

  const parentContext = useContext(AppContext);

  console.log("accès depuis la fonction child", parentContext.valueApp)

  return (<></>);

}
