import { Controller, Get, Header, Param, Res } from "@nestjs/common";
import { AppService } from './app.service';
import fs = require('fs');

function nameById(id: number) {
  return `file_${id}.pdf`;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  inv000(): string {
    return 'Hi';
  }

  @Get('/inv/:id')
  async inv001(@Param('id') id: number): Promise<string> {
    const pdf = await this.appService.createPDF();

    return new Promise(((resolve, reject) => {
      fs.writeFile(nameById(id), pdf.content, (err) => {
        if (err) {
          return reject(err.toString());
        }
        return resolve(`${pdf.spent / 1000}s`);
      });
    }));
  }

  @Get('/pdf/:id')
  @Header('Content-type', 'application/pdf')
  pdf001(@Param('id') id: number, @Res() res) {
    const filename = nameById(id);
    res.sendFile(filename, {root: '.'});
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
  }
}
