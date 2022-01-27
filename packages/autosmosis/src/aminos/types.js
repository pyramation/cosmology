export const aminos = {
  createPool: {
    toAmino: () => {},
    fromAmino: () => {}
  },
  joinPool: {
    toAmino: () => {},
    fromAmino: () => {}
  },
  joinSwapExternAmountIn: {
    toAmino: () => {},
    fromAmino: () => {}
  },
  exitPool: {
    toAmino: () => {},
    fromAmino: () => {}
  },
  swapExactAmountIn: {
    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }) => {
      return {
        sender,
        routes: routes.map((r) => {
          return {
            poolId: r.poolId,
            tokenOutDenom: r.tokenOutDenom
          };
        }),
        tokenIn: tokenIn,
        tokenOutMinAmount
      };
    },
    fromAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }) => {
      return {
        sender,
        routes: routes.map((r) => {
          return {
            poolId: r.poolId,
            tokenOutDenom: r.tokenOutDenom
          };
        }),
        tokenIn,
        tokenOutMinAmount
      };
    }
  },
  swapExactAmountOut: {
    toAmino: () => {},
    fromAmino: () => {}
  },
  lockTokens: {
    toAmino: () => {},
    fromAmino: () => {}
  },
  beginUnlocking: {
    toAmino: () => {},
    fromAmino: () => {}
  },
  unlockPeriodLock: {
    toAmino: () => {},
    fromAmino: () => {}
  }
};
