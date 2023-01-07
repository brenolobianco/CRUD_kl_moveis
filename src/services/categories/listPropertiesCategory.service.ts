
import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { AppError } from "../../error"


const listCategoryPropertyService = async (category_id:string) => {

const categoryRepository= await AppDataSource.getRepository(Categories)

   const category = await categoryRepository.findOne({
    where:{id: category_id},
        relations:{
            properties:true
        }})


    if (!category) {
        throw new AppError("Invalid Id", 404);
    }
    return category
}
export { listCategoryPropertyService }