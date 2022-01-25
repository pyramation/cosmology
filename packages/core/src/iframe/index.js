import React, { Fragment, useRef, useState, forwardRef } from 'react';
import { useForkRef } from '@webql/hooks';

import Portal from '../portal';
import Box from '../box';
import { IframeContext } from './context';

export * from './context';

const Iframe = forwardRef(function Iframe({ children, head, ...props }, ref) {
  const [isMounted, setIsMounted] = useState(false);
  const iframeRef = useRef(null);
  const handleRef = useForkRef(ref, iframeRef);

  const doc = iframeRef.current ? iframeRef.current.contentDocument : null;
  const win = doc ? doc.defaultView || doc.parentView : null;

  return (
    <Box
      as="iframe"
      {...props}
      onLoad={event => {
        setIsMounted(true);
        if (typeof props.onLoad === 'function') {
          props.onLoad(event);
        }
      }}
      ref={handleRef}
      srcDoc={props.src ? undefined : props.srcDoc}
    >
      {isMounted && doc !== null ? (
        <Fragment>
          <Portal container={doc.head}>
            <IframeContext.Provider value={{ document: doc, window: win }}>
              {head}
            </IframeContext.Provider>
          </Portal>
          <Portal container={doc.body.children[0]}>
            <IframeContext.Provider value={{ document: doc, window: win }}>
              {children}
            </IframeContext.Provider>
          </Portal>
        </Fragment>
      ) : null}
    </Box>
  );
});

Iframe.defaultProps = {
  children: null,
  head: null,
  onLoad: () => undefined,
  srcDoc:
    '<!DOCTYPE html><html><head></head><body><div id="root"></div></body></html>',
  src: undefined
};

Iframe.Context = IframeContext;

export default Iframe;
