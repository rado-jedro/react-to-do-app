import React from 'react';
import styles from './List.scss'
import Hero from '../Hero/Hero.js'
import PropTypes from 'prop-types';


class List extends React.Component {
    
    static propTypes = {
      title: PropTypes.node.isRequired,
      children: PropTypes.node.isRequired,
    }
    /*default props */
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
      }

    render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.component}>
            <Hero titleText={this.props.title} />
            <div className={styles.description}>
                {this.props.children}
            </div>
        </h2>
      </section>
    )
  }
}

export default List;
