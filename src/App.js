import React from 'react';
import $ from 'jquery';

export default class PersonComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        number:""
    }
  }


  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
      </div>
    );
  }
}
