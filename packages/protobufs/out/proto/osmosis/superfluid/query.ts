/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../osmosis/superfluid/params";
import {
  SuperfluidAssetType,
  OsmoEquivalentMultiplierRecord,
  SuperfluidAsset,
  SuperfluidDelegationRecord,
  superfluidAssetTypeFromJSON,
  superfluidAssetTypeToJSON,
} from "../../osmosis/superfluid/superfluid";
import {
  PageRequest,
  PageResponse,
} from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock } from "../../osmosis/lockup/lock";

export const protobufPackage = "osmosis.superfluid";

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

export interface AssetTypeRequest {
  denom: string;
}

export interface AssetTypeResponse {
  assetType: SuperfluidAssetType;
}

export interface AllAssetsRequest {}

export interface AllAssetsResponse {
  assets: SuperfluidAsset[];
}

export interface AssetMultiplierRequest {
  denom: string;
}

export interface AssetMultiplierResponse {
  osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord;
}

export interface SuperfluidIntermediaryAccountInfo {
  denom: string;
  valAddr: string;
  gaugeId: Long;
  address: string;
}

export interface AllIntermediaryAccountsRequest {
  pagination?: PageRequest;
}

export interface AllIntermediaryAccountsResponse {
  accounts: SuperfluidIntermediaryAccountInfo[];
  pagination?: PageResponse;
}

export interface ConnectedIntermediaryAccountRequest {
  lockId: Long;
}

export interface ConnectedIntermediaryAccountResponse {
  account?: SuperfluidIntermediaryAccountInfo;
}

export interface TotalSuperfluidDelegationsRequest {}

export interface TotalSuperfluidDelegationsResponse {
  totalDelegations: string;
}

export interface SuperfluidDelegationAmountRequest {
  delegatorAddress: string;
  validatorAddress: string;
  denom: string;
}

export interface SuperfluidDelegationAmountResponse {
  amount: Coin[];
}

export interface SuperfluidDelegationsByDelegatorRequest {
  delegatorAddress: string;
}

export interface SuperfluidDelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalDelegatedCoins: Coin[];
}

export interface SuperfluidUndelegationsByDelegatorRequest {
  delegatorAddress: string;
  denom: string;
}

export interface SuperfluidUndelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalUndelegatedCoins: Coin[];
  syntheticLocks: SyntheticLock[];
}

export interface SuperfluidDelegationsByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}

export interface SuperfluidDelegationsByValidatorDenomResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
}

export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}

export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  totalDelegatedCoins: Coin[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseAssetTypeRequest(): AssetTypeRequest {
  return { denom: "" };
}

export const AssetTypeRequest = {
  encode(
    message: AssetTypeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetTypeRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: AssetTypeRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetTypeRequest>, I>>(
    object: I
  ): AssetTypeRequest {
    const message = createBaseAssetTypeRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseAssetTypeResponse(): AssetTypeResponse {
  return { assetType: 0 };
}

export const AssetTypeResponse = {
  encode(
    message: AssetTypeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetType !== 0) {
      writer.uint32(8).int32(message.assetType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetTypeResponse {
    return {
      assetType: isSet(object.assetType)
        ? superfluidAssetTypeFromJSON(object.assetType)
        : 0,
    };
  },

  toJSON(message: AssetTypeResponse): unknown {
    const obj: any = {};
    message.assetType !== undefined &&
      (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetTypeResponse>, I>>(
    object: I
  ): AssetTypeResponse {
    const message = createBaseAssetTypeResponse();
    message.assetType = object.assetType ?? 0;
    return message;
  },
};

function createBaseAllAssetsRequest(): AllAssetsRequest {
  return {};
}

export const AllAssetsRequest = {
  encode(
    _: AllAssetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsRequest();
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

  fromJSON(_: any): AllAssetsRequest {
    return {};
  },

  toJSON(_: AllAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllAssetsRequest>, I>>(
    _: I
  ): AllAssetsRequest {
    const message = createBaseAllAssetsRequest();
    return message;
  },
};

function createBaseAllAssetsResponse(): AllAssetsResponse {
  return { assets: [] };
}

export const AllAssetsResponse = {
  encode(
    message: AllAssetsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assets) {
      SuperfluidAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllAssetsResponse {
    return {
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => SuperfluidAsset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AllAssetsResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) =>
        e ? SuperfluidAsset.toJSON(e) : undefined
      );
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllAssetsResponse>, I>>(
    object: I
  ): AllAssetsResponse {
    const message = createBaseAllAssetsResponse();
    message.assets =
      object.assets?.map((e) => SuperfluidAsset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAssetMultiplierRequest(): AssetMultiplierRequest {
  return { denom: "" };
}

export const AssetMultiplierRequest = {
  encode(
    message: AssetMultiplierRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssetMultiplierRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetMultiplierRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: AssetMultiplierRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetMultiplierRequest>, I>>(
    object: I
  ): AssetMultiplierRequest {
    const message = createBaseAssetMultiplierRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseAssetMultiplierResponse(): AssetMultiplierResponse {
  return { osmoEquivalentMultiplier: undefined };
}

export const AssetMultiplierResponse = {
  encode(
    message: AssetMultiplierResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.osmoEquivalentMultiplier !== undefined) {
      OsmoEquivalentMultiplierRecord.encode(
        message.osmoEquivalentMultiplier,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssetMultiplierResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.osmoEquivalentMultiplier =
            OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetMultiplierResponse {
    return {
      osmoEquivalentMultiplier: isSet(object.osmoEquivalentMultiplier)
        ? OsmoEquivalentMultiplierRecord.fromJSON(
            object.osmoEquivalentMultiplier
          )
        : undefined,
    };
  },

  toJSON(message: AssetMultiplierResponse): unknown {
    const obj: any = {};
    message.osmoEquivalentMultiplier !== undefined &&
      (obj.osmoEquivalentMultiplier = message.osmoEquivalentMultiplier
        ? OsmoEquivalentMultiplierRecord.toJSON(
            message.osmoEquivalentMultiplier
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetMultiplierResponse>, I>>(
    object: I
  ): AssetMultiplierResponse {
    const message = createBaseAssetMultiplierResponse();
    message.osmoEquivalentMultiplier =
      object.osmoEquivalentMultiplier !== undefined &&
      object.osmoEquivalentMultiplier !== null
        ? OsmoEquivalentMultiplierRecord.fromPartial(
            object.osmoEquivalentMultiplier
          )
        : undefined;
    return message;
  },
};

function createBaseSuperfluidIntermediaryAccountInfo(): SuperfluidIntermediaryAccountInfo {
  return { denom: "", valAddr: "", gaugeId: Long.UZERO, address: "" };
}

export const SuperfluidIntermediaryAccountInfo = {
  encode(
    message: SuperfluidIntermediaryAccountInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }
    if (!message.gaugeId.isZero()) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidIntermediaryAccountInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccountInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.valAddr = reader.string();
          break;
        case 3:
          message.gaugeId = reader.uint64() as Long;
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidIntermediaryAccountInfo {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      gaugeId: isSet(object.gaugeId)
        ? Long.fromString(object.gaugeId)
        : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: SuperfluidIntermediaryAccountInfo): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.gaugeId !== undefined &&
      (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SuperfluidIntermediaryAccountInfo>, I>
  >(object: I): SuperfluidIntermediaryAccountInfo {
    const message = createBaseSuperfluidIntermediaryAccountInfo();
    message.denom = object.denom ?? "";
    message.valAddr = object.valAddr ?? "";
    message.gaugeId =
      object.gaugeId !== undefined && object.gaugeId !== null
        ? Long.fromValue(object.gaugeId)
        : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseAllIntermediaryAccountsRequest(): AllIntermediaryAccountsRequest {
  return { pagination: undefined };
}

export const AllIntermediaryAccountsRequest = {
  encode(
    message: AllIntermediaryAccountsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AllIntermediaryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllIntermediaryAccountsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: AllIntermediaryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllIntermediaryAccountsRequest>, I>>(
    object: I
  ): AllIntermediaryAccountsRequest {
    const message = createBaseAllIntermediaryAccountsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseAllIntermediaryAccountsResponse(): AllIntermediaryAccountsResponse {
  return { accounts: [], pagination: undefined };
}

export const AllIntermediaryAccountsResponse = {
  encode(
    message: AllIntermediaryAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      SuperfluidIntermediaryAccountInfo.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AllIntermediaryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(
            SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): AllIntermediaryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) =>
            SuperfluidIntermediaryAccountInfo.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: AllIntermediaryAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? SuperfluidIntermediaryAccountInfo.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllIntermediaryAccountsResponse>, I>>(
    object: I
  ): AllIntermediaryAccountsResponse {
    const message = createBaseAllIntermediaryAccountsResponse();
    message.accounts =
      object.accounts?.map((e) =>
        SuperfluidIntermediaryAccountInfo.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseConnectedIntermediaryAccountRequest(): ConnectedIntermediaryAccountRequest {
  return { lockId: Long.UZERO };
}

export const ConnectedIntermediaryAccountRequest = {
  encode(
    message: ConnectedIntermediaryAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectedIntermediaryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConnectedIntermediaryAccountRequest {
    return {
      lockId: isSet(object.lockId)
        ? Long.fromString(object.lockId)
        : Long.UZERO,
    };
  },

  toJSON(message: ConnectedIntermediaryAccountRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ConnectedIntermediaryAccountRequest>, I>
  >(object: I): ConnectedIntermediaryAccountRequest {
    const message = createBaseConnectedIntermediaryAccountRequest();
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO;
    return message;
  },
};

function createBaseConnectedIntermediaryAccountResponse(): ConnectedIntermediaryAccountResponse {
  return { account: undefined };
}

export const ConnectedIntermediaryAccountResponse = {
  encode(
    message: ConnectedIntermediaryAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== undefined) {
      SuperfluidIntermediaryAccountInfo.encode(
        message.account,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectedIntermediaryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = SuperfluidIntermediaryAccountInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConnectedIntermediaryAccountResponse {
    return {
      account: isSet(object.account)
        ? SuperfluidIntermediaryAccountInfo.fromJSON(object.account)
        : undefined,
    };
  },

  toJSON(message: ConnectedIntermediaryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account
        ? SuperfluidIntermediaryAccountInfo.toJSON(message.account)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ConnectedIntermediaryAccountResponse>, I>
  >(object: I): ConnectedIntermediaryAccountResponse {
    const message = createBaseConnectedIntermediaryAccountResponse();
    message.account =
      object.account !== undefined && object.account !== null
        ? SuperfluidIntermediaryAccountInfo.fromPartial(object.account)
        : undefined;
    return message;
  },
};

function createBaseTotalSuperfluidDelegationsRequest(): TotalSuperfluidDelegationsRequest {
  return {};
}

export const TotalSuperfluidDelegationsRequest = {
  encode(
    _: TotalSuperfluidDelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TotalSuperfluidDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsRequest();
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

  fromJSON(_: any): TotalSuperfluidDelegationsRequest {
    return {};
  },

  toJSON(_: TotalSuperfluidDelegationsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<TotalSuperfluidDelegationsRequest>, I>
  >(_: I): TotalSuperfluidDelegationsRequest {
    const message = createBaseTotalSuperfluidDelegationsRequest();
    return message;
  },
};

function createBaseTotalSuperfluidDelegationsResponse(): TotalSuperfluidDelegationsResponse {
  return { totalDelegations: "" };
}

export const TotalSuperfluidDelegationsResponse = {
  encode(
    message: TotalSuperfluidDelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalDelegations !== "") {
      writer.uint32(10).string(message.totalDelegations);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TotalSuperfluidDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDelegations = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalSuperfluidDelegationsResponse {
    return {
      totalDelegations: isSet(object.totalDelegations)
        ? String(object.totalDelegations)
        : "",
    };
  },

  toJSON(message: TotalSuperfluidDelegationsResponse): unknown {
    const obj: any = {};
    message.totalDelegations !== undefined &&
      (obj.totalDelegations = message.totalDelegations);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<TotalSuperfluidDelegationsResponse>, I>
  >(object: I): TotalSuperfluidDelegationsResponse {
    const message = createBaseTotalSuperfluidDelegationsResponse();
    message.totalDelegations = object.totalDelegations ?? "";
    return message;
  },
};

function createBaseSuperfluidDelegationAmountRequest(): SuperfluidDelegationAmountRequest {
  return { delegatorAddress: "", validatorAddress: "", denom: "" };
}

export const SuperfluidDelegationAmountRequest = {
  encode(
    message: SuperfluidDelegationAmountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidDelegationAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidDelegationAmountRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: SuperfluidDelegationAmountRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SuperfluidDelegationAmountRequest>, I>
  >(object: I): SuperfluidDelegationAmountRequest {
    const message = createBaseSuperfluidDelegationAmountRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseSuperfluidDelegationAmountResponse(): SuperfluidDelegationAmountResponse {
  return { amount: [] };
}

export const SuperfluidDelegationAmountResponse = {
  encode(
    message: SuperfluidDelegationAmountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidDelegationAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidDelegationAmountResponse {
    return {
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SuperfluidDelegationAmountResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SuperfluidDelegationAmountResponse>, I>
  >(object: I): SuperfluidDelegationAmountResponse {
    const message = createBaseSuperfluidDelegationAmountResponse();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSuperfluidDelegationsByDelegatorRequest(): SuperfluidDelegationsByDelegatorRequest {
  return { delegatorAddress: "" };
}

export const SuperfluidDelegationsByDelegatorRequest = {
  encode(
    message: SuperfluidDelegationsByDelegatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidDelegationsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
    };
  },

  toJSON(message: SuperfluidDelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SuperfluidDelegationsByDelegatorRequest>, I>
  >(object: I): SuperfluidDelegationsByDelegatorRequest {
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseSuperfluidDelegationsByDelegatorResponse(): SuperfluidDelegationsByDelegatorResponse {
  return { superfluidDelegationRecords: [], totalDelegatedCoins: [] };
}

export const SuperfluidDelegationsByDelegatorResponse = {
  encode(
    message: SuperfluidDelegationsByDelegatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidDelegationsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(
            SuperfluidDelegationRecord.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalDelegatedCoins.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(
        object?.superfluidDelegationRecords
      )
        ? object.superfluidDelegationRecords.map((e: any) =>
            SuperfluidDelegationRecord.fromJSON(e)
          )
        : [],
      totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins)
        ? object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SuperfluidDelegationsByDelegatorResponse): unknown {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(
        (e) => (e ? SuperfluidDelegationRecord.toJSON(e) : undefined)
      );
    } else {
      obj.superfluidDelegationRecords = [];
    }
    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.totalDelegatedCoins = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SuperfluidDelegationsByDelegatorResponse>, I>
  >(object: I): SuperfluidDelegationsByDelegatorResponse {
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    message.superfluidDelegationRecords =
      object.superfluidDelegationRecords?.map((e) =>
        SuperfluidDelegationRecord.fromPartial(e)
      ) || [];
    message.totalDelegatedCoins =
      object.totalDelegatedCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSuperfluidUndelegationsByDelegatorRequest(): SuperfluidUndelegationsByDelegatorRequest {
  return { delegatorAddress: "", denom: "" };
}

export const SuperfluidUndelegationsByDelegatorRequest = {
  encode(
    message: SuperfluidUndelegationsByDelegatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidUndelegationsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: SuperfluidUndelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SuperfluidUndelegationsByDelegatorRequest>, I>
  >(object: I): SuperfluidUndelegationsByDelegatorRequest {
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseSuperfluidUndelegationsByDelegatorResponse(): SuperfluidUndelegationsByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    totalUndelegatedCoins: [],
    syntheticLocks: [],
  };
}

export const SuperfluidUndelegationsByDelegatorResponse = {
  encode(
    message: SuperfluidUndelegationsByDelegatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalUndelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidUndelegationsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(
            SuperfluidDelegationRecord.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalUndelegatedCoins.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.syntheticLocks.push(
            SyntheticLock.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(
        object?.superfluidDelegationRecords
      )
        ? object.superfluidDelegationRecords.map((e: any) =>
            SuperfluidDelegationRecord.fromJSON(e)
          )
        : [],
      totalUndelegatedCoins: Array.isArray(object?.totalUndelegatedCoins)
        ? object.totalUndelegatedCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      syntheticLocks: Array.isArray(object?.syntheticLocks)
        ? object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SuperfluidUndelegationsByDelegatorResponse): unknown {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(
        (e) => (e ? SuperfluidDelegationRecord.toJSON(e) : undefined)
      );
    } else {
      obj.superfluidDelegationRecords = [];
    }
    if (message.totalUndelegatedCoins) {
      obj.totalUndelegatedCoins = message.totalUndelegatedCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.totalUndelegatedCoins = [];
    }
    if (message.syntheticLocks) {
      obj.syntheticLocks = message.syntheticLocks.map((e) =>
        e ? SyntheticLock.toJSON(e) : undefined
      );
    } else {
      obj.syntheticLocks = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SuperfluidUndelegationsByDelegatorResponse>, I>
  >(object: I): SuperfluidUndelegationsByDelegatorResponse {
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    message.superfluidDelegationRecords =
      object.superfluidDelegationRecords?.map((e) =>
        SuperfluidDelegationRecord.fromPartial(e)
      ) || [];
    message.totalUndelegatedCoins =
      object.totalUndelegatedCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.syntheticLocks =
      object.syntheticLocks?.map((e) => SyntheticLock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSuperfluidDelegationsByValidatorDenomRequest(): SuperfluidDelegationsByValidatorDenomRequest {
  return { validatorAddress: "", denom: "" };
}

export const SuperfluidDelegationsByValidatorDenomRequest = {
  encode(
    message: SuperfluidDelegationsByValidatorDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidDelegationsByValidatorDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: SuperfluidDelegationsByValidatorDenomRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<SuperfluidDelegationsByValidatorDenomRequest>,
      I
    >
  >(object: I): SuperfluidDelegationsByValidatorDenomRequest {
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseSuperfluidDelegationsByValidatorDenomResponse(): SuperfluidDelegationsByValidatorDenomResponse {
  return { superfluidDelegationRecords: [] };
}

export const SuperfluidDelegationsByValidatorDenomResponse = {
  encode(
    message: SuperfluidDelegationsByValidatorDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuperfluidDelegationsByValidatorDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(
            SuperfluidDelegationRecord.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse {
    return {
      superfluidDelegationRecords: Array.isArray(
        object?.superfluidDelegationRecords
      )
        ? object.superfluidDelegationRecords.map((e: any) =>
            SuperfluidDelegationRecord.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: SuperfluidDelegationsByValidatorDenomResponse): unknown {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(
        (e) => (e ? SuperfluidDelegationRecord.toJSON(e) : undefined)
      );
    } else {
      obj.superfluidDelegationRecords = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<SuperfluidDelegationsByValidatorDenomResponse>,
      I
    >
  >(object: I): SuperfluidDelegationsByValidatorDenomResponse {
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    message.superfluidDelegationRecords =
      object.superfluidDelegationRecords?.map((e) =>
        SuperfluidDelegationRecord.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest(): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  return { validatorAddress: "", denom: "" };
}

export const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
  encode(
    message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(
    message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
  ): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>,
      I
    >
  >(object: I): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const message =
      createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse(): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  return { totalDelegatedCoins: [] };
}

export const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
  encode(
    message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDelegatedCoins.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return {
      totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins)
        ? object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(
    message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse
  ): unknown {
    const obj: any = {};
    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.totalDelegatedCoins = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>,
      I
    >
  >(object: I): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const message =
      createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    message.totalDelegatedCoins =
      object.totalDelegatedCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Returns superfluid asset type */
  AssetType(request: AssetTypeRequest): Promise<AssetTypeResponse>;
  /** Returns all superfluid asset types */
  AllAssets(request: AllAssetsRequest): Promise<AllAssetsResponse>;
  /** Returns superfluid asset Multiplier */
  AssetMultiplier(
    request: AssetMultiplierRequest
  ): Promise<AssetMultiplierResponse>;
  /** Returns all superfluid intermediary account */
  AllIntermediaryAccounts(
    request: AllIntermediaryAccountsRequest
  ): Promise<AllIntermediaryAccountsResponse>;
  /** Returns intermediary account connected to a superfluid staked lock by id */
  ConnectedIntermediaryAccount(
    request: ConnectedIntermediaryAccountRequest
  ): Promise<ConnectedIntermediaryAccountResponse>;
  /**
   * Returns the total amount of osmo superfluidly staked
   * response denominated in uosmo
   */
  TotalSuperfluidDelegations(
    request: TotalSuperfluidDelegationsRequest
  ): Promise<TotalSuperfluidDelegationsResponse>;
  /**
   * Returns the coins superfluid delegated for a delegator, validator, denom
   * triplet
   */
  SuperfluidDelegationAmount(
    request: SuperfluidDelegationAmountRequest
  ): Promise<SuperfluidDelegationAmountResponse>;
  /** Returns all the superfluid poistions for a specific delegator */
  SuperfluidDelegationsByDelegator(
    request: SuperfluidDelegationsByDelegatorRequest
  ): Promise<SuperfluidDelegationsByDelegatorResponse>;
  SuperfluidUndelegationsByDelegator(
    request: SuperfluidUndelegationsByDelegatorRequest
  ): Promise<SuperfluidUndelegationsByDelegatorResponse>;
  /**
   * Returns all the superfluid positions of a specific denom delegated to one
   * validator
   */
  SuperfluidDelegationsByValidatorDenom(
    request: SuperfluidDelegationsByValidatorDenomRequest
  ): Promise<SuperfluidDelegationsByValidatorDenomResponse>;
  /**
   * Returns the amount of a specific denom delegated to a specific validator
   * This is labeled an estimate, because the way it calculates the amount can
   * lead rounding errors from the true delegated amount
   */
  EstimateSuperfluidDelegatedAmountByValidatorDenom(
    request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
  ): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.AssetType = this.AssetType.bind(this);
    this.AllAssets = this.AllAssets.bind(this);
    this.AssetMultiplier = this.AssetMultiplier.bind(this);
    this.AllIntermediaryAccounts = this.AllIntermediaryAccounts.bind(this);
    this.ConnectedIntermediaryAccount =
      this.ConnectedIntermediaryAccount.bind(this);
    this.TotalSuperfluidDelegations =
      this.TotalSuperfluidDelegations.bind(this);
    this.SuperfluidDelegationAmount =
      this.SuperfluidDelegationAmount.bind(this);
    this.SuperfluidDelegationsByDelegator =
      this.SuperfluidDelegationsByDelegator.bind(this);
    this.SuperfluidUndelegationsByDelegator =
      this.SuperfluidUndelegationsByDelegator.bind(this);
    this.SuperfluidDelegationsByValidatorDenom =
      this.SuperfluidDelegationsByValidatorDenom.bind(this);
    this.EstimateSuperfluidDelegatedAmountByValidatorDenom =
      this.EstimateSuperfluidDelegatedAmountByValidatorDenom.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  AssetType(request: AssetTypeRequest): Promise<AssetTypeResponse> {
    const data = AssetTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "AssetType",
      data
    );
    return promise.then((data) =>
      AssetTypeResponse.decode(new _m0.Reader(data))
    );
  }

  AllAssets(request: AllAssetsRequest): Promise<AllAssetsResponse> {
    const data = AllAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "AllAssets",
      data
    );
    return promise.then((data) =>
      AllAssetsResponse.decode(new _m0.Reader(data))
    );
  }

  AssetMultiplier(
    request: AssetMultiplierRequest
  ): Promise<AssetMultiplierResponse> {
    const data = AssetMultiplierRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "AssetMultiplier",
      data
    );
    return promise.then((data) =>
      AssetMultiplierResponse.decode(new _m0.Reader(data))
    );
  }

  AllIntermediaryAccounts(
    request: AllIntermediaryAccountsRequest
  ): Promise<AllIntermediaryAccountsResponse> {
    const data = AllIntermediaryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "AllIntermediaryAccounts",
      data
    );
    return promise.then((data) =>
      AllIntermediaryAccountsResponse.decode(new _m0.Reader(data))
    );
  }

  ConnectedIntermediaryAccount(
    request: ConnectedIntermediaryAccountRequest
  ): Promise<ConnectedIntermediaryAccountResponse> {
    const data = ConnectedIntermediaryAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "ConnectedIntermediaryAccount",
      data
    );
    return promise.then((data) =>
      ConnectedIntermediaryAccountResponse.decode(new _m0.Reader(data))
    );
  }

  TotalSuperfluidDelegations(
    request: TotalSuperfluidDelegationsRequest
  ): Promise<TotalSuperfluidDelegationsResponse> {
    const data = TotalSuperfluidDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "TotalSuperfluidDelegations",
      data
    );
    return promise.then((data) =>
      TotalSuperfluidDelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  SuperfluidDelegationAmount(
    request: SuperfluidDelegationAmountRequest
  ): Promise<SuperfluidDelegationAmountResponse> {
    const data = SuperfluidDelegationAmountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "SuperfluidDelegationAmount",
      data
    );
    return promise.then((data) =>
      SuperfluidDelegationAmountResponse.decode(new _m0.Reader(data))
    );
  }

  SuperfluidDelegationsByDelegator(
    request: SuperfluidDelegationsByDelegatorRequest
  ): Promise<SuperfluidDelegationsByDelegatorResponse> {
    const data =
      SuperfluidDelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "SuperfluidDelegationsByDelegator",
      data
    );
    return promise.then((data) =>
      SuperfluidDelegationsByDelegatorResponse.decode(new _m0.Reader(data))
    );
  }

  SuperfluidUndelegationsByDelegator(
    request: SuperfluidUndelegationsByDelegatorRequest
  ): Promise<SuperfluidUndelegationsByDelegatorResponse> {
    const data =
      SuperfluidUndelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "SuperfluidUndelegationsByDelegator",
      data
    );
    return promise.then((data) =>
      SuperfluidUndelegationsByDelegatorResponse.decode(new _m0.Reader(data))
    );
  }

  SuperfluidDelegationsByValidatorDenom(
    request: SuperfluidDelegationsByValidatorDenomRequest
  ): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
    const data =
      SuperfluidDelegationsByValidatorDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "SuperfluidDelegationsByValidatorDenom",
      data
    );
    return promise.then((data) =>
      SuperfluidDelegationsByValidatorDenomResponse.decode(new _m0.Reader(data))
    );
  }

  EstimateSuperfluidDelegatedAmountByValidatorDenom(
    request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
  ): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    const data =
      EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(
        request
      ).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "EstimateSuperfluidDelegatedAmountByValidatorDenom",
      data
    );
    return promise.then((data) =>
      EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(
        new _m0.Reader(data)
      )
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
