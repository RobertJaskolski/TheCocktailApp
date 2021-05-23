import { client } from "./apiClient";

const readRandomDrinks = async() => {
    return client("randomselection.php");
};

export { readRandomDrinks };