import { DeserializableModel } from "./deserializable.model";
import { MapItem } from "./map-item.model";
import { ElectionType } from "./election-type.model";

export class MapData implements DeserializableModel {
  public header: string;
  public items: MapItem[];

  deserialize(input: any): this {
    Object.assign(this, input)

    this.items = input.items ? input.items.map(item =>
      new MapItem().deserialize(item)) : [];

    return this;
  }
}
