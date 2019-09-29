import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setUserCoordinaterAction, setUserOnline } from '@/modules/coordinates';
import { getAuthUserId } from '@/modules/auth';
// import { WsConnection } from '@/utils/server-websocket';
import { getCoordinates, getHasWsConnect } from './map-page-selectors';
import { MapPage } from './map-page';
import { getWsConnect, sendMessageForWs } from './map-page-actions';

interface IMapPageControllerComponent {
  userCoordinates?: any,
  setUserCoordinaterAction: () => void,
  setUserOnline: (userId: string, isOnline: boolean) => void,
  authUserId: string,
  getWsConnect: () => void,
  sendMessageForWs: (message: string) => void,
  hasWsConnect: boolean,
};

class MapPageControllerComponent extends React.PureComponent<IMapPageControllerComponent> {  
  componentDidMount() {
    this.props.setUserCoordinaterAction();
    this.props.setUserOnline(this.props.authUserId, true);
  }

  componentWillUnmount() {
    this.props.setUserOnline(this.props.authUserId, false);
  }

  handleClick = () => {
    this.props.getWsConnect();
  }

  handleMessage = () => {
    this.props.setUserCoordinaterAction();
    this.props.sendMessageForWs('test');
  };

  render() {
    const { userCoordinates, hasWsConnect } = this.props;

    return(
      <MapPage
        coordinates={userCoordinates}
        hasWsConnect={hasWsConnect}
        handleClick={this.handleClick}
        handleMessage={this.handleMessage}
      />
    );
  }
};

const mapStateToProps = createStructuredSelector({
  userCoordinates: getCoordinates,
  authUserId: getAuthUserId,
  hasWsConnect: getHasWsConnect,
});

const mapDispatchToProps = {
  sendMessageForWs,
  setUserOnline,
  setUserCoordinaterAction,
  getWsConnect,
};

export const MapPageController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapPageControllerComponent);
