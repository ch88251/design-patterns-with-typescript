import { NutritionFactsBuilder } from "./nutrition-facts-builder";
export declare class NutritionFacts {
    private _calories;
    private _fat;
    private _fiber;
    private _protein;
    private _carbs;
    private _sugar;
    constructor(builder: NutritionFactsBuilder);
    get calories(): number;
    get fat(): number;
    get fiber(): number;
    get protein(): number;
    get carbs(): number;
    get sugar(): number;
}
//# sourceMappingURL=nutrition-facts.d.ts.map