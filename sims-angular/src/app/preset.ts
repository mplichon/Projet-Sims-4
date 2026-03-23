import { definePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara';

export const SimsEncyclopediePreset = definePreset(Lara, {
  primitive: {
    lime: {
      0: '#f2fbf5',
      50: '#e3f7ea',
      100: '#c7efd5',
      200: '#9fe3b9',
      300: '#74d69c',
      400: '#57cd86',
      500: '#48c774',
      600: '#3fb06a',
      700: '#35985c',
      800: '#2b7a4c',
      900: '#215c3c',
      950: '#143827',
    },
  },
  semantic: {
    primary: {
      0: '{lime.0}',
      50: '{lime.50}',
      100: '{lime.100}',
      200: '{lime.200}',
      300: '{lime.300}',
      400: '{lime.400}',
      500: '{lime.500}',
      600: '{lime.600}',
      700: '{lime.700}',
      800: '{lime.800}',
      900: '{lime.900}',
      950: '{lime.950}',
    },
  },
});
