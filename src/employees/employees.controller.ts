import { Controller, Get, Post, Body, Patch, Param, Delete, Query,Res,Req } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import {Prisma} from '@prisma/client'
import {Response} from 'express'
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post('createmp')
  async create(@Body() createEmployeeDto: Prisma.EmployeeCreateInput, @Res() res: Response) {
  const newEmployee =await this.employeesService.create(createEmployeeDto);
  return res.status(201).json({
    message: 'Employee created successfully',
    data: newEmployee,
  })
  

  }

  @Get()
  findAll(@Query('role') role?:'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.employeesService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string, @Res() res:Response) {
    await this.employeesService.remove(+id);
    return res.status(200).json({
      message:"User deleted successfully!!"
    })
  }
}
