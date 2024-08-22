import { PartialType } from '@nestjs/mapped-types';
import { CreateNetNinjaDto } from './create-netNinja.dto';

export class UpdateNetNinjaDto extends PartialType(CreateNetNinjaDto) {
    title: string
}
