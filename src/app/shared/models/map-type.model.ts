import {ElectionType} from "./election-type.model";
import {DeserializableModel} from "./deserializable.model";

export class MapType implements DeserializableModel{
  name: string;
  yearsLabel: string;
  electionTypes: ElectionType[];

  deserialize(input: any): this {
    return undefined;
  }
}
