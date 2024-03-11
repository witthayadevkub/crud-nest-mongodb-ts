import { IsMongoId, IsNotEmpty, IsString, IsNumber, IsOptional, Min } from 'class-validator'
export class CreateOrderDto {
    @IsMongoId()
    @IsNotEmpty()
    productId: string;

    @IsNumber()
    @Min(1)
    quantity: number
}

