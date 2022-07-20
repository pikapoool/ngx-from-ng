import { Injectable } from '@angular/core';
import { moduleServices } from './indexDeclaration';

@Injectable({
  providedIn: 'root'
})
export class ParseStringService {

  constructor() { }
  
  toUpperCase(str: string): string {
    return str.toUpperCase();
  }
}

moduleServices.factory("$ParseStringService", ParseStringService);
