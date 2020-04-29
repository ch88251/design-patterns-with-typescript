import { NutritionFactsBuilder } from "./nutrition-facts-builder";


export class NutritionFacts {

    private _calories: number;
    private _fat: number;
    private _fiber: number;
    private _protein: number;
    private _carbs: number;
    private _sugar: number;

    constructor(builder: NutritionFactsBuilder) {
        this._calories = builder.calories;
        this._fat = builder.fat;
        this._fiber = builder.fiber;
        this._protein = builder.protein;
        this._carbs = builder.carbohydrates;
        this._sugar = builder.sugar;
    }


    get calories(): number {
        return this._calories;
    }

    get fat(): number {
        return this._fat;
    }

    get fiber(): number {
        return this._fiber;
    }

    get protein(): number {
        return this._protein;
    }

    get carbs(): number {
        return this._carbs;
    }

    get sugar(): number {
        return this._sugar;
    }
}
