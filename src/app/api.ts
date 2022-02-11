import axios from "axios";

const BASE_URL = "https://js-developer-second-round.herokuapp.com/api/v1/application/";

export function getConstraints() {
    return axios.get(`${BASE_URL}constraints`);
}

export function getLoanOffer(amount: number, term: number) {
    return axios.get(`${BASE_URL}first-loan-offer?amount=${amount}&term=${term}`);
}