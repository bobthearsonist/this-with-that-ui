import React, { PureComponent } from 'react';

export default class Materials extends PureComponent {
  state = {
    materials: [],
  };

  componentDidMount() {
    const rehydratedState = localStorage.getItem('materialsData');
    if (rehydratedState) {
      this.setState({ materials: JSON.parse(rehydratedState) });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.state.materials.length} Materials</div>
      </React.Fragment>
    );
  }
}
