import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Order.module.scss';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const products = [
  {
    'id': 'cake',
    'class': 'small',
    'name': 'Zio Stefanos Doughnut',
    'price': 9,
  },
  {
    'id': 'breakfast',
    'class': 'small',
    'name': 'Zia Giulias Breakfast',
    'price': 9,
    'params': {
      'coffee': {
        'label': 'Coffee type',
        'type': 'radios',
        'options': {
          'latte': {
            'label': 'Latte',
            'price': 1,
            'default': true,
          },
          'cappuccino': {
            'label': 'Cappuccino',
            'price': 1,
          },
          'espresso': {
            'label': 'Espresso',
            'price': 1,
          },
          'macchiato': {
            'label': 'Macchiato ',
            'price': 1,
          },
        },
      },
    },
  },
  {
    'id': 'pizza',
    'name': 'Nonna Albas Pizza',
    'price': 20,
    'params': {
      'sauce': {
        'label': 'Sauce',
        'type': 'radios',
        'options': {
          'tomato': {
            'label': 'Tomato',
            'price': 0,
            'default': true,
          },
          'cream': {
            'label': 'Sour cream',
            'price': 2,
          },
        },
      },
      'toppings': {
        'label': 'Toppings',
        'type': 'checkboxes',
        'options': {
          'olives': {
            'label': 'Olives',
            'price': 2,
            'default': true,
          },
          'redPeppers': {
            'label': 'Red peppers',
            'price': 2,
            'default': true,
          },
          'greenPeppers': {
            'label': 'Green peppers',
            'price': 2,
            'default': true,
          },
          'mushrooms': {
            'label': 'Mushrooms',
            'price': 2,
            'default': true,
          },
          'basil': {
            'label': 'Fresh basil',
            'price': 2,
            'default': true,
          },
          'salami': {
            'label': 'Salami',
            'price': 3,
          },
        },
      },
      'crust': {
        'label': 'pizza crust',
        'type': 'select',
        'options': {
          'standard': {
            'label': 'standard',
            'price': 0,
            'default': true,
          },
          'thin': {
            'label': 'thin',
            'price': 2,
          },
          'thick': {
            'label': 'thick',
            'price': 2,
          },
          'cheese': {
            'label': 'cheese in edges',
            'price': 5,
          },
          'wholewheat': {
            'label': 'wholewheat',
            'price': 3,
          },
          'gluten': {
            'label': 'with extra gluten',
            'price': 0,
          },
        },
      },
    },
  },
  {
    'id': 'salad',
    'name': 'Nonno Albertos Salad',
    'price': 9,
    'params': {
      'ingredients': {
        'label': 'Ingredients',
        'type': 'checkboxes',
        'options': {
          'cucumber': {
            'label': 'Cucumber',
            'price': 1,
            'default': true,
          },
          'tomatoes': {
            'label': 'Tomatoes',
            'price': 1,
            'default': true,
          },
          'olives': {
            'label': 'Olives',
            'price': 1,
            'default': true,
          },
          'feta': {
            'label': 'Feta cheese',
            'price': 1,
          },
          'cheese': {
            'label': 'Cheese',
            'price': 1,
          },
          'herbs': {
            'label': 'Fresh herbs',
            'price': 1,
            'default': true,
          },
          'pepper': {
            'label': 'Black pepper',
            'price': 1,
          },
        },
      },
    },
  },
];

const demoOrder = [
  { orderId: 123,
    tableId: 3,
    subtotal: 18,
    delivery: 0,
    total: 18,
    products: [
      {id: 'cake',
        name: 'Doughnut',
        amount: 2,
        price: 9,
        params: [],
      },
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 2,
        price: 9,
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
    subtotal: 18,
    delivery: 20,
    total: 38,
    products: [
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 1,
        price: 9,
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
        price: 9,
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
    tableId: 5,
    subtotal: 20,
    delivery: 0,
    total: 20,
    products: [
      {id: 'pizza',
        name: 'Pizza',
        amount: 1,
        price: 20,
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
    tableId: 1,
    subtotal: 29,
    delivery: 0,
    total: 29,
    products: [
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 3,
        price: 9,
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
        price: 20,
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

const Order = () => {

  const params = useParams();
  const orderNumber = params.id !== 'new' && params.id;

  const getParam = (key, product) => product.params && product.params[key];
  const getOption = (productKey, optionKey, product) => product.params[productKey] && product.params[productKey].options[optionKey];

  return (
    <Paper className={styles.component}>
      <Typography variant="h4" component="h4" gutterBottom>
        {params.id === 'new' ? 'New Order' : 'Order nr: ' + params.id}
      </Typography>

      <section className={styles.sectionMenu}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className={styles.accordionSummary}
            aria-controls="menu-header"
            id="menu-header"
          >
            <Typography variant="h6" component="h6" gutterBottom>Menu</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table className={styles.menu}>
              <TableHead className={styles.tableHead}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Params</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              {products.map(product => (
                <TableBody key={product.id} className={styles.tableBody}>
                  <TableRow>
                    <TableCell>{product.name}</TableCell>
                    <TableCell className={styles.paramWrapper}>
                      {product.params ? Object.keys(product.params).map(paramKey => (
                        <div key={paramKey} className={styles.param}>
                          <h4 className={styles.paramName}>{getParam(paramKey,product).label}</h4>

                          {getParam(paramKey, product).type === 'checkboxes' && <>
                            <div className={styles.checkbox}>
                              {Object.keys(getParam(paramKey,product).options, product).map(optionKey => (
                                <label key={optionKey}>
                                  <FormControlLabel
                                    className={styles.option}
                                    control={<Checkbox checked={getOption(paramKey, optionKey, product).default}
                                      name={getOption(paramKey,optionKey, product).label}
                                      color="primary" />}
                                    label={getOption(paramKey,optionKey, product).label + ' ($' + getOption(paramKey,optionKey, product).price + ')'}
                                  />
                                </label>
                              ))}
                            </div>
                          </>}

                          {getParam(paramKey,product).type === 'radios' && <>
                            <div className={styles.radioForm}>
                              {Object.keys(getParam(paramKey,product).options, product).map((optionKey, index) => (
                                <RadioGroup
                                  key={index}
                                  aria-label={getParam(paramKey,product).label}
                                  name={getParam(paramKey,product).label}
                                  defaultValue={getParam(paramKey,product).label}
                                >
                                  <FormControlLabel
                                    className={styles.radio}
                                    checked={getOption(paramKey, optionKey, product).default}
                                    defaultValue={getOption(paramKey,optionKey, product).label}
                                    control={<Radio color="primary"/>}
                                    label={getOption(paramKey,optionKey, product).label + ' ($' + getOption(paramKey,optionKey, product).price + ')'}
                                  />
                                </RadioGroup>
                              ))}
                            </div>
                          </>}

                          {getParam(paramKey,product).type === 'select' && <>
                            <div className={styles.select}>
                              <FormControl variant="outlined">
                                <Select
                                  native
                                  variant="outlined"
                                  labelId="select-option"
                                  id="select-option"
                                >
                                  {Object.keys(getParam(paramKey,product).options, product).map((optionKey, index) => (
                                    <option
                                      key={index}
                                      defaultValue={getOption(paramKey,optionKey, product).label}
                                    >
                                      {getOption(paramKey,optionKey, product).label} (${getOption(paramKey,optionKey, product).price})
                                    </option>
                                  ))}
                                </Select>
                              </FormControl>
                            </div>
                          </>}
                        </div>
                      )) : null}
                    </TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>
                      <input
                        type="number"
                        defaultValue={1}
                        min={1}
                        max={20}
                      />
                    </TableCell>
                    <TableCell>
                      <span>
                        Total: $<span>{product.price}</span>
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button className={styles.addToCart} size="small" variant="contained">Add To Cart</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </AccordionDetails>
        </Accordion>
      </section>

      <section className={styles.sectionOrder}>
        <Typography variant="h6" component="h6" gutterBottom>
          {params.id === 'new' ? 'Cart' : 'Order Details'}
        </Typography>
        <Grid className={styles.orderContent}>
          <Grid container>
            <Grid item xs={12} container className={styles.order_header}>
              <Grid item xs={6}>Products</Grid>
              <Grid item xs={2}>Quantity</Grid>
              <Grid item xs={2}>Price</Grid>
              <Grid item xs={2}>Action</Grid>
            </Grid>
            <Grid item xs={12} container className={styles.order_body}>
              {demoOrder.map(row => (
                <Grid container key={row.orderId}>
                  {row.orderId.toString() === orderNumber && <>
                    {row.products.map(product => (
                      <Grid container key={row.products.indexOf(product)} className={styles.orderProduct_wrapper}>
                        <Grid item xs={6} className={styles.orderProduct}>
                          {params.id !== 'new' ? <>
                            <Grid item className={styles.orderProduct_name}>{product.name}</Grid>
                            <List className={styles.orderProduct_details}>
                              {product.params.map(param => (
                                <ListItem key={param.label}className={styles.orderProduct_option}>
                                  <span className={styles.orderProduct_optionLabel}>{param.label}:</span>
                                  <span className={styles.orderProduct_optionName}>{param.options.join(', ')}</span>
                                </ListItem>
                              ))}
                            </List>
                          </> : null}
                        </Grid>
                        <Grid item xs={2} className={styles.orderProduct_amount}>
                          {params.id !== 'new' ? <>
                            {product.amount}
                          </> : null}
                        </Grid>
                        <Grid item xs={2} className={styles.orderProduct_price}>
                          {params.id !== 'new' ? <>
                            ${product.price}
                          </> : null}
                        </Grid>
                        <Grid item xs={2} className={styles.orderProduct_action}>
                          <span className={styles.edit}><CreateIcon /></span>
                          <span className={styles.edit}><DeleteIcon /></span>
                        </Grid>
                      </Grid>
                    ))}
                  </>}
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} container className={styles.orderSummary}>
            <Grid item xs={6} container alignItems="center" className={styles.orderSummary_tableNr}>
              {params.id === 'new' ? <>
                <List>
                  <ListItem>Choose A Table</ListItem>
                  <ListItem><strong>Nr: <input type="number" min={1} max={9} /></strong></ListItem>
                </List>
              </> :
                demoOrder.map((order, index) => (
                  <Grid key={index}>
                    <strong>
                      {order.orderId.toString() === orderNumber &&
                        (order.takeAway === true ?
                          'TAKE AWAY' : <>
                            Table Nr: <input type="number" defaultValue={order.tableId} min={1} max={9} />
                          </>
                        )
                      }
                    </strong>
                  </Grid>
                ))
              }
            </Grid>

            <Grid item xs={2} component={List} className={styles.orderSummary_details}>
              <ListItem className={styles.orderSummary_subtotal}>
                <span>Subtotal: </span>
              </ListItem>
              <ListItem className={styles.orderSummary_delivery}>
                <span>Delivery: </span>
              </ListItem>
              <ListItem className={styles.orderSummary_total}>
                <strong>Total: </strong>
              </ListItem>
            </Grid>

            {params.id === 'new' ? <>
              <Grid item xs={2} component={List} className={styles.orderSummary_detailsAmount}>
                <ListItem className={styles.orderSummary_subtotalAmount}>
                  $<span>0</span>
                </ListItem>
                <ListItem className={styles.orderSummary_deliveryAmount}>
                  $<span>0</span>
                </ListItem>
                <ListItem className={styles.orderSummary_totalAmount}>
                  $<span>0</span>
                </ListItem>
              </Grid>
            </> : <>
              {demoOrder.map((order, index) => (
                order.orderId.toString() === orderNumber && <>
                  <Grid key={index} item xs={2} component={List} className={styles.orderSummary_detailsAmount}>
                    <ListItem className={styles.orderSummary_subtotalAmount}>
                      $<span>{order.subtotal}</span>
                    </ListItem>
                    <ListItem className={styles.orderSummary_deliveryAmount}>
                      $<span>{order.delivery}</span>
                    </ListItem>
                    <ListItem className={styles.orderSummary_totalAmount}>
                      $<span>{order.total}</span>
                    </ListItem>
                  </Grid>
                </>
              ))}
            </>}

            <Grid item xs={2} container alignItems="center">
              {params.id === 'new' ? <>
                <Button variant="contained" className={styles.order_confirmation}>ORDER</Button>
              </> : null}
            </Grid>
          </Grid>
        </Grid>
      </section>
    </Paper>
  );
};

export default Order;
