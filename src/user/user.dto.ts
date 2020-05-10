import { IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UserRO {
  id: string;
  username: string;
  created: Date;
  token?: string;
}
