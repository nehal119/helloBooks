import React from 'react';
import PropTypes from 'prop-types';
import { Col, Icon } from 'react-materialize';
import imageFallback from '../../static/profile_image.png';

/**
 * user profile data
 * @param {Object} props Object containing user data
 * @returns {JSX}        JSX representation of user profile
 */
const ProfileInfo = props => (
  <Col s={12} m={3} className="center">
    <Col s={12} className="profile-info">
      <div>
        <img className="circle profile-img responsive-img"
          src={props.image || imageFallback}
          alt="profile image"
        />
        <h6>{props.name || 'Update your profile info'}</h6>
      </div>
    </Col>
    <Col s={12} className="profile-info">
      <a className="btn waves-effect"
        href="#"
        onClick={props.onClick}
      >
        <Icon>edit</Icon>
        Edit Profile 
      </a>
    </Col>
  </Col>
);

ProfileInfo.propTypes = {
  name: PropTypes.string,
  image: PropTypes.array,
  onClick: PropTypes.func,
};

export default ProfileInfo;
