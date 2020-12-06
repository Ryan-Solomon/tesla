import { TVehicleInfo } from '../types/types';
import Model3Image from '../img/model3Home.jpg';
import ModelSImage from '../img/modelS.jpg';
import ModelXImage from '../img/modX.jpg';
import ModelYImage from '../img/modelY.jpg';
import RoadsterImage from '../img/roadster.jpg';
import CybertruckImage from '../img/cybertruck_bg.jpg';

export const vehicleInfo: TVehicleInfo = {
  model3: {
    Name: 'Model 3',
    Image: Model3Image,
    Price: 42690,
    MainInfo: [
      { name: 'Battery', value: 'Long Range' },
      { name: 'Weight', value: '4,065lb' },
      { name: 'Acceleration', value: '3.1s 0-60 mph' },
      { name: 'Range', value: '315 miles' },
      { name: 'Drive', value: 'Dual Motor All-Wheel Drive' },
      { name: 'Seating', value: '5 Adults' },
      { name: 'Wheels', value: '20"' },
      { name: 'Cargo', value: '15 cu ft' },
      { name: 'Displays', value: '15" Center Touchscreen' },
      { name: 'Warranty', value: 'Basic Vehicle - 4 years ' },
    ],
  },
  modelX: {
    Name: 'Model X',
    Image: ModelXImage,
    Price: 74690,
    MainInfo: [
      { name: 'Battery', value: 'Long Range' },
      { name: 'Weight', value: '5,498lb' },
      { name: 'Acceleration', value: '2.6s 0-60 mph' },
      { name: 'Range', value: '341 miles' },
      { name: 'Drive', value: 'All-Wheel Drive' },
      { name: 'Seating', value: '7 Adults' },
      { name: 'Wheels', value: '22"' },
      { name: 'Cargo', value: '88 cu ft' },
      { name: 'Displays', value: '17" Touchscreen' },
      { name: 'Warranty', value: 'Basic Vehicle - 4 years ' },
    ],
  },
  modelY: {
    Name: 'Model Y',
    Image: ModelYImage,
    Price: 47680,
    MainInfo: [
      { name: 'Battery', value: 'Long Range' },
      { name: 'Weight', value: '5,498lb' },
      { name: 'Acceleration', value: '2.6s 0-60 mph' },
      { name: 'Range', value: '341 miles' },
      { name: 'Drive', value: 'All-Wheel Drive' },
      { name: 'Seating', value: '7 Adults' },
      { name: 'Wheels', value: '22"' },
      { name: 'Cargo', value: '88 cu ft' },
      { name: 'Displays', value: '17" Touchscreen' },
      { name: 'Warranty', value: 'Basic Vehicle - 4 years ' },
    ],
  },
  modelS: {
    Name: 'Model S',
    Image: ModelSImage,
    Price: 76920,
    MainInfo: [
      { name: 'Battery', value: 'Long Range' },
      { name: 'Weight', value: '5,498lb' },
      { name: 'Acceleration', value: '2.6s 0-60 mph' },
      { name: 'Range', value: '341 miles' },
      { name: 'Drive', value: 'All-Wheel Drive' },
      { name: 'Seating', value: '7 Adults' },
      { name: 'Wheels', value: '22"' },
      { name: 'Cargo', value: '88 cu ft' },
      { name: 'Displays', value: '17" Touchscreen' },
      { name: 'Warranty', value: 'Basic Vehicle - 4 years ' },
    ],
  },
  roadster: {
    Name: 'Roadster',
    Image: RoadsterImage,
    Price: 200000,
    MainInfo: [
      { name: 'Battery', value: 'Long Range' },
      { name: 'Weight', value: '5,498lb' },
      { name: 'Acceleration', value: '2.6s 0-60 mph' },
      { name: 'Range', value: '341 miles' },
      { name: 'Drive', value: 'All-Wheel Drive' },
      { name: 'Seating', value: '7 Adults' },
      { name: 'Wheels', value: '22"' },
      { name: 'Cargo', value: '88 cu ft' },
      { name: 'Displays', value: '17" Touchscreen' },
      { name: 'Warranty', value: 'Basic Vehicle - 4 years ' },
    ],
  },
  cybertruck: {
    Name: 'Cybertruck',
    Image: CybertruckImage,
    Price: 49900,
    MainInfo: [
      { name: 'Battery', value: 'Long Range' },
      { name: 'Weight', value: '5,498lb' },
      { name: 'Acceleration', value: '2.6s 0-60 mph' },
      { name: 'Range', value: '341 miles' },
      { name: 'Drive', value: 'All-Wheel Drive' },
      { name: 'Seating', value: '7 Adults' },
      { name: 'Wheels', value: '22"' },
      { name: 'Cargo', value: '88 cu ft' },
      { name: 'Displays', value: '17" Touchscreen' },
      { name: 'Warranty', value: 'Basic Vehicle - 4 years ' },
    ],
  },
};
