import { DeserializableModel } from "./deserializable.model";

export class MapData implements DeserializableModel {
  header: string;
  items: string[];

  deserialize(input: any): this {
    if (input.items == null) {
      input.items = [];
    }

    return Object.assign(this, input);
  }
}
