import React from 'react';
import { Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CatalogPage from "./pages/CatalogPage";
import SignupPage from "./pages/SignupPage";
import MealSchedulePage from "./pages/MealSchedulePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import PriceLoggerPage from "./pages/PriceLoggerPage";
import RecipesPage from "./pages/RecipesPage";
import TopNagivation from "./components/navigation/TopNagivation";

const App = () => (
  <>
    <TopNagivation/>  
    <Route path="/" exact component={HomePage} />
    <Route path="/mealschedule" exact component={MealSchedulePage}/>
    <Route path="/catalog" exact component={CatalogPage}/>
    <Route path="/pricelogger" exact component={PriceLoggerPage}/>
    <Route path="/recipes" component={RecipesPage}/>
    <Route path="/login"  exact component={LoginPage}  />
    <Route path="/signup" exact component={SignupPage} />
    <Route path="/forgot_password" exact component={ForgotPasswordPage} />
  </>
); 


export default App;
