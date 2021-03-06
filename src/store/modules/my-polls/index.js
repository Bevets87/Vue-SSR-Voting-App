import mutations from "./mutations";
import { createActions } from "./createActions";
import { createState } from "./createState";

export function createMyPollsModule(http) {
  return {
    namespaced: true,
    state: createState(),
    mutations,
    actions: createActions(http)
  };
}
