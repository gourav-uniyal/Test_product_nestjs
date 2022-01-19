import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";

import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    async createProduct(@Res() response, @Body()product: Product) {
        const newProduct = await this.productsService.createProduct(product);
        return response.status(HttpStatus.CREATED).json({
            newProduct
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const products = await this.productsService.findAll();
        return response.status(HttpStatus.OK).json({
            products
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const product = await this.productsService.findOne(id);
        return response.status(HttpStatus.OK).json({
            product
        })
    }
}
