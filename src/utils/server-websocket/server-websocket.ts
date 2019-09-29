import io from 'socket.io-client';
import { getCurrentAuthorizationToken } from '@/modules/auth';
// import { Socket } from 'net';

// export const wsConnect = () => {

interface IWsConnection {
  // socket: any,
  wsConnect: Function,
};

export class WsConnection<IWsConnection> {
  socket: any;
  constructor() {
    this.socket = io('http://localhost:3002');
    console.log('constructor');
  };

  wsConnect = () => {
    console.log('wsConnect');
    return this.socket.on('connect', (data: any) => {
      this.socket.emit('my other event', { my: 'data' });
      console.log('data', data);
    });
  };

  wsOnmessage = (fromUser: string, message: Object) => {
    const webToken = getCurrentAuthorizationToken();
    console.log('wsOnmessage');
    const mes = JSON.stringify({
      ...message, 
      authorization: webToken,
    });
    console.log('mes', mes);
      this.socket.send(fromUser, mes);
    // }
  };
};
// solid
// };

// export const wsConnect = () => {
//   socket.on('connect', (data: any) => {
//     socket.emit('my other event', { my: 'data' });
//     console.log('data', data);
//   });
// }

// export const wsSend = () => {
//   socket.emit('message', {
//     test: 'text',
//   });
// };

