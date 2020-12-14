import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-cinema-maap',
  templateUrl: './cinema-maap.component.html',
  styleUrls: ['./cinema-maap.component.css']
})

export class CinemaMaapComponent implements OnInit {
  
  width: number = 1000
  height: number = 1000;
  
  
  constructor() { }
  
  ngOnInit(): void {
    
    //Ensuite, nous créons un objet path pour manipuler nos données geoJSON. 
    const path = d3.geoPath();
    /**
     * La partie la plus délicate de ce tutoriel, la définition de la projection utilisée.
     * Ici, nous choisissons une projection assez habituelle pour la cartographie (une liste des projections est disponible sur le site de D3JS).
     * Nous centrons cette projection sur la France (latitude & longitude) et l'agrandissons pour finalement la centrer. 
     */
    const projection = d3.geoConicConformal()
    .center([2.454071, 46.279229])
    .scale(5200)
    .translate([this.width / 2, this.height / 2]);
    /**
     * La projection est ensuite assignée au path, le SVG est ajouté sur 
     * le DOM avec les dimensions pré-définies (l'id ne sert que pour le CSS) et un groupe est ajouté au SVG pour contenir tous les path. 
     * Attention, votre DOM doit déjà posséder un DIV dont l'ID est map, le code d3.select('#map') permet de récupérer ce DIV. 
     */
    path.projection(projection);
    
    const svg = d3.select('#map').append("svg")
      .attr("id", "svg")
      .attr("width", this.width)
      .attr("height", this.height);
    
    const deps = svg.append("g");
        
    /**
     * Le code suivant (et il n'y en a pas d'autres pour afficher la carte) charge le fichier geoJSON 
     * et pour chaque entrée de ce fichier ajoute un noeud path associé à un CSS particulier. 
     * Il est finalement rattaché au path que nous avions précédement déclaré. 
    */
    //https://www.datavis.fr/d3js/map-firststep/departments.json 
    d3.json('/datas/departments.json'/*, { 
      headers: [
        ["Content-Type", "application/json"],
        ["Access-Control-Allow-Origin", "*"]
    ]}*/
    ).then(function(geojson) {    
      deps.selectAll("path")
        .data((geojson as any).features)
        .enter()
        .append("path")
        .classed("department", true)
        .style("stroke", "red")    // set the line colour
        .style("fill", "none")    // set the fill colour 
        .attr("d", path)
    });

/*
    var div = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);

    d3.json('/datas/departments.json').then(function(geojson) {			
    deps.selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr('class', 'department')
        .attr("d", path)
        .on("mouseover", function(d) {
            div.transition()        
                .duration(200)
                .style("opacity", .9);      
            div.html("Département : " + d.properties.NOM_DEPT + "<br/>"
                  +  "Région : " + d.properties.NOM_REGION)  
                .style("left", (d3.event.pageX + 30) + "px")     
                .style("top", (d3.event.pageY - 30) + "px")
        })
        .on("mouseout", function(d) {
            div.style("opacity", 0);
            div.html("")
                .style("left", "-500px")
                .style("top", "-500px");
        });
});
*/
  }
}
