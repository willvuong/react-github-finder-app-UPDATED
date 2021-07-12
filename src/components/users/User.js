import { useEffect, useContext  } from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import { Link } from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, [])
    
    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        company
    } = user;

    if (loading) return <Spinner />

    return (
        <>
            <Link to='/' className='btn btn-light'>Back to Search</Link>
            Hireable:{' '}
            {hireable ? (
                <i className="fas fa-chack text-success" />
            ) : (
                <i className='fas fa-times-circle text-danger' />)}

            <div className="user-container">
                <div className="user-info">
                    <img src={avatar_url} className='round-img' alt="" style={{ width: '250px' }} />
                    <h1>{login}</h1>
                    <p>Location: {location}</p>
                </div>

                <div className="user-bio-container">

                    <div className="user-bio">
                        {bio && <>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </>}
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>

                        <ul>
                            <li>
                                {login && <>
                                    <strong>Username: </strong> {login}
                                </>}
                            </li>

                            <li>
                                {company && <>
                                    <strong>Company: </strong> {company}
                                </>}
                            </li>

                            <li>
                                {blog && <>
                                    <strong>Website: </strong> <a href={blog} target="_blank">{blog}</a>
                                </>}
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Follower {followers}</div>
                <div className="badge badge-success">Following {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>

            <Repos repos={repos} />
        </>
    )

}

export default User
