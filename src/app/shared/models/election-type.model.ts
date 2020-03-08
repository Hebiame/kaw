import {DeserializableModel} from "./deserializable.model";

export class ElectionType implements DeserializableModel{
  name: string;
  years: string[];

  deserialize(input: any): this {
    if (input.years == null) {
      input.years = [];
    }

    return Object.assign(this, input);
  }
}
