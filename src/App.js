import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UsersTable } from './Components/UsersTable';
import { PostsTable } from './Components/PostsTable';
import './App.css';
import {
	getJSONUsers,
	submitSearch,
	getUserPosts
} from './store/actionCreators';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
		this.props.getJSONUsers();
  }

  async submitSearch(e) {
    e.preventDefault();
    let input = this.search.value;
    this.props.submitSearch(input);
  }

  render() {
    const { users, posts, username } = this.props;
    return (
      <div data-test="App">
				<form
     	 		onSubmit={e => {
        		this.submitSearch(e);
      		}}
					>
					<label> Search Users
					<input
						type="text"
						ref={input => (this.search = input)}
				 	/>
					</label>
					<button type="submit">Submit</button>
				</form>
        {users.length > 0 ? users.map(user => (
        <UsersTable
					data-testid="users"
          click={() => this.props.getUserPosts(user.id, user.name)}
					className="rows"
          name={user.name}
					email={user.email}
					address={user.address.city}
					company={user.company.name}
          key={user.id}
        />
        )): <p>No search results!</p>}
				{posts.length > 0 ? <h1>User Posts for {username}</h1> : ''}
        {posts.length > 0 ? 
					 posts.map(post => (
        		<PostsTable
							className="rows"
          		title={post.title}
							body={post.body}
          		key={post.id}
        			/>
        		)): ''}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
		users: state.users,
		posts: state.posts,
		username: state.username
  };
};

App.propTypes = {
  users: PropTypes.array,
	posts: PropTypes.array,
	username: PropTypes.string
};

export default connect(mapStateToProps, {
	getJSONUsers,
	submitSearch,
	getUserPosts
})(App);
