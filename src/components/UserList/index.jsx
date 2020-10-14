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
    console.log(filteredItem);
    this.setState({
      list: this.state.userList.filter(
        (currentItem) => currentItem.id !== filteredItem
      ),
    });
    console.log(this.state.userList);
  };

  renderUserListItems = () => {
    const { userList } = this.state;
    const styles = {
      ul: {
        
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'border-radius': '10px',
        
      },
    };

    return userList.map((user) => (
      <User style={styles}
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
    return <ul>{this.renderUserListItems()}</ul>;
  }
}

export default UserList;
