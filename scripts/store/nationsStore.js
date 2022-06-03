import {getNations} from "../loaders/nationLoader.js";

export function getAllNations(...handlers){
    getNations("api/nations/all.php", {}, ...handlers)
}