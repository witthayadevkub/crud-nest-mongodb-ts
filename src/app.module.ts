import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nestdb',),ProductsModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
