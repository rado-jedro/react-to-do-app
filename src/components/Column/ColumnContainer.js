/* eslint-disable linebreak-style */
import {connect} from 'react-redux';
import Column from './Column.js';

export const getCardsForColumns = 
({cards}, columnId) => cards.filter(card => card.columnId == columnId);


const mapStateToProps = (state, props) => ({
  columns: getCardsForColumns(state, props.id),
});

export default connect(mapStateToProps)(Column);