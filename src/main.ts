import { 
  fetchLatestBaileysVersion,
  useMultiFileAuthState,
} from '@whiskeysockets/baileys';

import { FastwaFactory } from '@fastwa/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const { version } = await fetchLatestBaileysVersion();
  const { state, saveCreds } = await useMultiFileAuthState('.fastwa');

  const app = await FastwaFactory.create(AppModule, {
    version,
    auth: state,
    printQRInTerminal: true,
    saveCreds,
  });

  await app.listen();
}
bootstrap()
