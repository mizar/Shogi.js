import Color from "./Color";
import IMoveDefinition from "./IMoveDefinition";
/**
 * 既定の初期局面
 */
export declare const PRESET: Readonly<{
    [index: string]: Readonly<{
        readonly board: string[];
        readonly turn: Color;
    }>;
}>;
export declare const MOVE_DEF: Readonly<{
    [index: string]: Readonly<IMoveDefinition>;
}>;
