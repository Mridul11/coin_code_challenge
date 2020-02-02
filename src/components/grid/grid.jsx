import React from 'react';
import PropTypes from 'prop-types';
import { Label, Menu, Table } from 'semantic-ui-react';

function renderHeader(data) {
  return data.map(
    val => <Table.HeaderCell> {val.headerName} </Table.HeaderCell>
  )
}

const renderData = (data) => data.map(v => <Table.Row>
  <Table.Cell>
    <Label ribbon>
      {v.rank}
    </Label>
  </Table.Cell>
  <Table.Cell>{v.name}</Table.Cell>
  <Table.Cell>{v.price}</Table.Cell>
  <Table.Cell>{v.price_change}</Table.Cell>
  <Table.Cell>{v.market_cap}</Table.Cell>
  <Table.Cell>{v.volume_24h}</Table.Cell>
</Table.Row>
)


function Grid(props) {
  // props.onGridReady();
  console.log(props)
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {renderHeader(props.gridHeader)}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {renderData(props.gridData)}
      </Table.Body>
    </Table>
  )
}


export default Grid;
