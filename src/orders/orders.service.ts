import { HttpStatus, Injectable, Logger, OnModuleInit, ParseUUIDPipe } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaClient } from '@prisma/client';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class OrdersService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('OrdersService');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database conected');
  }

  create(createOrderDto: CreateOrderDto) {
    
    return this.order.create({
      data: createOrderDto
    })
  }

  findAll() {
    return `This action returns all orders`;
  }

  async findOne(id: string) {
    const order = await this.order.findFirst({
      where: { id },
    });

    if (!order) {
      throw new RpcException({
        message: `order with id ${id} not found`,
        status: HttpStatus.NOT_FOUND,
      });
    }

    return order;
  }
}
