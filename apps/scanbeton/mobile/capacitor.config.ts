import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'com.amayas.scanbeton',
  appName: 'ScanBeton',
  webDir: '../../../dist/apps/scanbeton/mobile',

  server: {
    androidScheme: 'https', // ✅ permet aux WebView Android d'ouvrir https://localhost
  },

  android: {
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined,
      releaseType: undefined
    }
  },

  ios: {
    scheme: 'msauth.scanbeton://auth' // ✅ utilisé pour les redirections personnalisées iOS (deep link)
  },

  plugins: {
    Keyboard: {
      resize: KeyboardResize.None
    }
  },

  // ✅ UA utile si tu veux simuler un vrai browser mobile pour certains providers
  overrideUserAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1"
};

export default config;