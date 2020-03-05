import Color from "./Color";
export default class Piece {
    static promote(kind: string): string;
    static unpromote(kind: string): string;
    static canPromote(kind: string): boolean;
    static isPromoted(kind: string): boolean;
    static oppositeColor(color: Color): Color;
    static fromSFENString(sfen: string): Piece;
    color: Color;
    kind: string;
    constructor(csa: string);
    promote(): void;
    unpromote(): void;
    inverse(): void;
    toCSAString(): string;
    toSFENString(): string;
}
