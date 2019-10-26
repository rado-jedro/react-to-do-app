import React from 'react';
import styles from './List.scss'
import Hero from '../Hero/Hero.js'

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.component}>
            <Hero />
        </h2>
      </section>
    )
  }
}

export default List;
