export const apiURL = () => {
    return window.location.hostname === "localhost" 
    ? "http://localhost:3005" : 
    "https://budgetheroku-app.herokuapp.com";
}