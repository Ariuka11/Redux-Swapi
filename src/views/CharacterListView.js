import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getStarwars} from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
     this.props.getStarwars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <h1>Not ready yet.</h1>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    characters : state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */
  {
    getStarwars
    /* action creators go here */
  }
)(CharacterListView);
