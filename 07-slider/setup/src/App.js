import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    } 
  }, [index, people]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="section">
  <div className="title">
    <h2>
      <span>/</span>reviews
    </h2>
  </div>
  <div className="section-center">
  {people.map((person, personIndex) => {
    const { id, image, name, title, quote } = person;
    let position  = 'nextSlide'
    if (personIndex === index) {
      position = 'activeSlide'
    }if (
      personIndex === index - 1 ||
      (index === 0 && personIndex === people.length - 1)
    ) {
      position = 'lastSlide';
    }
    // just in case I forget how this works,
    // first, section center is a parent div, display flex, position relative,
    // its child is a map function which returns article, position absolute
    // that has three classes, out of which only one is opacity 1(visible), i.e. activeSlide
    // we compare the value of index useState with PersonIndex to determine which article is 
    // activeSlide, lastSlide, nextSlide. each class has css property of transform X, which
    // align them in the left, center, right of the screen. Overflow is hidden in parent, so that
  // activeSlide is shown. And the rest is history.
  // Just kidding. the third condition above for lasSlide, is if the personIndex is index -1, it
  // it will belong to LastSlide class and show in the left. and the other condition being
  // after reloading the page, the last personIndex object is made to be in the class so it shows
  // on the left.

  return (
    <article className={position} key={id}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  )})}
  <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
</div>
  </section>
  )
}


export default App;
