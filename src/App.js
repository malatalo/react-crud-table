import React, { Component } from 'react';
import './App.css';
import Grid from 'material-ui/Grid';
import datajson from './data.json';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';

class App extends Component {
    
  constructor(props){
    super();
    this.state = {persons:[]};
  }
  
  componentDidMount = () => {
    //fetch('url.com/data.json')
        //.then(response => response.json())
        /*.then(json => */ this.setState({persons: datajson}) //)
    //.catch(err => console.error(err));
  }
  
  handleClick = () => {
    console.log(this.state);
  }
  
  render() {
    return (
      <div className="App">
        <Grid container justify='center'>
          <Grid item xs={10}>
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
                    return (
                      <TableRow key={person.id}>
                        <TableCell>{person.name}</TableCell>
                        <TableCell>{person.email}</TableCell>
                        <TableCell>{person.phone}</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
