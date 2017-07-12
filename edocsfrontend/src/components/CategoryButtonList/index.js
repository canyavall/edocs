//Main
import React from 'react';
import { style } from './style';

//Material ui
import RaisedButton from 'material-ui/RaisedButton';

//utils
import { orangecolor, whitecolor } from '../../utils/constants'

const CategoryButtonList = (props) => {
  const currentCategory = props.currentCategory;
     return <div style = {{display: 'inline-block'}}>
        { props.categoryList.map((category) => {
            return (<RaisedButton label={ category.name }
                                 backgroundColor = { (currentCategory === category.id) ? orangecolor : whitecolor }
                                 labelColor = { (currentCategory === category.id) ? whitecolor : orangecolor  }
                                 key = { category.id }
                                 style={style.categoryButtons}
                                 onClick={() => props.changeCurrentCategory(category.id)}
                                 />)
                               })}
          </div>
}

export default CategoryButtonList;
