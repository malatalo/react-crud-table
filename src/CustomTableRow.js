import React, {Component} from 'react';
import {TableCell, TableRow} from 'material-ui/Table';
import Input from 'material-ui/Input';

export default class CustomTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: this.props.person
    };
  }

  enableEdit = () => {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        edit: true
      },
      name: this.state.person.name,
      email: this.state.person.email,
      phone: this.state.person.phone
    }));
  }

  savePerson = () => {
    let newPerson = {
      ...this.state.person,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      edit: false
    }
    this.setState(prevState => ({person: newPerson}));
    this.props.savePerson(newPerson);
  }

  cancelSave = () => {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        edit: false
      }
    }));
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (<TableRow key={this.state.person.id}>
      <TableCell>{
          this.state.person.edit
            ? <Input type="text" name="name" onChange={event => this.handleInputChange(event)} value={this.state.name}/>
            : this.state.person.name
        }</TableCell>
      <TableCell>{
          this.state.person.edit
            ? <Input type="text" name="email" onChange={event => this.handleInputChange(event)} value={this.state.email}/>
            : this.state.person.email
        }</TableCell>
      <TableCell>{
          this.state.person.edit
            ? <Input type="text" name="phone" onChange={event => this.handleInputChange(event)} value={this.state.phone}/>
            : this.state.person.phone
        }</TableCell>
      <TableCell>
        {
          this.state.person.edit
            ? <div>
                <button onClick={() => this.savePerson()}>save</button>
                <button onClick={() => this.cancelSave()}>cancel</button>
              </div>
            : <div>
                <button onClick={() => this.enableEdit()}>edit</button>
                <button onClick={() => this.props.deletePerson(this.props.person)}>delete</button>
              </div>
        }
      </TableCell>
    </TableRow>);
  }
}
