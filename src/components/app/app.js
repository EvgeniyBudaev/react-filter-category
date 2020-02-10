import React, { Component } from 'react';
import './app.css';
import DyCard from '../DyCard';

class App extends Component {

  state = {
    visibility: "all",
    cards: [
      { body: 'React', category: 'frontend' },
      { body: 'Vue.js', category: 'frontend' },
      { body: 'jQuery', category: 'frontend' },
      { body: 'ES6', category: 'frontend' },
      { body: 'Node.js', category: 'backend' },
      { body: 'pgSQL', category: 'backend' },
      { body: 'Webpack', category: 'backend' },
      { body: 'Ruby on Rails', category: 'backend' },
      { body: 'Babel', category: 'backend' }
    ]
  };

    cardFilterAction = ( event ) => {
      this.setState({
        visibility: event.target.value
      });
    };
    
      renderCards = () => {
        return this.state.cards
          .filter( ( card ) => {
            return (this.state.visibility !== 'all') ? (card.category === this.state.visibility ) : true;       
          })
          .map( ( card ) => {
            return (<DyCard body={card.body} category={card.category}/>);
          });
      };
      
      componentDidUpdate() {
        this.renderCards()
      }

      render() {
        return (
          <div className="grid-container">
            <div className="grid-margin-x grid-x">
              <button className="button cell large-4" value="frontend" onClick={this.cardFilterAction}>Frontend</button>
              <button className="button cell large-4" value="backend"onClick={this.cardFilterAction}>Backend</button>
              <button className="button cell large-4" value="all"onClick={this.cardFilterAction}>All</button>
            </div>
            <div className="grid-margin-x grid-x">
              { this.renderCards() }
            </div>
          </div>
        )
      };
};

export default App;