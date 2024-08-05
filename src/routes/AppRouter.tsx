import { Home } from "@pages/HomePage";
import { NotFound } from "@pages/NotFound";
import { SignIn } from "@pages/SignInPage";
import { SignUp } from "@pages/SignUpPage";
import { Routes, Route } from "react-router-dom";

const routesIfNotAuthenticated = (
  <Route>
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
  </Route>
);

const routesIfAuthenticated = (
  <Route>
    <Route path="/" element={<Home />} />
  </Route>
);

export function AppRoutes() {
  return (
    <Routes>
      {routesIfAuthenticated}
      {routesIfNotAuthenticated}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
