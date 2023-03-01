import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isSubmit: true,
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
  }

  onSubmitRegistrationForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({lastNameError: true, firstNameError: true})
    } else if (firstName === '') {
      this.setState({firstNameError: true})
    } else if (lastName === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState({
        firstNameError: false,
        lastNameError: false,
        isSubmit: false,
        firstName: '',
        lastName: '',
      })
    }
  }

  onBlurFirst = () => {
    const {firstName} = this.state
    const validF = firstName === ''

    this.setState({firstNameError: validF})
  }

  onBlurLast = () => {
    const {lastName} = this.state
    const validL = lastName === ''

    this.setState({lastNameError: validL})
  }

  onFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  renderForm = () => {
    const {firstNameError, lastNameError, lastName, firstName} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitRegistrationForm}>
        <div className="first-name-con">
          <label htmlFor="first name" className="label-text">
            FIRST NAME
          </label>
          <input
            type="text"
            id="first name"
            placeholder="First name"
            className="input-ele"
            value={firstName}
            onChange={this.onFirstNameChange}
            onBlur={this.onBlurFirst}
          />
          {firstNameError && <p className="error-para">Required</p>}
        </div>
        <div className="last-name-con">
          <label htmlFor="last name" className="label-text">
            LAST NAME
          </label>
          <input
            type="text"
            id="last name"
            placeholder="Last name"
            className="input-ele"
            onChange={this.onLastNameChange}
            onBlur={this.onBlurLast}
            value={lastName}
          />
          {lastNameError && <p className="error-para">Required</p>}
        </div>
        <div className="submit-btn-con">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    )
  }

  onSubmitAnother = () => {
    this.setState({isSubmit: true})
  }

  renderSuccess = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button type="button" className="button" onClick={this.onSubmitAnother}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmit} = this.state
    console.log('firstName')
    return (
      <div className="app-container">
        <div className="registation-con">
          <h1 className="main-heading">Registration Form</h1>
          {isSubmit ? this.renderForm() : this.renderSuccess()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
