import React, { useEffect, useState } from "react";

import "./App.css";
// import Router from "./Routers";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import CreateStore from "./store";
import DataHandler from "./services/data-handler";
import reducers from "./redux/slicers";
import { ToastContainer } from "react-toastify";
import Loader from "./Components/loader";
import Router from "./Routers";

function App() {
  const [persistor, setPersistor] = useState(null);
  const [store, setStore] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const storeConfig = CreateStore(reducers, () => {
      DataHandler.setStore(storeConfig);
      setStore(storeConfig);
      setPersistor(persistStore(storeConfig));
      setLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      )}
    </>
  );
}

export default App;
