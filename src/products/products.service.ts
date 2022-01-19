import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
        ){}

    findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    findOne(id: string): Promise<Product> {
        return this.productRepository.findOne(id);
    }

    createProduct(product: Product): Promise<Product> {
        return this.productRepository.save(product);
    }
}
