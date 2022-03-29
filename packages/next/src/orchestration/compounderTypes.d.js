/**
 *
 *
 * @typedef {{
 * denom: string
 * amount: string
 * }} Balance
 *
 * @typedef {{
 * result: Balance[],
 * height: string
 * }} Balances
 *
 * @typedef {(
 * string
 * )} CoinDenom
 *
 * @typedef {(
 * 'ATOM'|
 * 'OSMO'|
 * 'ION'|
 * 'AKT'|
 * 'DVPN'|
 * 'IRIS'|
 * 'CRO'|
 * 'XPRT'|
 * 'REGEN'|
 * 'IOV'|
 * 'NGM'|
 * 'EEUR'|
 * 'JUNO'|
 * 'LIKE'|
 * 'UST'|
 * 'LUNA'|
 * 'BCNA'|
 * 'SCRT'|
 * 'MED'
 * )} CoinSymbol
 *
 * @typedef {{
 * weight:number;
 * type:('coin'|'pool');
 * name:string;
 * value:number|null;
 * symbol:CoinSymbol|null;
 * poolId:string|null;
 * denom:CoinDenom;
 * allocation:number;
 * }} CoinWeight
 *
 * @typedef {{
 * symbol: string,
 * denom: string,
 * amount: string,
 * displayAmount: number,
 * dollarAmount: number,
 * }} DisplayBalance
 *
 * @typedef {{
 * status: ('queued'|'success'|'failed'|'running'|'')
 * type: ('swap'|'join'|'lock')
 * id: string
 * data: object
 * }} Job
 *
 *
 *
 *
 *
 *
 *
 */
