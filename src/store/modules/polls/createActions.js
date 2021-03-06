import types from "./types";

function getParams(options) {
  const [sort] = Object.entries(options.sort).filter(
    ([key, value]) => value.selected
  );
  const [name, selection] = sort;
  return Object.assign({}, options, { sort: selection.column });
}

export function createActions(http) {
  return {
    [types.FETCH_DATA]({ commit, state }) {
      const params = getParams(state.options);

      return http
        .get("/api/polls", { params })
        .then(response => {
          commit(types.IS_NOT_LOADING);
          commit(types.DATA, response.data.collection);
          commit(types.COUNT, response.data.count);
        })
        .catch(error => {
          commit(types.IS_NOT_LOADING);
          commit(types.ERROR, error.response.data);
        });
    }
  };
}
