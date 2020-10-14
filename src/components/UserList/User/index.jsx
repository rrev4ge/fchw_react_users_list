import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';

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
        'flex-direction': 'row',
        'align-items': 'center',
        border: isSelected ? '4px solid purple' : 'unset',
        "background-color": isSelected ? 'grey' : 'unset',
        "color": isSelected ? 'white' : 'unset',
        'border-radius': '10px',
        width: '50vw',
        margin: "10px",
      },
      img: {
        'margin-right': 'auto',
        'margin-left': '10px',
        height: '50px',
        width: '50px',
        'border-radius': '50%',
      },
      icon: {
        'margin-left': 'auto',
        'margin-right': '10px',
      },
      info: {
        'margin-left': '70px',
        'margin-right': "auto",
      }
    };
    return (
      <li onClick={this.handleSelect} style={styles.li}>
        <img style={styles.img} src={profilePicture} alt='d' />
        <div style={styles.info}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <Icon
          style={styles.icon}
          onClick={this.handleDelete}
          path={mdiTrashCanOutline}
          size={1}
          color={'red'}
        />
      </li>
    );
  }
}

export default User;
