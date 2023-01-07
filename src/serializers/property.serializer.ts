import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IPropertyResponse,
  IAddressRequest,
  IPropertyRequest,
} from "../interfaces/properties";

const addresRequestSerializer: SchemaOf<IAddressRequest> = yup.object().shape({
  district: yup.string().required(),
  zipCode: yup.string().max(8, "Invalid zipCode").required(),
  city: yup.string().required(),
  state: yup.string().max(2, "invalid State").required(),
  number: yup.string().notRequired(),
});
const propertyResponseSerializer: SchemaOf<IPropertyResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    value: yup.number().required(),
    address: addresRequestSerializer.required(),
    size: yup.number().required(),
    categoryId: yup.string().required(),
  });

const createPropertySerializer: SchemaOf<IPropertyRequest> = yup
  .object()
  .shape({
    value: yup.number().required(),
    size: yup.number().required(),
    categoryId: yup.string().required(),
    address: addresRequestSerializer.required(),
  });
export {
  propertyResponseSerializer,
  createPropertySerializer,
  addresRequestSerializer,
};
