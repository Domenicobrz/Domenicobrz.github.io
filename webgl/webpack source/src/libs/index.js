import style from "./../css/main.scss";
import { initPaginator } from "./paginator";
import { initSketches } from "./sketchesLoader";
import LegendaryCursor from "legendary-cursor";

initPaginator();
initSketches();
LegendaryCursor.init();