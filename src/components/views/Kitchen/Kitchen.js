import React from 'react';
import styles from './Kitchen.module.scss';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const demoOrder = [
  { orderId: 123,
    takeAway: false,
    tableId: 2,
    products: [
      {id: 'cake',
        name: 'Doughnut',
        amount: 2,
        params: [],
      },
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 2,
        params: [
          {
            label: 'Coffee',
            options: ['Latte'],
          },
        ],
      },
    ],
  },
  { orderId: 234,
    takeAway: true,
    tableId: '',
    products: [
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 1,
        params: [
          {
            label: 'Coffee',
            options: ['Espresso'],
          },
        ],
      },
      {id: 'salad',
        name: 'Salad',
        amount: 1,
        params: [
          {
            label: 'Ingredients',
            options: ['Cucumber', 'Tomatoes', 'Olives', 'Onion'],
          },
        ],
      },
    ],
  },
  { orderId: 345,
    takeAway: false,
    tableId: 5,
    products: [
      {id: 'pizza',
        name: 'Pizza',
        amount: 1,
        params: [
          {
            label: 'Sauce',
            options: ['Cezar'],
          },
          {
            label: 'Toppings',
            options: ['Olives', 'Red Peppers', 'Mushrooms', 'Fresh Bazil', 'Salami'],
          },
          {
            label: 'Crust',
            options: ['Thick'],
          },
        ],
      },
    ],
  },
  { orderId: 456,
    takeAway: false,
    tableId: 1,
    products: [
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 3,
        params: [
          {
            label: 'Coffee',
            options: ['Latte'],
          },
        ],
      },
      {id: 'pizza',
        name: 'Pizza',
        amount: 1,
        params: [
          {
            label: 'Sauce',
            options: ['Tomato'],
          },
          {
            label: 'Toppings',
            options: ['Red Peppers', 'Mushrooms', 'Onion', 'Fresh Bazil', 'Salami'],
          },
          {
            label: 'Crust',
            options: ['Standard'],
          },
        ],
      },
    ],
  },
];

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" component="h4" gutterBottom>
        Kitchen Orders
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order Nr</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Products</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoOrder.map(row => (
            <TableRow key={row.orderId}>
              <TableCell component="th" scope="row">
                {row.orderId}
              </TableCell>
              <TableCell>
                {row.takeAway === true ? 'TAKE AWAY' : row.tableId}
              </TableCell>
              <TableCell className={styles.tableCell_orderProduct}>
                {row.products.map(product => (
                  <List key={row.products.indexOf(product)} className={styles.orderProducts_list}>
                    <ListItem className={styles.orderProducts_listItem}>
                      <div className={styles.orderProduct}>
                        <div className={styles.orderProduct_header}>
                          <div className={styles.orderProduct_name}>{product.name}</div>
                          <div className={styles.orderProduct_amount}>Quantity: {product.amount}</div>
                        </div>
                        <List className={styles.orderProduct_details}>
                          {product.params.map(param => (
                            <ListItem key={product.params[param]}className={styles.orderProduct_option}>
                              <span className={styles.orderProduct_optionLabel}>
                                {param.label}:
                              </span>
                              <span className={styles.orderProduct_optionName}>
                                {param.options.join(', ')}
                              </span>
                            </ListItem>
                          ))}
                        </List>
                      </div>
                    </ListItem>
                  </List>
                ))}
              </TableCell>
              <TableCell>
                <Button className={styles.buttonPrepared} size="small" variant="contained">MARK AS PREPARED</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;
