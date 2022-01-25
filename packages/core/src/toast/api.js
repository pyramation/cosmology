import React from 'react';
import { render } from 'react-dom';
import { isBrowser } from '../utils/dom';
import { Intent } from '../constants';
import ThemeProvider from '../theme-provider';
import Manager from './manager';

export const TOAST_PORTAL_ID = 'webql-toast-portal';

class ToastApi {
  constructor() {
    if (!isBrowser) return;

    let portal;
    const existingPortal = document.getElementById(TOAST_PORTAL_ID);
    if (existingPortal) {
      portal = existingPortal;
    } else {
      const div = document.createElement('div');
      div.id = TOAST_PORTAL_ID;
      document.body.appendChild(div);
      portal = div;
      div.style.position = 'absolute';
      div.style.left = 0;
      div.style.right = 0;
      div.style.top = 0;
    }

    render(
      <ThemeProvider>
        <Manager bind={this.bindApi} />
      </ThemeProvider>,
      portal
    );
  }

  // Bind internal methods, act as a singleton instance
  bindApi = toastMethods => {
    this.notify = toastMethods.notify;
    this.close = toastMethods.close;
    this.closeAll = toastMethods.closeAll;
    this.update = toastMethods.update;
  };

  // Main api
  warn = (message, options) => {
    this.notify(message, {
      intent: Intent.WARNING,
      icon: 'info',
      ...options
    });
  };

  success = (message, options) => {
    this.notify(message, {
      intent: Intent.SUCCESS,
      icon: 'check-circle',
      ...options
    });
  };

  error = (message, options) => {
    this.notify(message, {
      intent: Intent.DANGER,
      icon: 'alert-triangle',
      ...options
    });
  };

  info = (message, options) => {
    this.notify(message, {
      intent: Intent.INFO,
      icon: 'help-circle',
      ...options
    });
  };

  primary = (message, options) => {
    this.notify(message, {
      intent: Intent.PRIMARY,
      ...options
    });
  };

  secondary = (message, options) => {
    this.notify(message, {
      intent: Intent.SECONDARY,
      ...options
    });
  };

  close = id => {
    this.closeToast(id);
  };
}

export const toast = new ToastApi();
