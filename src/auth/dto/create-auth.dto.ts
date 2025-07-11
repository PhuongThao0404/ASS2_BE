import {
    IsString,
    IsEmail,
    IsNotEmpty,
    MinLength,
    Matches,
  } from 'class-validator';
  
  export class CreateAuthDto {
  
    @IsEmail({}, { message: 'Invalid email format.' })
    @IsNotEmpty({ message: 'Email is required.' })
    email: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Password is required.' })
    @MinLength(10,{ message: 'Password must be at least 10 character long.'})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message:
        'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number or special character.',
    })
    password: string;
  
   
  }