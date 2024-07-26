import { ApiProperty } from "@nestjs/swagger"
import * as Joi from "joi"
import {CREATE, JoiSchema, UPDATE} from 'nestjs-joi'

export class CreateUserDto {
    @ApiProperty({
        default:"Anna",
        description:"user name"
    })
    @JoiSchema([CREATE],Joi.string().required())
    @JoiSchema([UPDATE],Joi.string().optional())
    name:string
    
    @JoiSchema([CREATE],Joi.string().required())
    @JoiSchema([UPDATE],Joi.string().optional())
    @ApiProperty({
        default:"Anyan",
        description:"user surname"
    })
    surname:string
    
    @JoiSchema([CREATE],Joi.number().integer().min(10).max(150).required())
    @JoiSchema([UPDATE],Joi.number().integer().min(10).max(150).optional())
    @ApiProperty({
        default:20,
        description:"user age"
    })
    age:number
    
    @JoiSchema([CREATE],Joi.string().email().required())
    @JoiSchema([UPDATE],Joi.string().email().optional())
    @ApiProperty({
        default:"anna@gmail.com",
        description:"user email"
    })
    email:string
    
    @JoiSchema([CREATE],Joi.number().min(0).required())
    @JoiSchema([UPDATE],Joi.number().min(0).optional())
    @ApiProperty({
        default:0,
        description:"user salary"
    })
    salary:number
}
