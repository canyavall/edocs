//Main
import React from 'react';
import { style } from './style';

//Material ui
import RaisedButton from 'material-ui/RaisedButton';

const CategoryButtonList = (props) => {
     return <div style = {{display: 'inline-block'}}>
        { props.categoryList.map((category) => {
            return (<RaisedButton label={ category.name }
                                 key = { category.id }
                                 style={style.categoryButtons}
                                 onClick={() => props.changeCurrentCategory(category.id)}
                                 />)
                               })}
          </div>
}

export default CategoryButtonList;
