import { DeserializableModel } from "./deserializable.model";

export class MapParams implements DeserializableModel {
  public referenceField: number;
  public mapType: number;
  public electionType: number;
  public year: number;
  public imgMd: string;
  public imgLg: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

export class MapItem implements DeserializableModel {
  public text: string;
  public mapModel: string;
  public fileNameMedium: string;
  public fileNameLarge: string;
  public otherMapModel: string;
  public otherMapParams: MapParams;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.otherMapParams = input.otherMapParams ? new MapParams().deserialize(input.otherMapParams) : null;
    return this;
  }
}
