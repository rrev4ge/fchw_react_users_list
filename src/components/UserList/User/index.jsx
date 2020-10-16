import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import classNames from 'classnames/bind';
import styles from"./User.module.css";

const cx = classNames.bind(styles);

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
    console.log();
    this.setState({
      isSelected: !this.state.isSelected,
    });
  };


 
  render() {
    const { name, description, profilePicture } = this.props;
    const { isSelected } = this.state;
    const className = {
      component: cx({component: true, select: this.state.isSelected,}),
      userLogo: cx({userLogo: true,}),
      userInfo: cx({userInfo: true,}),
      deleteIcon:  cx({deleteIcon: true,}),
    };
    return (
      <li onClick={this.handleSelect} className={className.component}>
        <img src={profilePicture} alt={name} className={className.userLogo} />
        <div className={className.userInfo}>
          <h4 className={className.userInfo}>{name}</h4>
          <p className={className.userInfo}>{description}</p>
        </div>
        <Icon
          className={className.deleteIcon}
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


 // const styles = {
    //   li: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: "space-around",
    //     alignItems: 'center',
    //     borderRadius: '10px',
    //     margin: '2px',
    //     border: isSelected ? '2px solid purple' : 'unset',
    //     backgroundColor: isSelected ? 'grey' : 'white',
    //     color: isSelected ? 'white' : 'black',
    //     padding: "5px",
    //   },
    //   img: {
    //     marginRight: '1vw',
    //     marginLeft: '1vw',
    //     height: '50px',
    //     width: '50px',
    //     borderRadius: '50%',
    //     border: '2px solid purple',
    //   },
    //   info: {
    //     margin: 0,
    //     marginBottom: "auto",
    //     marginRight: 'auto',
    //   },
    //   icon: {
    //     marginLeft: 'auto',
    //     marginRight: '1vw',
    //   },
    // };

    // return (
    //   <li onClick={this.handleSelect} style={component}>
    //     <img style={userLogo} src={profilePicture} alt='d' />
    //     <div style={userInfo}>
    //       <h4 style={userInfo}>{name}</h4>
    //       <p style={userInfo}>{description}</p>
    //     </div>
    //     <Icon
    //       style={deleteIcon}
    //       onClick={this.handleDelete}
    //       path={mdiDelete}
    //       size={1}
    //       color={isSelected ? 'white' : 'grey'}
    //     />
    //   </li>
    // );