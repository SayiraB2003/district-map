'use client'

import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import * as turf from '@turf/turf';
import MapboxSnap from 'mapbox-gl-snap/dist/cjs/MapboxSnap';

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

import { Sidebar } from 'lucide-react';
import { height, positions } from '@mui/system';

import NavBarMap from "../../components/sections/navbar/navbar-map.jsx"
import Footer from '../../components/sections/footer/footer.jsx';
import './map.css'

function App() {
  const map = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 
    'pk.eyJ1IjoiMjIwMjA4OTk2IiwiYSI6ImNtM2tqcjFhOTBjazMyaXF5aHpvODFycm0ifQ.ps7oRaAEZRuZsp64g2X27w'
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/220208996/cm37b153g01f601o0aa8eg6bs',
      center: [-0.116773, 51.510357],
      zoom: 9,
      minZoom: 8 // zoom limit till render limit is fixed
    });

    // add controls for scale and navigation
    map.current.addControl(new mapboxgl.ScaleControl(), 'bottom-left');
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-left');

    // drawing polygon controls
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      // Select which mapbox-gl-draw control buttons to add to the map.
      controls: {
          polygon: true,
          line_string: true,
          point: true,
          trash: true
      },
    });
    map.current.addControl(draw);

    map.current.on('load', () => {
      map.current.addSource('data', {
      type: 'vector',
      url: 'mapbox://220208996.51g8ge3y'
      });

      map.current.addLayer(
      {
        'id': 'data',
        'type': 'fill',
        'source': 'data',
        'source-layer': 'LSOA_deprivation_copy-8dkpvc',
        'paint': {
          'fill-outline-color': 'rgba(0,0,0,0.1)',
          'fill-color': 'rgba(0,0,0,0.1)'
        }
      });

      const deprive_const = [ // the higher the number the higher the deprivation
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
      ];

      const colours = [
        '#08306B',
        '#0A549E',
        '#2272B5',
        '#3E8EC4',
        '#60A6D2',
        '#89BEDC',
        '#AFD1E7',
        '#CDE0F1',
        '#E2EDF8',
        '#F7FBFF'
      ];

      const legend = document.getElementById('legend');

      deprive_const.forEach((layer, i) => {
        const colour = colours[i];
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = colour;

        const value = document.createElement('span');
        value.innerHTML = `${layer}`;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
      });

      /* // Initialize MapboxSnap Library
      const mapboxSnap = new MapboxSnap({
        map: map,
        drawing: draw,
        options: {
          layers: ['data'],  // Array of layer IDs to snap to
          radius: 30,  // Snap radius in pixels
          rules: ['vertex', 'midpoint', 'edge']  // Snap rules
        },
        onSnapped:(fc)=>{
          debugger;
        }
      }); */
    });

    map.current.on('click', 'data', (e) => {
      const feature = e.features[0];

      const features = map.current.querySourceFeatures('data', {sourceLayer: 'lsoa-deprivation-copy-8dkpvc'});

      if (e.type != 'draw.create') {
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML('District: ' + feature.properties.lsoa11nm
            //+ '<br>Overall rank: ' + feature.properties
          )
          .addTo(map.current);
      }
    });

    function updateArea(e) {
        const shape_data = draw.getAll();
        const answer = document.getElementById('calculated-area');

        if (shape_data.features.length > 0) {
          const area = turf.area(shape_data)/100; // in km^2
          // Restrict the area to 2 decimal points.
          const rounded_area = Math.round(area);
          answer.innerHTML = `<p><strong>${rounded_area}</strong>km²</p>`;
        } 
    }

    //map.current.on('draw.create', updateArea);
    //map.current.on('draw.delete', updateArea);
    //map.current.on('draw.update', updateArea);

    return () => {
      map.current.remove()
    }
  }, [])

  return (
    <>
      <NavBarMap/>
      <div id='map-container' ref={mapContainerRef}/>
      <div id='calculated-area'/>

      <pre id='features'/>
      <div className='map-overlay' id='legend-bg'/>
      <div className='map-overlay' id='legend'/>
    </>
  )
}

export default App