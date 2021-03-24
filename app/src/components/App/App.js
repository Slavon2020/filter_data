import {useEffect} from 'react';
import {getUsers} from '../../store/operations';
import {connect} from 'react-redux';
import UsersList from '../UsersList/UsersList';
import FilterForm from '../FilterForm/FilterForm';
import './style.scss';


function App(props) {

  useEffect(() => {
    props.getUsers();
  }, [])

  return (
    <div className="app">
      <FilterForm/>
      <UsersList/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
