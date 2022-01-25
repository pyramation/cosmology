import React, { useMemo, useEffect, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useId } from '@reach/auto-id';

import { DOM } from '../utils';

function getContainer(container) {
  if (typeof container === 'function') return container();
  if (typeof container === 'string') return document.getElementById(container);
  return container;
}

const Portal = React.forwardRef(function Portal(props, forwardedRef) {
  const { onRendered, children, container } = props;
  const portalId = useId();

  const doc = DOM.getOwnerDocument();

  const portalsParent = useMemo(() => getContainer(container) || doc.body, [
    doc,
    container
  ]);

  const portal = useMemo(() => {
    const portal = document.createElement('div');
    portal.id = `portal-${portalId}`;
    portal.style = 'position:relative;';
    return portal;
  }, [portalId]);

  useImperativeHandle(forwardedRef, () => portal, [portal]);

  useEffect(() => {
    if (onRendered && portal) {
      onRendered();
    }
  }, [onRendered, portal]);

  useEffect(() => {
    portalsParent.appendChild(portal);
    return () => {
      portalsParent.removeChild(portal);
    };
  }, [children, portal, portalsParent]);

  return ReactDOM.createPortal(children, portal);
});

export default Portal;

Portal.displayName = 'Portal';

Portal.propTypes = {
  container: PropTypes.any,
  children: PropTypes.node,
  onRendered: PropTypes.func
};

Portal.defaultProps = {
  container: 'portal-container'
};
