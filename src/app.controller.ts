import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor (
    private prisma: PrismaService,
  ) {}


  @Get()
  async getHello(): string {
     const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: 'Capitão',
        name: 'Guilherme',
        function: 'Liderar'
      }
     })

    return {
      member,
    }
  }
}
