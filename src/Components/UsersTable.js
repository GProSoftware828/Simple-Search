import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UsersTable.css';

export class UsersTable extends Component {
  render() {
    return (
      <div
        onClick={this.props.click}
        data-testid="users-table"
				id="rows"
      >
        <table className="table">
					<tbody>
						<tr>
							<td className="name-space">
								Name
							</td>
							<td className="email-space">
							Email
							</td>
							<td className="city-space">
							City
							</td>
							<td className="company-space">
			         Company
							</td>
						</tr>
						<tr>
							<td class="name-space">
								{this.props.name}
							</td>
							<td className="email-space">
								{this.props.email}
							</td>
							<td className="city-space">
								{this.props.address}
							</td>
							<td className="company-space">
								{this.props.company}
							</td>
						</tr>
					</tbody>
        </table>
      </div>
    );
  }
}

UsersTable.propTypes = {
  name: PropTypes.string,
	email: PropTypes.string,
	address: PropTypes.string,
	company: PropTypes.string
};

export default UsersTable;
