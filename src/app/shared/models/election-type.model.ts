import {DeserializableModel} from "./deserializable.model";
import { MapType } from "./map-type.model";

export class ElectionType implements DeserializableModel{
  name: string;
  years: string[];

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
