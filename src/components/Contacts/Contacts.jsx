import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import users from '../../assets/users.json';

export class Contacts extends Component {
  state = {
    users,
  };
  componentDidMount() {
    const users = JSON.parse(window.localStorage.getItem('contacts'));
    users.length && this.setState({ users });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.users.length !== this.state.users.length) {
      window.localStorage.setItem('contacts', JSON.stringify(this.state.users));
    }
  }
  handleSaveUser = user => {
    this.blockEdding(user.name) &&
      this.setState(prev => ({
        users: [
          ...prev.users,
          { id: nanoid(), name: user.name, number: user.number },
        ],
      }));
  };
  handleDeleteUser = id => {
    this.setState(prev => ({
      users: prev.users.filter(user => user.id !== id),
    }));
  };
  blockEdding = name => {
    let existContact = [];
    this.state.users.map(el => {
      return existContact.push(el.name);
    });
    return existContact.includes(name)
      ? alert('This Contact alredy exist')
      : true;
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <ContactForm saveUser={this.handleSaveUser}></ContactForm>
        <ContactList
          users={users}
          onDeleteUser={this.handleDeleteUser}
        ></ContactList>
      </>
    );
  }
}

Contacts.propTypes = {
  users: PropTypes.array,
};
