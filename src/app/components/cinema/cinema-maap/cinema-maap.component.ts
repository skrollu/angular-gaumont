import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-cinema-maap',
  templateUrl: './cinema-maap.component.html',
  styleUrls: ['./cinema-maap.component.css']
})

export class CinemaMaapComponent implements OnInit {

  width: number = 550
  height: number = 550;


  constructor() { }

  ngOnInit(): void {
    const path = d3.geoPath();
    const projection = d3.geoConicConformal()
    .center([2.454071, 46.279229])
    .scale(2600)
    .translate([this.width / 2, this.height / 2]);

    path.projection(projection);

    const svg = d3.select('#map').append("svg")
        .attr("id", "svg")
        .attr("width", this.width)
        .attr("height", this.height);

    const deps = svg.append("g");

    d3.json('datas/departements.json').then(function(geojson) {
        deps.selectAll("path")
            .data((geojson as any).features)
            .enter()
            .append("path")
            .attr("d", path);
    });
  }
}
