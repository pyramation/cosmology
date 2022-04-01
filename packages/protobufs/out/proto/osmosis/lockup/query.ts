/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { PeriodLock, SyntheticLock } from "../../osmosis/lockup/lock";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "osmosis.lockup";

export interface ModuleBalanceRequest {}

export interface ModuleBalanceResponse {
  coins: Coin[];
}

export interface ModuleLockedAmountRequest {}

export interface ModuleLockedAmountResponse {
  coins: Coin[];
}

export interface AccountUnlockableCoinsRequest {
  owner: string;
}

export interface AccountUnlockableCoinsResponse {
  coins: Coin[];
}

export interface AccountUnlockingCoinsRequest {
  owner: string;
}

export interface AccountUnlockingCoinsResponse {
  coins: Coin[];
}

export interface AccountLockedCoinsRequest {
  owner: string;
}

export interface AccountLockedCoinsResponse {
  coins: Coin[];
}

export interface AccountLockedPastTimeRequest {
  owner: string;
  timestamp?: Date;
}

export interface AccountLockedPastTimeResponse {
  locks: PeriodLock[];
}

export interface AccountLockedPastTimeNotUnlockingOnlyRequest {
  owner: string;
  timestamp?: Date;
}

export interface AccountLockedPastTimeNotUnlockingOnlyResponse {
  locks: PeriodLock[];
}

export interface AccountUnlockedBeforeTimeRequest {
  owner: string;
  timestamp?: Date;
}

export interface AccountUnlockedBeforeTimeResponse {
  locks: PeriodLock[];
}

export interface AccountLockedPastTimeDenomRequest {
  owner: string;
  timestamp?: Date;
  denom: string;
}

export interface AccountLockedPastTimeDenomResponse {
  locks: PeriodLock[];
}

export interface LockedDenomRequest {
  denom: string;
  duration?: Duration;
}

export interface LockedDenomResponse {
  amount: string;
}

export interface LockedRequest {
  lockId: Long;
}

export interface LockedResponse {
  lock?: PeriodLock;
}

export interface SyntheticLockupsByLockupIDRequest {
  lockId: Long;
}

export interface SyntheticLockupsByLockupIDResponse {
  syntheticLocks: SyntheticLock[];
}

export interface AccountLockedLongerDurationRequest {
  owner: string;
  duration?: Duration;
}

export interface AccountLockedLongerDurationResponse {
  locks: PeriodLock[];
}

export interface AccountLockedLongerDurationNotUnlockingOnlyRequest {
  owner: string;
  duration?: Duration;
}

export interface AccountLockedLongerDurationNotUnlockingOnlyResponse {
  locks: PeriodLock[];
}

export interface AccountLockedLongerDurationDenomRequest {
  owner: string;
  duration?: Duration;
  denom: string;
}

export interface AccountLockedLongerDurationDenomResponse {
  locks: PeriodLock[];
}

function createBaseModuleBalanceRequest(): ModuleBalanceRequest {
  return {};
}

export const ModuleBalanceRequest = {
  encode(
    _: ModuleBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModuleBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalanceRequest();
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

  fromJSON(_: any): ModuleBalanceRequest {
    return {};
  },

  toJSON(_: ModuleBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleBalanceRequest>, I>>(
    _: I
  ): ModuleBalanceRequest {
    const message = createBaseModuleBalanceRequest();
    return message;
  },
};

function createBaseModuleBalanceResponse(): ModuleBalanceResponse {
  return { coins: [] };
}

export const ModuleBalanceResponse = {
  encode(
    message: ModuleBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModuleBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleBalanceResponse {
    return {
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ModuleBalanceResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleBalanceResponse>, I>>(
    object: I
  ): ModuleBalanceResponse {
    const message = createBaseModuleBalanceResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseModuleLockedAmountRequest(): ModuleLockedAmountRequest {
  return {};
}

export const ModuleLockedAmountRequest = {
  encode(
    _: ModuleLockedAmountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModuleLockedAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleLockedAmountRequest();
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

  fromJSON(_: any): ModuleLockedAmountRequest {
    return {};
  },

  toJSON(_: ModuleLockedAmountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleLockedAmountRequest>, I>>(
    _: I
  ): ModuleLockedAmountRequest {
    const message = createBaseModuleLockedAmountRequest();
    return message;
  },
};

function createBaseModuleLockedAmountResponse(): ModuleLockedAmountResponse {
  return { coins: [] };
}

export const ModuleLockedAmountResponse = {
  encode(
    message: ModuleLockedAmountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModuleLockedAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleLockedAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleLockedAmountResponse {
    return {
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ModuleLockedAmountResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleLockedAmountResponse>, I>>(
    object: I
  ): ModuleLockedAmountResponse {
    const message = createBaseModuleLockedAmountResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountUnlockableCoinsRequest(): AccountUnlockableCoinsRequest {
  return { owner: "" };
}

export const AccountUnlockableCoinsRequest = {
  encode(
    message: AccountUnlockableCoinsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountUnlockableCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockableCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountUnlockableCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: AccountUnlockableCoinsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountUnlockableCoinsRequest>, I>>(
    object: I
  ): AccountUnlockableCoinsRequest {
    const message = createBaseAccountUnlockableCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseAccountUnlockableCoinsResponse(): AccountUnlockableCoinsResponse {
  return { coins: [] };
}

export const AccountUnlockableCoinsResponse = {
  encode(
    message: AccountUnlockableCoinsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountUnlockableCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockableCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountUnlockableCoinsResponse {
    return {
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountUnlockableCoinsResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountUnlockableCoinsResponse>, I>>(
    object: I
  ): AccountUnlockableCoinsResponse {
    const message = createBaseAccountUnlockableCoinsResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountUnlockingCoinsRequest(): AccountUnlockingCoinsRequest {
  return { owner: "" };
}

export const AccountUnlockingCoinsRequest = {
  encode(
    message: AccountUnlockingCoinsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountUnlockingCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockingCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountUnlockingCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: AccountUnlockingCoinsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountUnlockingCoinsRequest>, I>>(
    object: I
  ): AccountUnlockingCoinsRequest {
    const message = createBaseAccountUnlockingCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseAccountUnlockingCoinsResponse(): AccountUnlockingCoinsResponse {
  return { coins: [] };
}

export const AccountUnlockingCoinsResponse = {
  encode(
    message: AccountUnlockingCoinsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountUnlockingCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockingCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountUnlockingCoinsResponse {
    return {
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountUnlockingCoinsResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountUnlockingCoinsResponse>, I>>(
    object: I
  ): AccountUnlockingCoinsResponse {
    const message = createBaseAccountUnlockingCoinsResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountLockedCoinsRequest(): AccountLockedCoinsRequest {
  return { owner: "" };
}

export const AccountLockedCoinsRequest = {
  encode(
    message: AccountLockedCoinsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: AccountLockedCoinsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountLockedCoinsRequest>, I>>(
    object: I
  ): AccountLockedCoinsRequest {
    const message = createBaseAccountLockedCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseAccountLockedCoinsResponse(): AccountLockedCoinsResponse {
  return { coins: [] };
}

export const AccountLockedCoinsResponse = {
  encode(
    message: AccountLockedCoinsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedCoinsResponse {
    return {
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountLockedCoinsResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountLockedCoinsResponse>, I>>(
    object: I
  ): AccountLockedCoinsResponse {
    const message = createBaseAccountLockedCoinsResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountLockedPastTimeRequest(): AccountLockedPastTimeRequest {
  return { owner: "", timestamp: undefined };
}

export const AccountLockedPastTimeRequest = {
  encode(
    message: AccountLockedPastTimeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedPastTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: AccountLockedPastTimeRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountLockedPastTimeRequest>, I>>(
    object: I
  ): AccountLockedPastTimeRequest {
    const message = createBaseAccountLockedPastTimeRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

function createBaseAccountLockedPastTimeResponse(): AccountLockedPastTimeResponse {
  return { locks: [] };
}

export const AccountLockedPastTimeResponse = {
  encode(
    message: AccountLockedPastTimeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedPastTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeResponse {
    return {
      locks: Array.isArray(object?.locks)
        ? object.locks.map((e: any) => PeriodLock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountLockedPastTimeResponse): unknown {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map((e) =>
        e ? PeriodLock.toJSON(e) : undefined
      );
    } else {
      obj.locks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountLockedPastTimeResponse>, I>>(
    object: I
  ): AccountLockedPastTimeResponse {
    const message = createBaseAccountLockedPastTimeResponse();
    message.locks = object.locks?.map((e) => PeriodLock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest(): AccountLockedPastTimeNotUnlockingOnlyRequest {
  return { owner: "", timestamp: undefined };
}

export const AccountLockedPastTimeNotUnlockingOnlyRequest = {
  encode(
    message: AccountLockedPastTimeNotUnlockingOnlyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedPastTimeNotUnlockingOnlyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: AccountLockedPastTimeNotUnlockingOnlyRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<AccountLockedPastTimeNotUnlockingOnlyRequest>,
      I
    >
  >(object: I): AccountLockedPastTimeNotUnlockingOnlyRequest {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse(): AccountLockedPastTimeNotUnlockingOnlyResponse {
  return { locks: [] };
}

export const AccountLockedPastTimeNotUnlockingOnlyResponse = {
  encode(
    message: AccountLockedPastTimeNotUnlockingOnlyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedPastTimeNotUnlockingOnlyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks)
        ? object.locks.map((e: any) => PeriodLock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountLockedPastTimeNotUnlockingOnlyResponse): unknown {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map((e) =>
        e ? PeriodLock.toJSON(e) : undefined
      );
    } else {
      obj.locks = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<AccountLockedPastTimeNotUnlockingOnlyResponse>,
      I
    >
  >(object: I): AccountLockedPastTimeNotUnlockingOnlyResponse {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    message.locks = object.locks?.map((e) => PeriodLock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountUnlockedBeforeTimeRequest(): AccountUnlockedBeforeTimeRequest {
  return { owner: "", timestamp: undefined };
}

export const AccountUnlockedBeforeTimeRequest = {
  encode(
    message: AccountUnlockedBeforeTimeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountUnlockedBeforeTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockedBeforeTimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountUnlockedBeforeTimeRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: AccountUnlockedBeforeTimeRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AccountUnlockedBeforeTimeRequest>, I>
  >(object: I): AccountUnlockedBeforeTimeRequest {
    const message = createBaseAccountUnlockedBeforeTimeRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

function createBaseAccountUnlockedBeforeTimeResponse(): AccountUnlockedBeforeTimeResponse {
  return { locks: [] };
}

export const AccountUnlockedBeforeTimeResponse = {
  encode(
    message: AccountUnlockedBeforeTimeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountUnlockedBeforeTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockedBeforeTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountUnlockedBeforeTimeResponse {
    return {
      locks: Array.isArray(object?.locks)
        ? object.locks.map((e: any) => PeriodLock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountUnlockedBeforeTimeResponse): unknown {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map((e) =>
        e ? PeriodLock.toJSON(e) : undefined
      );
    } else {
      obj.locks = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AccountUnlockedBeforeTimeResponse>, I>
  >(object: I): AccountUnlockedBeforeTimeResponse {
    const message = createBaseAccountUnlockedBeforeTimeResponse();
    message.locks = object.locks?.map((e) => PeriodLock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountLockedPastTimeDenomRequest(): AccountLockedPastTimeDenomRequest {
  return { owner: "", timestamp: undefined, denom: "" };
}

export const AccountLockedPastTimeDenomRequest = {
  encode(
    message: AccountLockedPastTimeDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedPastTimeDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): AccountLockedPastTimeDenomRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: AccountLockedPastTimeDenomRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AccountLockedPastTimeDenomRequest>, I>
  >(object: I): AccountLockedPastTimeDenomRequest {
    const message = createBaseAccountLockedPastTimeDenomRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseAccountLockedPastTimeDenomResponse(): AccountLockedPastTimeDenomResponse {
  return { locks: [] };
}

export const AccountLockedPastTimeDenomResponse = {
  encode(
    message: AccountLockedPastTimeDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedPastTimeDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeDenomResponse {
    return {
      locks: Array.isArray(object?.locks)
        ? object.locks.map((e: any) => PeriodLock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountLockedPastTimeDenomResponse): unknown {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map((e) =>
        e ? PeriodLock.toJSON(e) : undefined
      );
    } else {
      obj.locks = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AccountLockedPastTimeDenomResponse>, I>
  >(object: I): AccountLockedPastTimeDenomResponse {
    const message = createBaseAccountLockedPastTimeDenomResponse();
    message.locks = object.locks?.map((e) => PeriodLock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLockedDenomRequest(): LockedDenomRequest {
  return { denom: "", duration: undefined };
}

export const LockedDenomRequest = {
  encode(
    message: LockedDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      duration: isSet(object.duration)
        ? Duration.fromJSON(object.duration)
        : undefined,
    };
  },

  toJSON(message: LockedDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockedDenomRequest>, I>>(
    object: I
  ): LockedDenomRequest {
    const message = createBaseLockedDenomRequest();
    message.denom = object.denom ?? "";
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    return message;
  },
};

function createBaseLockedDenomResponse(): LockedDenomResponse {
  return { amount: "" };
}

export const LockedDenomResponse = {
  encode(
    message: LockedDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedDenomResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: LockedDenomResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockedDenomResponse>, I>>(
    object: I
  ): LockedDenomResponse {
    const message = createBaseLockedDenomResponse();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseLockedRequest(): LockedRequest {
  return { lockId: Long.UZERO };
}

export const LockedRequest = {
  encode(
    message: LockedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedRequest();
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

  fromJSON(object: any): LockedRequest {
    return {
      lockId: isSet(object.lockId)
        ? Long.fromString(object.lockId)
        : Long.UZERO,
    };
  },

  toJSON(message: LockedRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockedRequest>, I>>(
    object: I
  ): LockedRequest {
    const message = createBaseLockedRequest();
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO;
    return message;
  },
};

function createBaseLockedResponse(): LockedResponse {
  return { lock: undefined };
}

export const LockedResponse = {
  encode(
    message: LockedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lock !== undefined) {
      PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lock = PeriodLock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedResponse {
    return {
      lock: isSet(object.lock) ? PeriodLock.fromJSON(object.lock) : undefined,
    };
  },

  toJSON(message: LockedResponse): unknown {
    const obj: any = {};
    message.lock !== undefined &&
      (obj.lock = message.lock ? PeriodLock.toJSON(message.lock) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockedResponse>, I>>(
    object: I
  ): LockedResponse {
    const message = createBaseLockedResponse();
    message.lock =
      object.lock !== undefined && object.lock !== null
        ? PeriodLock.fromPartial(object.lock)
        : undefined;
    return message;
  },
};

function createBaseSyntheticLockupsByLockupIDRequest(): SyntheticLockupsByLockupIDRequest {
  return { lockId: Long.UZERO };
}

export const SyntheticLockupsByLockupIDRequest = {
  encode(
    message: SyntheticLockupsByLockupIDRequest,
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
  ): SyntheticLockupsByLockupIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLockupsByLockupIDRequest();
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

  fromJSON(object: any): SyntheticLockupsByLockupIDRequest {
    return {
      lockId: isSet(object.lockId)
        ? Long.fromString(object.lockId)
        : Long.UZERO,
    };
  },

  toJSON(message: SyntheticLockupsByLockupIDRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SyntheticLockupsByLockupIDRequest>, I>
  >(object: I): SyntheticLockupsByLockupIDRequest {
    const message = createBaseSyntheticLockupsByLockupIDRequest();
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO;
    return message;
  },
};

function createBaseSyntheticLockupsByLockupIDResponse(): SyntheticLockupsByLockupIDResponse {
  return { syntheticLocks: [] };
}

export const SyntheticLockupsByLockupIDResponse = {
  encode(
    message: SyntheticLockupsByLockupIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SyntheticLockupsByLockupIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLockupsByLockupIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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

  fromJSON(object: any): SyntheticLockupsByLockupIDResponse {
    return {
      syntheticLocks: Array.isArray(object?.syntheticLocks)
        ? object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SyntheticLockupsByLockupIDResponse): unknown {
    const obj: any = {};
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
    I extends Exact<DeepPartial<SyntheticLockupsByLockupIDResponse>, I>
  >(object: I): SyntheticLockupsByLockupIDResponse {
    const message = createBaseSyntheticLockupsByLockupIDResponse();
    message.syntheticLocks =
      object.syntheticLocks?.map((e) => SyntheticLock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountLockedLongerDurationRequest(): AccountLockedLongerDurationRequest {
  return { owner: "", duration: undefined };
}

export const AccountLockedLongerDurationRequest = {
  encode(
    message: AccountLockedLongerDurationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedLongerDurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration)
        ? Duration.fromJSON(object.duration)
        : undefined,
    };
  },

  toJSON(message: AccountLockedLongerDurationRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AccountLockedLongerDurationRequest>, I>
  >(object: I): AccountLockedLongerDurationRequest {
    const message = createBaseAccountLockedLongerDurationRequest();
    message.owner = object.owner ?? "";
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    return message;
  },
};

function createBaseAccountLockedLongerDurationResponse(): AccountLockedLongerDurationResponse {
  return { locks: [] };
}

export const AccountLockedLongerDurationResponse = {
  encode(
    message: AccountLockedLongerDurationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedLongerDurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationResponse {
    return {
      locks: Array.isArray(object?.locks)
        ? object.locks.map((e: any) => PeriodLock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountLockedLongerDurationResponse): unknown {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map((e) =>
        e ? PeriodLock.toJSON(e) : undefined
      );
    } else {
      obj.locks = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AccountLockedLongerDurationResponse>, I>
  >(object: I): AccountLockedLongerDurationResponse {
    const message = createBaseAccountLockedLongerDurationResponse();
    message.locks = object.locks?.map((e) => PeriodLock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest(): AccountLockedLongerDurationNotUnlockingOnlyRequest {
  return { owner: "", duration: undefined };
}

export const AccountLockedLongerDurationNotUnlockingOnlyRequest = {
  encode(
    message: AccountLockedLongerDurationNotUnlockingOnlyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration)
        ? Duration.fromJSON(object.duration)
        : undefined,
    };
  },

  toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyRequest>,
      I
    >
  >(object: I): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    const message =
      createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    message.owner = object.owner ?? "";
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    return message;
  },
};

function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse(): AccountLockedLongerDurationNotUnlockingOnlyResponse {
  return { locks: [] };
}

export const AccountLockedLongerDurationNotUnlockingOnlyResponse = {
  encode(
    message: AccountLockedLongerDurationNotUnlockingOnlyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks)
        ? object.locks.map((e: any) => PeriodLock.fromJSON(e))
        : [],
    };
  },

  toJSON(
    message: AccountLockedLongerDurationNotUnlockingOnlyResponse
  ): unknown {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map((e) =>
        e ? PeriodLock.toJSON(e) : undefined
      );
    } else {
      obj.locks = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyResponse>,
      I
    >
  >(object: I): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    const message =
      createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    message.locks = object.locks?.map((e) => PeriodLock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountLockedLongerDurationDenomRequest(): AccountLockedLongerDurationDenomRequest {
  return { owner: "", duration: undefined, denom: "" };
}

export const AccountLockedLongerDurationDenomRequest = {
  encode(
    message: AccountLockedLongerDurationDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedLongerDurationDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
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

  fromJSON(object: any): AccountLockedLongerDurationDenomRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration)
        ? Duration.fromJSON(object.duration)
        : undefined,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: AccountLockedLongerDurationDenomRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AccountLockedLongerDurationDenomRequest>, I>
  >(object: I): AccountLockedLongerDurationDenomRequest {
    const message = createBaseAccountLockedLongerDurationDenomRequest();
    message.owner = object.owner ?? "";
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseAccountLockedLongerDurationDenomResponse(): AccountLockedLongerDurationDenomResponse {
  return { locks: [] };
}

export const AccountLockedLongerDurationDenomResponse = {
  encode(
    message: AccountLockedLongerDurationDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountLockedLongerDurationDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationDenomResponse {
    return {
      locks: Array.isArray(object?.locks)
        ? object.locks.map((e: any) => PeriodLock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountLockedLongerDurationDenomResponse): unknown {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map((e) =>
        e ? PeriodLock.toJSON(e) : undefined
      );
    } else {
      obj.locks = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AccountLockedLongerDurationDenomResponse>, I>
  >(object: I): AccountLockedLongerDurationDenomResponse {
    const message = createBaseAccountLockedLongerDurationDenomResponse();
    message.locks = object.locks?.map((e) => PeriodLock.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Return full balance of the module */
  ModuleBalance(request: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;
  /** Return locked balance of the module */
  ModuleLockedAmount(
    request: ModuleLockedAmountRequest
  ): Promise<ModuleLockedAmountResponse>;
  /** Returns unlockable coins which are not withdrawn yet */
  AccountUnlockableCoins(
    request: AccountUnlockableCoinsRequest
  ): Promise<AccountUnlockableCoinsResponse>;
  /** Returns unlocking coins */
  AccountUnlockingCoins(
    request: AccountUnlockingCoinsRequest
  ): Promise<AccountUnlockingCoinsResponse>;
  /** Return a locked coins that can't be withdrawn */
  AccountLockedCoins(
    request: AccountLockedCoinsRequest
  ): Promise<AccountLockedCoinsResponse>;
  /** Returns locked records of an account with unlock time beyond timestamp */
  AccountLockedPastTime(
    request: AccountLockedPastTimeRequest
  ): Promise<AccountLockedPastTimeResponse>;
  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  AccountLockedPastTimeNotUnlockingOnly(
    request: AccountLockedPastTimeNotUnlockingOnlyRequest
  ): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
  /** Returns unlocked records with unlock time before timestamp */
  AccountUnlockedBeforeTime(
    request: AccountUnlockedBeforeTimeRequest
  ): Promise<AccountUnlockedBeforeTimeResponse>;
  /** Returns lock records by address, timestamp, denom */
  AccountLockedPastTimeDenom(
    request: AccountLockedPastTimeDenomRequest
  ): Promise<AccountLockedPastTimeDenomResponse>;
  /** Returns total locked per denom with longer past given time */
  LockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse>;
  /** Returns lock record by id */
  LockedByID(request: LockedRequest): Promise<LockedResponse>;
  /** Returns synthetic lockups by native lockup id */
  SyntheticLockupsByLockupID(
    request: SyntheticLockupsByLockupIDRequest
  ): Promise<SyntheticLockupsByLockupIDResponse>;
  /** Returns account locked records with longer duration */
  AccountLockedLongerDuration(
    request: AccountLockedLongerDurationRequest
  ): Promise<AccountLockedLongerDurationResponse>;
  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  AccountLockedLongerDurationNotUnlockingOnly(
    request: AccountLockedLongerDurationNotUnlockingOnlyRequest
  ): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
  /** Returns account's locked records for a denom with longer duration */
  AccountLockedLongerDurationDenom(
    request: AccountLockedLongerDurationDenomRequest
  ): Promise<AccountLockedLongerDurationDenomResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ModuleBalance = this.ModuleBalance.bind(this);
    this.ModuleLockedAmount = this.ModuleLockedAmount.bind(this);
    this.AccountUnlockableCoins = this.AccountUnlockableCoins.bind(this);
    this.AccountUnlockingCoins = this.AccountUnlockingCoins.bind(this);
    this.AccountLockedCoins = this.AccountLockedCoins.bind(this);
    this.AccountLockedPastTime = this.AccountLockedPastTime.bind(this);
    this.AccountLockedPastTimeNotUnlockingOnly =
      this.AccountLockedPastTimeNotUnlockingOnly.bind(this);
    this.AccountUnlockedBeforeTime = this.AccountUnlockedBeforeTime.bind(this);
    this.AccountLockedPastTimeDenom =
      this.AccountLockedPastTimeDenom.bind(this);
    this.LockedDenom = this.LockedDenom.bind(this);
    this.LockedByID = this.LockedByID.bind(this);
    this.SyntheticLockupsByLockupID =
      this.SyntheticLockupsByLockupID.bind(this);
    this.AccountLockedLongerDuration =
      this.AccountLockedLongerDuration.bind(this);
    this.AccountLockedLongerDurationNotUnlockingOnly =
      this.AccountLockedLongerDurationNotUnlockingOnly.bind(this);
    this.AccountLockedLongerDurationDenom =
      this.AccountLockedLongerDurationDenom.bind(this);
  }
  ModuleBalance(request: ModuleBalanceRequest): Promise<ModuleBalanceResponse> {
    const data = ModuleBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "ModuleBalance",
      data
    );
    return promise.then((data) =>
      ModuleBalanceResponse.decode(new _m0.Reader(data))
    );
  }

  ModuleLockedAmount(
    request: ModuleLockedAmountRequest
  ): Promise<ModuleLockedAmountResponse> {
    const data = ModuleLockedAmountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "ModuleLockedAmount",
      data
    );
    return promise.then((data) =>
      ModuleLockedAmountResponse.decode(new _m0.Reader(data))
    );
  }

  AccountUnlockableCoins(
    request: AccountUnlockableCoinsRequest
  ): Promise<AccountUnlockableCoinsResponse> {
    const data = AccountUnlockableCoinsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "AccountUnlockableCoins",
      data
    );
    return promise.then((data) =>
      AccountUnlockableCoinsResponse.decode(new _m0.Reader(data))
    );
  }

  AccountUnlockingCoins(
    request: AccountUnlockingCoinsRequest
  ): Promise<AccountUnlockingCoinsResponse> {
    const data = AccountUnlockingCoinsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "AccountUnlockingCoins",
      data
    );
    return promise.then((data) =>
      AccountUnlockingCoinsResponse.decode(new _m0.Reader(data))
    );
  }

  AccountLockedCoins(
    request: AccountLockedCoinsRequest
  ): Promise<AccountLockedCoinsResponse> {
    const data = AccountLockedCoinsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "AccountLockedCoins",
      data
    );
    return promise.then((data) =>
      AccountLockedCoinsResponse.decode(new _m0.Reader(data))
    );
  }

  AccountLockedPastTime(
    request: AccountLockedPastTimeRequest
  ): Promise<AccountLockedPastTimeResponse> {
    const data = AccountLockedPastTimeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "AccountLockedPastTime",
      data
    );
    return promise.then((data) =>
      AccountLockedPastTimeResponse.decode(new _m0.Reader(data))
    );
  }

  AccountLockedPastTimeNotUnlockingOnly(
    request: AccountLockedPastTimeNotUnlockingOnlyRequest
  ): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    const data =
      AccountLockedPastTimeNotUnlockingOnlyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "AccountLockedPastTimeNotUnlockingOnly",
      data
    );
    return promise.then((data) =>
      AccountLockedPastTimeNotUnlockingOnlyResponse.decode(new _m0.Reader(data))
    );
  }

  AccountUnlockedBeforeTime(
    request: AccountUnlockedBeforeTimeRequest
  ): Promise<AccountUnlockedBeforeTimeResponse> {
    const data = AccountUnlockedBeforeTimeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "AccountUnlockedBeforeTime",
      data
    );
    return promise.then((data) =>
      AccountUnlockedBeforeTimeResponse.decode(new _m0.Reader(data))
    );
  }

  AccountLockedPastTimeDenom(
    request: AccountLockedPastTimeDenomRequest
  ): Promise<AccountLockedPastTimeDenomResponse> {
    const data = AccountLockedPastTimeDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "AccountLockedPastTimeDenom",
      data
    );
    return promise.then((data) =>
      AccountLockedPastTimeDenomResponse.decode(new _m0.Reader(data))
    );
  }

  LockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse> {
    const data = LockedDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "LockedDenom",
      data
    );
    return promise.then((data) =>
      LockedDenomResponse.decode(new _m0.Reader(data))
    );
  }

  LockedByID(request: LockedRequest): Promise<LockedResponse> {
    const data = LockedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "LockedByID",
      data
    );
    return promise.then((data) => LockedResponse.decode(new _m0.Reader(data)));
  }

  SyntheticLockupsByLockupID(
    request: SyntheticLockupsByLockupIDRequest
  ): Promise<SyntheticLockupsByLockupIDResponse> {
    const data = SyntheticLockupsByLockupIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "SyntheticLockupsByLockupID",
      data
    );
    return promise.then((data) =>
      SyntheticLockupsByLockupIDResponse.decode(new _m0.Reader(data))
    );
  }

  AccountLockedLongerDuration(
    request: AccountLockedLongerDurationRequest
  ): Promise<AccountLockedLongerDurationResponse> {
    const data = AccountLockedLongerDurationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "AccountLockedLongerDuration",
      data
    );
    return promise.then((data) =>
      AccountLockedLongerDurationResponse.decode(new _m0.Reader(data))
    );
  }

  AccountLockedLongerDurationNotUnlockingOnly(
    request: AccountLockedLongerDurationNotUnlockingOnlyRequest
  ): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    const data =
      AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(
        request
      ).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "AccountLockedLongerDurationNotUnlockingOnly",
      data
    );
    return promise.then((data) =>
      AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  AccountLockedLongerDurationDenom(
    request: AccountLockedLongerDurationDenomRequest
  ): Promise<AccountLockedLongerDurationDenomResponse> {
    const data =
      AccountLockedLongerDurationDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.lockup.Query",
      "AccountLockedLongerDurationDenom",
      data
    );
    return promise.then((data) =>
      AccountLockedLongerDurationDenomResponse.decode(new _m0.Reader(data))
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
