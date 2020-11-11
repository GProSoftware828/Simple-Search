import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PostsTable.css';

export class PostsTable extends Component {
  render() {
    return (
      <div
        data-test="PostComponent"
				id="rows"
      >
        <table className="table">
					<tbody>
						<tr>
							<td className="title-space">
								Title
							</td>
							<td className="body-space">
							Body
							</td>
						</tr>
						<tr>
							<td class="title-space">
								{this.props.title}
							</td>
							<td className="body-space">
								{this.props.body}
							</td>
						</tr>
					</tbody>
        </table>
      </div>
    );
  }
}

PostsTable.propTypes = {
  title: PropTypes.string,
	body: PropTypes.string
};

export default PostsTable;
