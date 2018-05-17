import React, {Component} from 'react';
import './App.css';
import Grid from 'material-ui/Grid';
import datajson from './data.json';
import Table, {TableHead, TableBody, TableCell, TableRow} from 'material-ui/Table';
import CustomTableRow from './CustomTableRow';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      persons: []
    };
  }

  componentDidMount = () => {
    //fetch('url.com/data.json')
    //.then(response => response.json())
    /* .then(datajson => */
    this.setState({persons: datajson}) //)
    //.catch(err => console.error(err));
  }

  handleClick = () => {
    console.log(this.state);
  }

  deletePerson = (delPerson) => {
    let newPersonList = this.state.persons.filter(filPerson => filPerson.id !== delPerson.id);
    this.setState({persons: newPersonList});
  }

  logPersons = () => console.log(this.state.persons);

  savePerson = (person) => {
    this.setState({
      persons: this.state.persons.map(
        p => p.id === person.id
        ? Object.assign({}, p, {
          name: person.name,
          email: person.email,
          phone: person.phone
        })
        : p)
    })
  }

  render() {
    return (<div className="App">
      <Grid container="container" justify='center'>
        <Grid item="item" xs={10}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.state.persons.map(person => {
                  return (<CustomTableRow person={person} deletePerson={this.deletePerson} savePerson={this.savePerson} key={person.id}></CustomTableRow>)
                })
              }
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <button onClick={this.logPersons}>logPersons</button>
    </div>);
  }
}

export default App;
