import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
//import Creator from '../Creator/Creator.js';



class List extends React.Component {
  /*
  state = {
    columns: this.props.columns || [],
  }
  */
    static propTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      image: PropTypes.text,
    }
    /*default props */
    static defaultProps = {
      description: settings.defaultListDescription,
    }

    /* Add new object to this.state.columns*/
    /*
    addColumn(title){
      this.setState(state => (
        {
          columns: [
            ...state.columns,
            {
              key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
              title,
              icon: 'list-alt',
              cards: [],
            },
          ],
        }
      ));
    }
*/
    render() {
      const {title, image, description,columns} = this.props;

      return (
        <section className={styles.component}>
          <h2 className={styles.component}>
            <Hero titleText={title} image={image} />
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
          </h2>
          
          <div className={styles.columns} >
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          {/*
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
          </div>
            */}
        </section>
      );
    }
}

export default List;
