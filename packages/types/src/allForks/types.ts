import {ContainerType} from "@chainsafe/ssz";

import {ts as phase0} from "../phase0";
import {ts as altair} from "../altair";
import {ts as merge} from "../merge";

// Re-export union types for types that are _known_ to differ

export type BeaconBlockBody = phase0.BeaconBlockBody | altair.BeaconBlockBody | merge.BeaconBlockBody;
export type BeaconBlock = phase0.BeaconBlock | altair.BeaconBlock | merge.BeaconBlock;
export type SignedBeaconBlock = phase0.SignedBeaconBlock | altair.SignedBeaconBlock | merge.SignedBeaconBlock;
export type BeaconState = phase0.BeaconState | altair.BeaconState | merge.BeaconState;
export type Metadata = phase0.Metadata | altair.Metadata;

/**
 * Types known to change between forks
 */
export type AllForksTypes = {
  BeaconBlockBody: BeaconBlockBody;
  BeaconBlock: BeaconBlock;
  SignedBeaconBlock: SignedBeaconBlock;
  BeaconState: BeaconState;
  Metadata: Metadata;
};

/**
 * SSZ Types known to change between forks
 */
export type AllForksSSZTypes = {
  BeaconBlockBody: ContainerType<BeaconBlockBody>;
  BeaconBlock: ContainerType<BeaconBlock>;
  SignedBeaconBlock: ContainerType<SignedBeaconBlock>;
  BeaconState: ContainerType<BeaconState>;
  Metadata: ContainerType<Metadata>;
};
