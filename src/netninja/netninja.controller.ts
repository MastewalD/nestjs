import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateNetNinjaDto } from './dto/create-netninja.dto';

@Controller('netninja')
export class NetninjaController {

    @Get()
    getNetNinja(){
        return []
    
    }
    @Get(":id")
    getOneNetNinja(@Param('id') id:String){
        return {id}

    }
    @Post()
    createNetNinja(@Body("title") title:CreateNetNinjaDto){
        return {
            title
        }

    }
    @Put(':id')
    updateNetNinja(@Param("id") id:string){

    }
    @Delete(":id")
    deleteNetNinja(@Param('id') id:string){

    }



}

