import React, { Component } from 'react';

import User from './User';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    this.fetchJson('./users.json', this.addUsersToList);
  }

  async fetchJson(url, func) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      func(data);
    } catch (error) {
      console.log(error);
    }
  }

  addUsersToList = (data) => {
    this.setState({ userList: data.map((elm) => elm) });
  };

  filterItems = (filteredItem) => {
    this.setState({
      userList: this.state.userList.filter(
        (currentItem) => currentItem.id !== filteredItem
      ),
    });
  };

  renderUserListItems = () => {
    const { userList } = this.state;
    

    return userList.map((user) => (
      <User
        key={user.id}
        id={user.id}
        filterItems={this.filterItems}
        name={user.firstName + ' ' + user.lastName}
        description={user.tagline}
        profilePicture={user.imgSrc}
      />
    ));
  };

  render() {
    const styles = {
      ul: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
      },
    };
    return <ul style={styles.ul}>{this.renderUserListItems()}</ul>;
  }
}

export default UserList;
