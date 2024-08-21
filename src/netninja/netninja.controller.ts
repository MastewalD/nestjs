import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

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
    createNetNinja(){

    }
    @Put(':id')
    updateNetNinja(@Param("id") id:string){

    }
    @Delete(":id")
    deleteNetNinja(@Param('id') id:string){

    }



}

