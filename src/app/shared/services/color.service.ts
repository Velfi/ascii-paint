import { Injectable } from '@angular/core';

import { Palette } from '../interfaces/palette.interface';
import { PaletteColor } from '../interfaces/palette-color.interface';

@Injectable()
export class ColorService {

private palettes: Palette[] = [
  {
    name: 'c64',
    colors: [
      {
        id: 0,
        name: 'Void',
        r: 0,
        g: 0,
        b: 0,
      },
      {
        id: 1,
        name: 'Gray',
        r: 157,
        g: 157,
        b: 157,
      },
      {
        id: 2,
        name: 'White',
        r: 255,
        g: 255,
        b: 255,
      },
      {
        id: 3,
        name: 'Red',
        r: 190,
        g: 38,
        b: 51,
      },
      {
        id: 4,
        name: 'Meat',
        r: 224,
        g: 111,
        b: 139,
      },
      {
        id: 5,
        name: 'Dark Brown',
        r: 73,
        g: 60,
        b: 43,
      },
      {
        id: 6,
        name: 'Brown',
        r: 164,
        g: 100,
        b: 34,
      },
      {
        id: 7,
        name: 'Orange',
        r: 235,
        g: 137,
        b: 49,
      },
      {
        id: 8,
        name: 'Yellow',
        r: 247,
        g: 226,
        b: 107,
      },
      {
        id: 9,
        name: 'Dark Green',
        r: 47,
        g: 72,
        b: 78,
      },
      {
        id: 10,
        name: 'Green',
        r: 68,
        g: 137,
        b: 26,
      },
      {
        id: 11,
        name: 'Slime Green',
        r: 163,
        g: 206,
        b: 39,
      },
      {
        id: 12,
        name: 'Night Blue',
        r: 27,
        g: 38,
        b: 50,
      },
      {
        id: 13,
        name: 'Sea Blue',
        r: 0,
        g: 87,
        b: 132,
      },
      {
        id: 14,
        name: 'Sky Blue',
        r: 49,
        g: 162,
        b: 242,
      },
      {
        id: 15,
        name: 'Cloud Blue',
        r: 178,
        g: 220,
        b: 239,
      },
    ]
  }
];

  constructor() { }

  paletteColorToHex(color: PaletteColor) {
    const r = color.r.toString(16).padStart(2, '0');
    const g = color.g.toString(16).padStart(2, '0');
    const b = color.b.toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }

  getColorById(id: number, palette: PaletteColor[]) {
    const searchResults = palette.filter(color => {
      return id === color.id;
    });
    const resultCount = searchResults.length;
    if (resultCount === 0) {
      throw new Error('No color found with that ID.');
    } else if (resultCount > 1) {
      throw new Error(`${searchResults.length} results found. Looks like the ID passed is duplicated.`);
    } else {
      return searchResults[0];
    }
  }

  getPaletteByName(name: string) {
    const searchResults = this.palettes.filter(palette => palette.name === name);
    const resultCount = searchResults.length;
    if (resultCount === 0) {
      throw new Error(`No palette found with name '${name}'.`);
    } else if (resultCount > 1) {
      throw new Error(`${searchResults.length} results found. Looks like the name passed is duplicated.`);
    } else {
      return searchResults[0].colors;
    }
  }

}
