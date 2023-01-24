import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  state() {
    return {
      cart: [],
      shipment : {},
      filterdProducts : []
    };
  },
  getters,
  mutations,
  actions,
};
