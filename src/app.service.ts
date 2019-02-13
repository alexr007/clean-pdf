import { Injectable } from '@nestjs/common';
const puppeteer = require('puppeteer');

@Injectable()
export class AppService {
  async createPDF() {
    const startedAt = new Date();
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://google.com', { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();
    const doneAt = new Date();
    // @ts-ignore
    const delta = doneAt - startedAt;
    return {
      content: pdf,
      spent: delta
    }
  }
}
