import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Home = () => {
    return (
    <div>
        <h1>Puntos Verdes</h1>
        <div id="map-container">
            <iframe title="Listado de Puntos Verdes" id="map-canvas" width="690" height="527" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=puntos verdes&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
    </div>
    )
}

export default Home;

/*<div class="mapouter">
<div class="gmap_canvas">
<iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=690&amp;height=527&amp;hl=en&amp;q=puntos verdes&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://gachanymph.com/">Gacha Nymph Download</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:527px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:527px;}.gmap_iframe {height:527px!important;}</style></div>*/