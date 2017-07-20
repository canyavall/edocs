//Main
import React from 'react';

import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer';
import SearchBoxCategory from '../../containers/SearchBoxCategory';
import CategoryFrame from '../../components/CategoryFrame';

const Categories = (props) => {
    return <div>
            <Header />
            <div style={style.wrapper}>
              <SearchBoxCategory />
              <CategoryFrame categories={ props.categories }
                              isArchive = { props.isArchive }
                              changeCurrentCategory = { props.changeCurrentCategory }
                              categoryInfo = { props.categoryInfo }
                              />
            </div>
            <Footer />
          </div>
}

export default Categories;
