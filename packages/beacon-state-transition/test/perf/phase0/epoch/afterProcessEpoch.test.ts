import {itBench} from "@dapplion/benchmark";
import {allForks} from "../../../../src";
import {StateEpoch} from "../../types";
import {generatePerfTestCachedStatePhase0, perfStateId} from "../../util";

// PERF: Cost = compute attester and proposer shufflings ~ 'proportional' to $VALIDATOR_COUNT, but independent of
// network conditions. See also individual benchmarks for shuffling computations.

describe("phase0 afterProcessEpoch", () => {
  itBench<StateEpoch, StateEpoch>({
    id: `phase0 afterProcessEpoch - ${perfStateId}`,
    yieldEventLoopAfterEach: true, // So SubTree(s)'s WeakRef can be garbage collected https://github.com/nodejs/node/issues/39902
    before: () => {
      const state = generatePerfTestCachedStatePhase0({goBackOneSlot: true});
      const epochProcess = allForks.beforeProcessEpoch(state);
      return {state: state as allForks.CachedBeaconState<allForks.BeaconState>, epochProcess};
    },
    beforeEach: ({state, epochProcess}) => ({state: state.clone(), epochProcess}),
    fn: ({state, epochProcess}) => {
      allForks.afterProcessEpoch(state, epochProcess);
    },
  });
});
