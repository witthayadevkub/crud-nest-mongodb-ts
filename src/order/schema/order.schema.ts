import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose"

export type OrderDocument = Order & Document

@Schema()
export class Order{
    @Prop({ type: Types.ObjectId, ref:"Product", requried:true})
    productId: Types.ObjectId

    @Prop({required: true })
    quantity: number
}

export const OrderSchema = SchemaFactory.createForClass(Order)