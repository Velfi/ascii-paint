import { PaletteColor } from './palette-color.interface';

export interface Palette {
    name: string;
    author?: string;
    colors: PaletteColor[];
}
