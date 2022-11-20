import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';

const notificationRoot = document.querySelector('#notification');

export class Notification extends Component {
  render() {
    return createPortal(<ToastContainer />, notificationRoot);
  }
}
