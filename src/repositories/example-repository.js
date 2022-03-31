export const exampleRepository = ($axios) => ({
  login(payload) {
    return new Promise((resolve, reject) => {
      $axios
        .post("login", payload)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getChecklist(payload) {
    return new Promise((resolve, reject) => {
      $axios
        .get("checklist", {
          params: payload,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getChecklistByItemId(item) {
    return new Promise((resolve, reject) => {
      $axios
        .put(`checklist/${item.id}/item/${item.itemId}`)
        .then((response) => {
          resolve(response);
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  deleteChecklist(payload) {
    return new Promise((resolve, reject) => {
      $axios
        .delete(`checklist/${payload}`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
});
