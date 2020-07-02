import { Letter } from "./Letter";

export interface KanjiLetter extends Letter {
  english: string;
  polish: string;
  russian: string;
  hieroglyphQuantity: number;
  strokes: number;
}
