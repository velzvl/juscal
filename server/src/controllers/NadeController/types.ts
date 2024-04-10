import { INadeClient, ITargetClient } from "../../types/index.js";

export interface INadeCreateRequest {
  params: {
    mapId: number;
  };
  body: {
    nade: INadeClient;
  };
}

export interface IClientNadeAndTargets {
  nade: INadeClient;
  fromNadeTarget: ITargetClient;
  toNadeTarget: ITargetClient;
}
