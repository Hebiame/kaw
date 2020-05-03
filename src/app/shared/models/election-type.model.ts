import { DeserializableModel } from "./deserializable.model";

export class ElectionType implements DeserializableModel {
  public name: string;
  public years: string[];

  deserialize(input: any): this {
    if (input.years == null) {
      input.years = [];
    }

    return Object.assign(this, input);
  }
}
