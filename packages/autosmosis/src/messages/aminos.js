const parseRoutes = (routes) =>
  routes.map((r) => {
    return {
      poolId: r.poolId,
      tokenOutDenom: r.tokenOutDenom
    };
  });

export const aminos = {
  createPool: {
    toAmino: () => {},
    fromAmino: () => {}
  },
  joinPool: {
    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }) => ({
      sender,
      poolId,
      shareOutAmount,
      tokenInMaxs
    }),
    fromAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }) => ({
      sender,
      poolId,
      shareOutAmount,
      tokenInMaxs
    })
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
    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }) => ({
      sender,
      routes: parseRoutes(routes),
      tokenIn,
      tokenOutMinAmount
    }),
    fromAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }) => ({
      sender,
      routes: parseRoutes(routes),
      tokenIn,
      tokenOutMinAmount
    })
  },
  swapExactAmountOut: {
    toAmino: () => {},
    fromAmino: () => {}
  },
  lockTokens: {
    toAmino: ({ owner, duration, coins }) => ({
      coins,
      duration,
      owner
    }),
    fromAmino: ({ owner, duration, coins }) => ({
      coins,
      duration,
      owner
    })
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
