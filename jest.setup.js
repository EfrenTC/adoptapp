// jest.setup.js
import { TextEncoder, TextDecoder } from 'util';

// Configura TextEncoder y TextDecoder globalmente
globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder;
// Assign to 'global' only if it exists (Node.js environment)
if (typeof globalThis !== 'undefined') {
  globalThis.TextEncoder = TextEncoder;
  globalThis.TextDecoder = TextDecoder;
}