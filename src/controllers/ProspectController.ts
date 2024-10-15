import { Body, Controller, Get, Path, Post, Route } from 'tsoa'
import prisma, { type Prospect } from '../libs/db.js'
import type { ProspectResponse } from '../models/prospect.js'

@Route('prospects')
export class ProspectsController extends Controller {
  @Get('{id}')
  public async findProspectById(@Path() id: number): ProspectResponse {
    const data = await prisma.prospect.findUnique({ where: { id } })
    return { data }
  }

  @Post()
  public async createProspectById(
    @Body() data: Partial<Prospect>,
  ): Promise<{ data: Prospect }> {
    const prospect = await prisma.prospect.create({ data })
    return { data: prospect }
  }
}
