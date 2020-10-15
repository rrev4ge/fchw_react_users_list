import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  handleDelete = () => {
    this.props.filterItems(this.props.id);
  };

  handleSelect = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  };

  render() {
    const { name, description, profilePicture } = this.props;
    const { isSelected } = this.state;
    const styles = {
      li: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        borderRadius: '10px',
        margin: '2px',
        border: isSelected ? '2px solid purple' : 'unset',
        backgroundColor: isSelected ? 'grey' : 'white',
        color: isSelected ? 'white' : 'black',
        padding: "5px",
      },
      img: {
        marginRight: '1vw',
        marginLeft: '1vw',
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        border: '2px solid purple',
      },
      info: {
        margin: 0,
        marginBottom: "auto",
        marginRight: 'auto',
      },
      icon: {
        marginLeft: 'auto',
        marginRight: '1vw',
      },
    };
    return (
      <li onClick={this.handleSelect} style={styles.li}>
        <img style={styles.img} src={profilePicture} alt='d' />
        <div style={styles.info}>
          <h4 style={styles.info}>{name}</h4>
          <p style={styles.info}>{description}</p>
        </div>
        <Icon
          style={styles.icon}
          onClick={this.handleDelete}
          path={mdiDelete}
          size={1}
          color={isSelected ? 'white' : 'grey'}
        />
      </li>
    );
  }
}

export default User;
