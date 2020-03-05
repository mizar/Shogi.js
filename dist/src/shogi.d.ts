/** @license
 * Shogi.js
 * Copyright (c) 2014 na2hiro (https://github.com/na2hiro)
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
import Color from "./Color";
import IMoveDefinition from "./IMoveDefinition";
import Piece from "./Piece";
import "./polyfills";
export declare class Shogi {
    private static getIllegalUnpromotedRow;
    private static getRowToOppositeEnd;
    board: Piece[][];
    hands: Piece[][];
    turn: Color;
    flagEditMode: boolean;
    constructor(setting?: ISettingType);
    /**
     * 盤面を初期化する
     * @param {ISettingType} setting 初期局面(なければ平手)
     */
    initialize(setting?: ISettingType): void;
    /**
     * SFENによる盤面表現の文字列で盤面を初期化する
     * @param {string} sfen
     */
    initializeFromSFENString(sfen: string): void;
    /**
     * CSAによる盤面表現の文字列を返す
     * @returns {string}
     */
    toCSAString(): string;
    /**
     * SFENによる盤面表現の文字列を返す
     * @param {number} moveCount
     * @returns {string}
     */
    toSFENString(moveCount?: number): string;
    editMode(flag: boolean): void;
    move(fromx: number, fromy: number, tox: number, toy: number, promote?: boolean): void;
    unmove(fromx: number, fromy: number, tox: number, toy: number, promote?: boolean, capture?: string): void;
    drop(tox: number, toy: number, kind: string, color?: Color): void;
    undrop(tox: number, toy: number): void;
    getMovesFrom(x: number, y: number): IMove[];
    getDropsBy(color: Color): IMove[];
    getMovesTo(x: number, y: number, kind: string, color?: Color): IMove[];
    get(x: number, y: number): Piece;
    getHandsSummary(color: Color): {
        [index: string]: number;
    };
    captureByColor(x: number, y: number, color: Color): void;
    flip(x: number, y: number): boolean;
    setTurn(color: Color): void;
    private set;
    private capture;
    private pushToHand;
    private popFromHand;
    private nextTurn;
    private prevTurn;
    private checkTurn;
}
export interface ISettingType {
    preset: string;
    data?: {
        color: Color;
        board: {
            color?: Color;
            kind?: string;
        }[][];
        hands: {
            [index: string]: number;
        }[];
    };
}
export interface IMove {
    from?: {
        x: number;
        y: number;
    };
    to: {
        x: number;
        y: number;
    };
    kind?: string;
    color?: Color;
}
export { Color, Piece, IMoveDefinition };
