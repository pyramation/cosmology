/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import {
  SwapAmountInRoute,
  SwapAmountOutRoute,
} from "../../../osmosis/gamm/v1beta1/tx";

export const protobufPackage = "osmosis.gamm.v1beta1";

/** =============================== Pool */
export interface QueryPoolRequest {
  poolId: Long;
}

export interface QueryPoolResponse {
  pool?: Any;
}

/** =============================== Pools */
export interface QueryPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

export interface QueryPoolsResponse {
  pools: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** =============================== NumPools */
export interface QueryNumPoolsRequest {}

export interface QueryNumPoolsResponse {
  numPools: Long;
}

/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
  poolId: Long;
}

export interface QueryPoolParamsResponse {
  params?: Any;
}

/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequest {
  poolId: Long;
}

export interface QueryTotalPoolLiquidityResponse {
  liquidity: Coin[];
}

/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
  poolId: Long;
}

export interface QueryTotalSharesResponse {
  totalShares?: Coin;
}

/** =============================== SpotPrice */
export interface QuerySpotPriceRequest {
  poolId: Long;
  tokenInDenom: string;
  tokenOutDenom: string;
}

export interface QuerySpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spotPrice: string;
}

/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequest {
  sender: string;
  poolId: Long;
  tokenIn: string;
  routes: SwapAmountInRoute[];
}

export interface QuerySwapExactAmountInResponse {
  tokenOutAmount: string;
}

/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequest {
  sender: string;
  poolId: Long;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}

export interface QuerySwapExactAmountOutResponse {
  tokenInAmount: string;
}

export interface QueryTotalLiquidityRequest {}

export interface QueryTotalLiquidityResponse {
  liquidity: Coin[];
}

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return { poolId: Long.UZERO };
}

export const QueryPoolRequest = {
  encode(
    message: QueryPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolRequest {
    return {
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(
    object: I
  ): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { pool: undefined };
}

export const QueryPoolResponse = {
  encode(
    message: QueryPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? Any.fromJSON(object.pool) : undefined,
    };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? Any.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(
    object: I
  ): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Any.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return { pagination: undefined };
}

export const QueryPoolsRequest = {
  encode(
    message: QueryPoolsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsRequest>, I>>(
    object: I
  ): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return { pools: [], pagination: undefined };
}

export const QueryPoolsResponse = {
  encode(
    message: QueryPoolsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools)
        ? object.pools.map((e: any) => Any.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsResponse>, I>>(
    object: I
  ): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map((e) => Any.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryNumPoolsRequest(): QueryNumPoolsRequest {
  return {};
}

export const QueryNumPoolsRequest = {
  encode(
    _: QueryNumPoolsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNumPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryNumPoolsRequest {
    return {};
  },

  toJSON(_: QueryNumPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNumPoolsRequest>, I>>(
    _: I
  ): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest();
    return message;
  },
};

function createBaseQueryNumPoolsResponse(): QueryNumPoolsResponse {
  return { numPools: Long.UZERO };
}

export const QueryNumPoolsResponse = {
  encode(
    message: QueryNumPoolsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.numPools.isZero()) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNumPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numPools = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNumPoolsResponse {
    return {
      numPools: isSet(object.numPools)
        ? Long.fromString(object.numPools)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryNumPoolsResponse): unknown {
    const obj: any = {};
    message.numPools !== undefined &&
      (obj.numPools = (message.numPools || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNumPoolsResponse>, I>>(
    object: I
  ): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse();
    message.numPools =
      object.numPools !== undefined && object.numPools !== null
        ? Long.fromValue(object.numPools)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolParamsRequest(): QueryPoolParamsRequest {
  return { poolId: Long.UZERO };
}

export const QueryPoolParamsRequest = {
  encode(
    message: QueryPoolParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolParamsRequest {
    return {
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolParamsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolParamsRequest>, I>>(
    object: I
  ): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolParamsResponse(): QueryPoolParamsResponse {
  return { params: undefined };
}

export const QueryPoolParamsResponse = {
  encode(
    message: QueryPoolParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Any.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolParamsResponse {
    return {
      params: isSet(object.params) ? Any.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryPoolParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Any.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolParamsResponse>, I>>(
    object: I
  ): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Any.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryTotalPoolLiquidityRequest(): QueryTotalPoolLiquidityRequest {
  return { poolId: Long.UZERO };
}

export const QueryTotalPoolLiquidityRequest = {
  encode(
    message: QueryTotalPoolLiquidityRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalPoolLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalPoolLiquidityRequest {
    return {
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryTotalPoolLiquidityRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalPoolLiquidityRequest>, I>>(
    object: I
  ): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryTotalPoolLiquidityResponse(): QueryTotalPoolLiquidityResponse {
  return { liquidity: [] };
}

export const QueryTotalPoolLiquidityResponse = {
  encode(
    message: QueryTotalPoolLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalPoolLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalPoolLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity)
        ? object.liquidity.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryTotalPoolLiquidityResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.liquidity = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalPoolLiquidityResponse>, I>>(
    object: I
  ): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTotalSharesRequest(): QueryTotalSharesRequest {
  return { poolId: Long.UZERO };
}

export const QueryTotalSharesRequest = {
  encode(
    message: QueryTotalSharesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalSharesRequest {
    return {
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryTotalSharesRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalSharesRequest>, I>>(
    object: I
  ): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryTotalSharesResponse(): QueryTotalSharesResponse {
  return { totalShares: undefined };
}

export const QueryTotalSharesResponse = {
  encode(
    message: QueryTotalSharesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalSharesResponse {
    return {
      totalShares: isSet(object.totalShares)
        ? Coin.fromJSON(object.totalShares)
        : undefined,
    };
  },

  toJSON(message: QueryTotalSharesResponse): unknown {
    const obj: any = {};
    message.totalShares !== undefined &&
      (obj.totalShares = message.totalShares
        ? Coin.toJSON(message.totalShares)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalSharesResponse>, I>>(
    object: I
  ): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse();
    message.totalShares =
      object.totalShares !== undefined && object.totalShares !== null
        ? Coin.fromPartial(object.totalShares)
        : undefined;
    return message;
  },
};

function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return { poolId: Long.UZERO, tokenInDenom: "", tokenOutDenom: "" };
}

export const QuerySpotPriceRequest = {
  encode(
    message: QuerySpotPriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySpotPriceRequest {
    return {
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
      tokenInDenom: isSet(object.tokenInDenom)
        ? String(object.tokenInDenom)
        : "",
      tokenOutDenom: isSet(object.tokenOutDenom)
        ? String(object.tokenOutDenom)
        : "",
    };
  },

  toJSON(message: QuerySpotPriceRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenInDenom !== undefined &&
      (obj.tokenInDenom = message.tokenInDenom);
    message.tokenOutDenom !== undefined &&
      (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySpotPriceRequest>, I>>(
    object: I
  ): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
};

function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return { spotPrice: "" };
}

export const QuerySpotPriceResponse = {
  encode(
    message: QuerySpotPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySpotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySpotPriceResponse {
    return {
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : "",
    };
  },

  toJSON(message: QuerySpotPriceResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySpotPriceResponse>, I>>(
    object: I
  ): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
};

function createBaseQuerySwapExactAmountInRequest(): QuerySwapExactAmountInRequest {
  return { sender: "", poolId: Long.UZERO, tokenIn: "", routes: [] };
}

export const QuerySwapExactAmountInRequest = {
  encode(
    message: QuerySwapExactAmountInRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySwapExactAmountInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.routes.push(
            SwapAmountInRoute.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapExactAmountInRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      routes: Array.isArray(object?.routes)
        ? object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QuerySwapExactAmountInRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    if (message.routes) {
      obj.routes = message.routes.map((e) =>
        e ? SwapAmountInRoute.toJSON(e) : undefined
      );
    } else {
      obj.routes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountInRequest>, I>>(
    object: I
  ): QuerySwapExactAmountInRequest {
    const message = createBaseQuerySwapExactAmountInRequest();
    message.sender = object.sender ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.tokenIn = object.tokenIn ?? "";
    message.routes =
      object.routes?.map((e) => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySwapExactAmountInResponse(): QuerySwapExactAmountInResponse {
  return { tokenOutAmount: "" };
}

export const QuerySwapExactAmountInResponse = {
  encode(
    message: QuerySwapExactAmountInResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySwapExactAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapExactAmountInResponse {
    return {
      tokenOutAmount: isSet(object.tokenOutAmount)
        ? String(object.tokenOutAmount)
        : "",
    };
  },

  toJSON(message: QuerySwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined &&
      (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountInResponse>, I>>(
    object: I
  ): QuerySwapExactAmountInResponse {
    const message = createBaseQuerySwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
};

function createBaseQuerySwapExactAmountOutRequest(): QuerySwapExactAmountOutRequest {
  return { sender: "", poolId: Long.UZERO, routes: [], tokenOut: "" };
}

export const QuerySwapExactAmountOutRequest = {
  encode(
    message: QuerySwapExactAmountOutRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySwapExactAmountOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.routes.push(
            SwapAmountOutRoute.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapExactAmountOutRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
      routes: Array.isArray(object?.routes)
        ? object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e))
        : [],
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
    };
  },

  toJSON(message: QuerySwapExactAmountOutRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.routes) {
      obj.routes = message.routes.map((e) =>
        e ? SwapAmountOutRoute.toJSON(e) : undefined
      );
    } else {
      obj.routes = [];
    }
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountOutRequest>, I>>(
    object: I
  ): QuerySwapExactAmountOutRequest {
    const message = createBaseQuerySwapExactAmountOutRequest();
    message.sender = object.sender ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.routes =
      object.routes?.map((e) => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
};

function createBaseQuerySwapExactAmountOutResponse(): QuerySwapExactAmountOutResponse {
  return { tokenInAmount: "" };
}

export const QuerySwapExactAmountOutResponse = {
  encode(
    message: QuerySwapExactAmountOutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySwapExactAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapExactAmountOutResponse {
    return {
      tokenInAmount: isSet(object.tokenInAmount)
        ? String(object.tokenInAmount)
        : "",
    };
  },

  toJSON(message: QuerySwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined &&
      (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountOutResponse>, I>>(
    object: I
  ): QuerySwapExactAmountOutResponse {
    const message = createBaseQuerySwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
};

function createBaseQueryTotalLiquidityRequest(): QueryTotalLiquidityRequest {
  return {};
}

export const QueryTotalLiquidityRequest = {
  encode(
    _: QueryTotalLiquidityRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryTotalLiquidityRequest {
    return {};
  },

  toJSON(_: QueryTotalLiquidityRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalLiquidityRequest>, I>>(
    _: I
  ): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest();
    return message;
  },
};

function createBaseQueryTotalLiquidityResponse(): QueryTotalLiquidityResponse {
  return { liquidity: [] };
}

export const QueryTotalLiquidityResponse = {
  encode(
    message: QueryTotalLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity)
        ? object.liquidity.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryTotalLiquidityResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.liquidity = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalLiquidityResponse>, I>>(
    object: I
  ): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

export interface Query {
  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  NumPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
  TotalLiquidity(
    request: QueryTotalLiquidityRequest
  ): Promise<QueryTotalLiquidityResponse>;
  /** Per Pool gRPC Endpoints */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  PoolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
  TotalPoolLiquidity(
    request: QueryTotalPoolLiquidityRequest
  ): Promise<QueryTotalPoolLiquidityResponse>;
  TotalShares(
    request: QueryTotalSharesRequest
  ): Promise<QueryTotalSharesResponse>;
  SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
  /** Estimate the swap. */
  EstimateSwapExactAmountIn(
    request: QuerySwapExactAmountInRequest
  ): Promise<QuerySwapExactAmountInResponse>;
  EstimateSwapExactAmountOut(
    request: QuerySwapExactAmountOutRequest
  ): Promise<QuerySwapExactAmountOutResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Pools = this.Pools.bind(this);
    this.NumPools = this.NumPools.bind(this);
    this.TotalLiquidity = this.TotalLiquidity.bind(this);
    this.Pool = this.Pool.bind(this);
    this.PoolParams = this.PoolParams.bind(this);
    this.TotalPoolLiquidity = this.TotalPoolLiquidity.bind(this);
    this.TotalShares = this.TotalShares.bind(this);
    this.SpotPrice = this.SpotPrice.bind(this);
    this.EstimateSwapExactAmountIn = this.EstimateSwapExactAmountIn.bind(this);
    this.EstimateSwapExactAmountOut =
      this.EstimateSwapExactAmountOut.bind(this);
  }
  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.gamm.v1beta1.Query",
      "Pools",
      data
    );
    return promise.then((data) =>
      QueryPoolsResponse.decode(new _m0.Reader(data))
    );
  }

  NumPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse> {
    const data = QueryNumPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.gamm.v1beta1.Query",
      "NumPools",
      data
    );
    return promise.then((data) =>
      QueryNumPoolsResponse.decode(new _m0.Reader(data))
    );
  }

  TotalLiquidity(
    request: QueryTotalLiquidityRequest
  ): Promise<QueryTotalLiquidityResponse> {
    const data = QueryTotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.gamm.v1beta1.Query",
      "TotalLiquidity",
      data
    );
    return promise.then((data) =>
      QueryTotalLiquidityResponse.decode(new _m0.Reader(data))
    );
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.gamm.v1beta1.Query",
      "Pool",
      data
    );
    return promise.then((data) =>
      QueryPoolResponse.decode(new _m0.Reader(data))
    );
  }

  PoolParams(
    request: QueryPoolParamsRequest
  ): Promise<QueryPoolParamsResponse> {
    const data = QueryPoolParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.gamm.v1beta1.Query",
      "PoolParams",
      data
    );
    return promise.then((data) =>
      QueryPoolParamsResponse.decode(new _m0.Reader(data))
    );
  }

  TotalPoolLiquidity(
    request: QueryTotalPoolLiquidityRequest
  ): Promise<QueryTotalPoolLiquidityResponse> {
    const data = QueryTotalPoolLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.gamm.v1beta1.Query",
      "TotalPoolLiquidity",
      data
    );
    return promise.then((data) =>
      QueryTotalPoolLiquidityResponse.decode(new _m0.Reader(data))
    );
  }

  TotalShares(
    request: QueryTotalSharesRequest
  ): Promise<QueryTotalSharesResponse> {
    const data = QueryTotalSharesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.gamm.v1beta1.Query",
      "TotalShares",
      data
    );
    return promise.then((data) =>
      QueryTotalSharesResponse.decode(new _m0.Reader(data))
    );
  }

  SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
    const data = QuerySpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.gamm.v1beta1.Query",
      "SpotPrice",
      data
    );
    return promise.then((data) =>
      QuerySpotPriceResponse.decode(new _m0.Reader(data))
    );
  }

  EstimateSwapExactAmountIn(
    request: QuerySwapExactAmountInRequest
  ): Promise<QuerySwapExactAmountInResponse> {
    const data = QuerySwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.gamm.v1beta1.Query",
      "EstimateSwapExactAmountIn",
      data
    );
    return promise.then((data) =>
      QuerySwapExactAmountInResponse.decode(new _m0.Reader(data))
    );
  }

  EstimateSwapExactAmountOut(
    request: QuerySwapExactAmountOutRequest
  ): Promise<QuerySwapExactAmountOutResponse> {
    const data = QuerySwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.gamm.v1beta1.Query",
      "EstimateSwapExactAmountOut",
      data
    );
    return promise.then((data) =>
      QuerySwapExactAmountOutResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
