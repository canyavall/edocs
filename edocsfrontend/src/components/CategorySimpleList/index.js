//Main
import React from 'react';
import { style } from './style'
//Material ui
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

//utils
import { blackcolor } from '../../utils/constants'

const CategorySimpleList = (props) => {
  return <Table multiSelectable={true}>
          <TableHeader displaySelectAll={ false }
                        adjustForCheckbox={ false }>
            <TableRow>
              <TableHeaderColumn>Category</TableHeaderColumn>
              <TableHeaderColumn style={ style.tableRow }>Edit</TableHeaderColumn>
              <TableHeaderColumn style={ style.tableRow }>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true}
                     displayRowCheckbox={false}
                     deselectOnClickaway={false}>
          { props.categoryList.map((category) => {
            if (category.isGeneral) return null;
              return <TableRow key={ category.id }>
                        <TableRowColumn>{ category.name }</TableRowColumn>
                        <TableRowColumn style={ style.tableRow }><Edit hoverColor={blackcolor}/></TableRowColumn>
                        <TableRowColumn style={ style.tableRow }><Delete hoverColor={blackcolor}/></TableRowColumn>
                      </TableRow>
                  }
            )}
          </TableBody>
        </Table>
}

export default CategorySimpleList;
