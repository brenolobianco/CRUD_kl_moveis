
import AppDataSource from '../../data-source'
import { Categories } from '../../entities/categories.entity'
import { AppError } from '../../error'
import { ICategoryRequest } from '../../interfaces/categories'

const listCategoriesService = async(): Promise<ICategoryRequest[]> => {
    const categoriesRepository = AppDataSource.getRepository(Categories)
   
    const categories = await categoriesRepository.find()
   
    return categories

}

export default listCategoriesService