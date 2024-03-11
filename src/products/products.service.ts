import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

//mongogoose
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}


  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productModel.create(createProductDto)
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find()

  }

  async findOne(id: string): Promise<Product> {
   return this.productModel.findById(id)
  }

  async update(id: string, updateProductDto: UpdateProductDto):Promise<Product> {
    const result = await this.productModel.findByIdAndUpdate(id, updateProductDto,{new: true})
    if(!result) {
      throw new NotFoundException('id not found')
    }
    return result
  }

  async remove(id: string) {
    const result = await this.productModel.findByIdAndDelete(id)
    if(!result){
    throw new NotFoundException('id not found')
    }
    return { message:"delete successfully"}
  }
}
