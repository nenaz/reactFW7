import * as React from 'react';
import { Button } from 'framework7-react';
import { Map } from '@/components/map';
import { Page } from '@/components/page';
import wrapper from './map-page.module.scss';

interface IMapPageProps {
  coordinates?: any,
  hasWsConnect: boolean,
  handleClick: () => void,
  handleMessage: () => void,
};

export class MapPage extends React.PureComponent<IMapPageProps> {
  render() {
    const { coordinates, hasWsConnect } = this.props;
    const iconClassName = hasWsConnect ? 'success' : 'error';
    console.log(wrapper);
    return(
      <Page {...this.props}>
        {/* <Map {...this.props} /> */}
        <Map coordinates={coordinates} {...this.props} />
        {/* <button onClick={() => this.props.getGPSCoord(coordinates)}> */}
        <Button
          raised
          fill
          onClick={this.props.handleClick}
          iconFa="globe"
          className={wrapper[iconClassName]}
        >
          Начать передавать координаты
        </Button>
        <Button
          onClick={this.props.handleMessage}
          raised
          fill
        >
          Новые координаты
        </Button>
      </Page>
    );
  }
}
