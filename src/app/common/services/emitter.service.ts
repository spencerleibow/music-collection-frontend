
// From https://gist.github.com/sasxa/e1164d9773b31459f6dc

import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EmitterService {
  private static _emitters: { [ID: string]: EventEmitter<any> } = {};

  static get(ID: string): EventEmitter<any> {
    if (!this._emitters[ID]) 
      this._emitters[ID] = new EventEmitter();
    return this._emitters[ID];
  }
}