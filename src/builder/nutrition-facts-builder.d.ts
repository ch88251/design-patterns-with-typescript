import { NutritionFacts } from './nutrition-facts';
export declare class NutritionFactsBuilder {
    private readonly _servingSize;
    private readonly _servings;
    private _calories;
    private _carbohydrates;
    private _sodium;
    private _fat;
    private _fiber;
    private _protein;
    private _sugar;
    constructor(servingSize: number, servings: number);
    withCalories(value: number): this;
    withCarbs(value: number): this;
    withSodium(value: number): this;
    withFat(value: number): this;
    withFiber(value: number): this;
    withProtein(value: number): this;
    withSugar(value: number): this;
    build(): NutritionFacts;
    get servingSize(): number;
    get servings(): number;
    get calories(): number;
    get carbohydrates(): number;
    get sodium(): number;
    get fat(): number;
    get fiber(): number;
    get protein(): number;
    get sugar(): number;
}
//# sourceMappingURL=nutrition-facts-builder.d.ts.map