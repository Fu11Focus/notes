import './App.css';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(e) {
    if (this.state.theme === 'dark') {
      this.setState({ theme: 'light' });
    } else {
      this.setState({ theme: 'dark' });
    }
    console.log(this.state.theme);
  }

  render() {
    let btnTheme, atributeName;
    if (this.state.theme === 'dark') {
      btnTheme = <FontAwesomeIcon icon={faMoon} />;
      document.body.setAttribute('theme', 'dark');
    } else {
      btnTheme = <FontAwesomeIcon icon={faSun} />
      document.body.setAttribute('theme', 'light');
    }

    return (
      <div className="App">
        <button className='btnTheme' onClick={this.changeTheme}>{btnTheme}</button>
        <article className='container'>
          <h1 className='pageName'>My notes</h1>
          <input type='text' />
          <button><FontAwesomeIcon icon={faPlus} /></button>
        </article>
      </div>)
  }
}


export default App;
