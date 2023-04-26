import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import  Layout  from "./Layout/Layout";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const TweetsPage = lazy(() => import("pages/TweetsPage/TweetsPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
