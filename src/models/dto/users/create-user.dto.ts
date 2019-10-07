import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto{
    @MinLength(3)
    @IsNotEmpty()
    @ApiModelProperty()
    readonly firstName: string;
    
    @IsString()
    @IsOptional()
    @ApiModelProperty()
    readonly lastName: string;

    @IsNotEmpty()
    @MinLength(8)
    @ApiModelProperty()
    password: string;
    
    @ApiModelProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    
    @IsNotEmpty()
    @ApiModelProperty()
    readonly country: string;

    @ApiModelProperty()
    readonly role: 'ADMIN' | 'USER';

    readonly createdAt: Date;

    readonly updatedAt: Date;
}

export class UserLogin {

    @IsEmail()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly email: string;
  
    @MinLength(8)
    @IsNotEmpty()
    @ApiModelProperty()
    readonly password: string;
  
  }

  export class UpdateUserDto{
    @ApiModelProperty()
    readonly firstName: string;
    
    @ApiModelProperty()
    readonly lastName: string;

    @ApiModelProperty()
    @IsEmail()
    readonly email: string;
    
    @ApiModelProperty()
    readonly country: string;

    readonly updatedAt: Date;
}