import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import { Box } from '@mui/material';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { Icon, Style } from 'ol/style';
import { Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';

import './App.css'

function App() {

      const mapRef = useRef();
      const [isLoading, setIsLoading] = useState(false);

      useLayoutEffect(() => {
          new Map({
              target: mapRef.current,
              layers: [
                  new TileLayer({
                      source: new OSM(),
                  }),
              ],
              // tileOptions: { crossOriginKeyword: 'anonymous' },
              view: new View({
                  center: fromLonLat([-72.0131272, -39.5591129]),
                  zoom: 15,
              }),
          });
      }, [false]);

      return (
          <Box
              component='div'
              ref={mapRef}
              // className={`map ${props.className}`}
              sx={{
                  width: '100vw',
                  height: '100vh',
              }}
              id='map'
          ></Box>
      );

}

export default App
