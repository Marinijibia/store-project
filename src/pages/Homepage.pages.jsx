import CategoryCard from '../components/categoryCard';
import Hero from '../components/hero';

import menClothe from '../assets/img/men-clothe.png';
import womenClothe from '../assets/img/women-clothe.png';

import '../pages/styles.css'

const Homepage = ({categoryRef}) => {
    return (
        <div>
          <Hero />
          <hr />
          <h2>Categories</h2>
          <div className='cat-cont' ref={categoryRef}>
            <CategoryCard imgSrc={menClothe} title="Men's" />
            <CategoryCard imgSrc={womenClothe} title="Women's" />
          </div>
          
        </div>
    )
}


export default Homepage;
