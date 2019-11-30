import {DeserializableModel} from "./deserializable.model";

export class ElectionType implements DeserializableModel{
  name: string;
  years: string[];

  deserialize(input: any): this {
    return undefined;
  }
}
