const getState = ({ getStore, getActions, setStore }) => {
  const token = localStorage.getItem("jwt_token");
  const url = process.env.BACKEND_URL;
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      userProfile: null,
      stock: [],
      cart: [],
      detailOrders: [],
    },
    actions: {},
  };
};
export default getState;
