import {MapType} from "./map-type.model";
import {DeserializableModel} from "./deserializable.model";

export class ReferenceField implements DeserializableModel{
  name: string;
  mapTypes: MapType[];

  deserialize(input: any): this {
    return undefined;
  }
}
