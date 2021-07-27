import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    updateTableStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status){
    const { updateTableStatus } = this.props;

    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => updateTableStatus(id, 'thinking')}>thinking</Button>
            <Button
              onClick={() => updateTableStatus(id, 'ordered')}
              component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button
            onClick={() => updateTableStatus(id, 'ordered')}
            component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => updateTableStatus(id, 'prepared')}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => updateTableStatus(id, 'delivered')}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => updateTableStatus(id, 'paid')}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => updateTableStatus(id, 'free')}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(table => (
                <TableRow key={table.id}>
                  <TableCell component="th" scope="row">
                    {table.id}
                  </TableCell>
                  <TableCell>
                    {table.status}
                  </TableCell>
                  <TableCell>
                    {table.order && (
                      <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${table.order}`}>
                        {table.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(table.id, table.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
