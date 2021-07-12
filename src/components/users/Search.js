import PropTypes from 'prop-types'
import { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'

const Search = ({ showAlert }) => {
    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value ); //this.setState({text: e.target.value}) for specific name targer (text)
    }

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            showAlert('Please enter something', 'light')
        } else {
            githubContext.searchUsers(text);
            setText('');
        }

    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange}
                />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}

        </div>
    )

}

Search.propTypes = {
    showAlert: PropTypes.func.isRequired
}

export default Search
