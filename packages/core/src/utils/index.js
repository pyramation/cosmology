import { Children, isValidElement } from 'react';

import * as _Color from './colors';
import * as _DOM from './dom';
import * as _Input from './input';
import * as _Component from './components';
export * from './tabbable';
export * from './warning';

export const Color = _Color;
export const DOM = _DOM;
export const Input = _Input;
export const Component = _Component;

export const cleanChildren = children => {
  return Children.toArray(children).filter(child => isValidElement(child));
};

export const filterChildrenType = (children, ComponentType) => {
  return Children.toArray(children).filter(
    child => isValidElement(child) && child.type === ComponentType
  );
};

export const makeId = (...args) => {
  return args.filter(val => val != null).join('--');
};

export const wrapEvent = (theirHandler = () => {}, ourHandler = () => {}) => {
  return event => {
    if (typeof theirHandler === 'function') theirHandler(event);
    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
};

export const clamp = (value, min, max) => {
  return Math.max(Math.min(value, max), min);
};
