import React from "react";
import "./Widgets.css";
import Button from '@mui/material/Button';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { connect } from "react-redux";
import { signOutAPI } from "../actions";



const Widgets = (props) => {
  return (
    <div className="widgets">
      <div className="widgets__icons">
      <Button 
      color="primary" 
      size="large" 
      startIcon={<CircleNotificationsRoundedIcon className="widgets__searchIcon" />}>
      </Button>
      <Button 
      color="primary" 
      size="large" 
      startIcon={ <AccountCircleIcon className="widgets__searchIcon" />}>
      </Button>
      <Button
      onClick={ () => props.signOut()} 
      color="primary" 
      size="large" 
      startIcon={ <LogoutIcon className="widgets__searchIcon" />}>
      </Button>
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's Popular</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user ,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Widgets);