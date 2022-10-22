import style from "./../css/main.scss";
import { initPaginator } from "./paginator";
import { SketchGallery } from "./sketchesLoader";
import LegendaryCursor from "legendary-cursor";
import { sketches } from "./sketches";
import { paintings } from "./paintings";
import { dom } from "./DOMreferences";

initPaginator();
new SketchGallery(sketches, dom.SketchesContainer, dom.SketchesPaginator, "#graphics_sketches_header");
new SketchGallery(paintings, dom.PaintingsContainer, dom.PaintingsPaginator, "#paintings_sketches_header");
LegendaryCursor.init();