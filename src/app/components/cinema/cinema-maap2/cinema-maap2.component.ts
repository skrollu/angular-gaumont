import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cinema } from '../../../models/Cinema'
import { Theater } from '../../../models/Theater'
import { CinemaService } from '../../../services/cinema/cinema.service'
import * as L from 'leaflet'
import 'leaflet.markercluster'
import { from } from 'rxjs';
//import icon from '../../../../assets/images/markerIcon.png'

@Component({
  selector: 'app-cinema-maap2',
  templateUrl: './cinema-maap2.component.html',
  styleUrls: ['./cinema-maap2.component.css']
})
export class CinemaMaap2Component implements OnInit, AfterViewInit {
  
  private map: L.Map;
  private markers = L.markerClusterGroup();
  private markersTab = [];
  
  private cinemas: Cinema[];
  
  // On personnalise le marqueur
  private icon = L.icon({
    iconUrl: "../../../../assets/images/markerIcon.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
  })
  
  constructor(private cinemaService: CinemaService) { }
  
  ngOnInit(): void {
    
  };
  
  ngAfterViewInit(): void {    
    this.loadDatas();
  }
  
  private async loadDatas(): Promise<void> {
    this.cinemaService.getCinemas().subscribe( datas => {
      this.cinemas = (datas as any).cinemas as Cinema[];
      this.initMap();
    })
  }
  
  private initMap(): void {
    this.map = L.map('maap').setView([48.852969, 2.349903], 7);
    /*
    'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    */
    const osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    { // LIGNE 20
      attribution: '© OpenStreetMap contributors',
      maxZoom: 20,
      minZoom: 5,
    });
    
    this.map.addLayer(osmLayer);
    
    this.cinemas.map(cinema => {
      const theaters = cinema.theaters;
      
      theaters.map((theater: Theater) => {
        
        let marker = L.marker([(theater.gpsPosition.x), theater.gpsPosition.y]/* , { icon: this.icon } */).addTo(this.map); //.addTo(carte); Inutile lors de l'utilisation des clusters
        marker.bindPopup("<h1>"+ theater.name + "</h1>");
        
        this.markers.addLayer(marker); // On ajoute le marqueur au groupe
        this.markersTab.push(marker);// On ajoute le marqueur au tableau
      })
    })
    
    var groupe = L.featureGroup(this.markersTab);// On regroupe les marqueurs dans un groupe Leaflet
    // On adapte le zoom au groupe
    //this.map.fitBounds(groupe.getBounds().pad(0.2)); //pad ajoute un padding pour pouvoir voir les marqueurs
    this.map.addLayer(this.markers);
  }
}
