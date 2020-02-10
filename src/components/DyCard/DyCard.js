import React, { Component } from 'react';
import './DyCard.css';

class DyCard extends Component {
  constructor( props ) {
    super( props );
  }
  render() {
    return (
      <div key={ this.props.category } className="large-4 cell dy-card-wrapper">
        { this.props.body }
      </div>
    )
  };
};

export default DyCard;