import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateStatusInAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTableStatus: (id, status) => dispatch(updateStatusInAPI(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
