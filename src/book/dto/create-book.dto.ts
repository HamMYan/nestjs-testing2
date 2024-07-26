import { ApiProperty } from "@nestjs/swagger";
import * as Joi from "joi";
import { CREATE, JoiSchema, UPDATE } from "nestjs-joi";

export class CreateBookDto {
    @ApiProperty()
    @JoiSchema([CREATE],Joi.string().required())
    @JoiSchema([UPDATE],Joi.string().optional())
    name:string

    @ApiProperty()
    @JoiSchema([CREATE],Joi.string().required())
    @JoiSchema([UPDATE],Joi.number().optional())
    price:number

    @ApiProperty()
    @JoiSchema([CREATE],Joi.string().required())
    @JoiSchema([UPDATE],Joi.number().optional())
    count:number

    @ApiProperty()
    @JoiSchema([CREATE],Joi.number().required())
    userId:number
}
