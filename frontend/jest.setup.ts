import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';

Object.defineProperty(window, 'TextEncoder', {
  writable: true,
  value: TextEncoder
});

Object.defineProperty(window, 'TextDecoder', {
  writable: true,
  value: TextDecoder
});