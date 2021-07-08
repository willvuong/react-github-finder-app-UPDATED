import PropTypes from 'prop-types'
import { useState } from 'react'

const Search = ({ searchUsers, showClear, clearUsers, showAlert }) => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value ); //this.setState({text: e.target.value}) for specific name targer (text)
    }

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            showAlert('Please enter something', 'light')
        } else {
            searchUsers(text);
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
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}

        </div>
    )

}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired
}

export default Search
