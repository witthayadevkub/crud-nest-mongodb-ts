import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

import { UpdateOrderDto } from './dto/update-order.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from "./schema/order.schema"

import { ProductsService } from 'src/products/products.service';


@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) 
    private orderModel:Model<OrderDocument>,
    private produvtsService:ProductsService
  ) {}

  async create(createOrderDto: CreateOrderDto):Promise<Order>{
    const productResult = await this.produvtsService.findOne(createOrderDto.productId)
    if(!productResult){
      throw new NotFoundException('product not found')
    }
    const result = this.orderModel.create(createOrderDto)
    return result
  }

  findAll() {
    return this.orderModel.find().populate('productId');
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} order`;
  // }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
