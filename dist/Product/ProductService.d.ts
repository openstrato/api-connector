import { BaseService } from "../Common/BaseService";
export interface ProductInterface {
    id: string;
    name: string;
    variants: VariantInterface[];
}
export interface TranslatedLabelInterface {
    lang: string;
    label: string;
}
export interface VariantInterface {
    id: string;
    sku?: string;
    quantity?: number;
    isActive?: boolean;
    hash?: string;
    attributes?: VariantAttributeInterface[];
}
/**
 * Hydrated variant attribute as returned by product_api reads (labels resolved from Product.attributes).
 */
export interface VariantAttributeInterface {
    attributeId: string;
    code?: string;
    label: string;
    translations?: TranslatedLabelInterface[];
    values: VariantAttributeValueInterface[];
}
export interface VariantAttributeValueInterface {
    valueId: string;
    code?: string;
    label: string;
    translations?: TranslatedLabelInterface[];
}
export declare class ProductService extends BaseService<ProductInterface> {
    protected baseUrl: string;
}
