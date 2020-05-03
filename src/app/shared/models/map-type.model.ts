import { ElectionType } from "./election-type.model";
import { DeserializableModel } from "./deserializable.model";

export class MapType implements DeserializableModel {
  public name: string;
  public yearsLabel: string;
  public electionTypes: ElectionType[];

  deserialize(input: any): this {
    Object.assign(this, input);

    this.electionTypes = input.electionTypes ? input.electionTypes.map(election =>
      new ElectionType().deserialize(election)) : [];

    return this;
  }
}
