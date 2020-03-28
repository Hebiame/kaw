import { MapType } from "./map-type.model";
import { DeserializableModel } from "./deserializable.model";

export class ReferenceField implements DeserializableModel {
  name: string;
  mapTypes: MapType[];

  deserialize(input: any): this {
    Object.assign(this, input);
    this.mapTypes = input.mapTypes ? input.mapTypes.map(map =>
      new MapType().deserialize(map)) : [];
    return this;
  }
}
