import React, { Component } from 'react';
import s from './ContactForm.module.css';

import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};
export class ContactForm extends Component {
  state = INITIAL_STATE;
  handleSubmit = e => {
    e.preventDefault();

    this.props.saveUser(this.state);

    this.reset();
  };
  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={s.input}
        />
        <label className={s.label}>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChangeInput}
          pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={s.input}
        />
        <button type="submit">Add Contacts</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

// export const ContactForm = () => {
//
// };
//   state = { ...INITIAL_STATE };
//   handleCange = e => {
//     const { name, value } = e.target;
//     e.target.value && this.setState({ [name]: value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="number" className={style.label}>
//           Name
//         </label>
//         <div className={style.form}>
//           <input
//             className={style.input}
//             type="text"
//             name="name"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             value={this.state.name}
//             onChange={this.handleCange}
//             required
//           />
//           <input
//             className={style.input}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             value={this.state.number}
//             onChange={this.handleCange}
//             required
//           />
//         </div>
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
