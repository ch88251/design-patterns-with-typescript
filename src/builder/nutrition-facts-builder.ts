import { NutritionFacts } from './nutrition-facts';

export class NutritionFactsBuilder {

    private readonly _servingSize: number;
    private readonly _servings: number;
    private _calories: number;
    private _carbohydrates: number;
    private _sodium: number;
    private _fat: number;
    private _fiber: number;
    private _protein: number;
    private _sugar: number;

    public constructor(servingSize: number, servings: number) {
        this._servingSize = servingSize;
        this._servings = servings;
    }

    public withCalories(value: number) {
        this._calories = value;
        return this;
    }

    public withCarbs(value: number) {
        this._carbohydrates = value;
        return this;
    }

    public withSodium(value: number) {
        this._sodium = value;
        return this;
    }

    public withFat(value: number) {
        this._fat = value;
        return this;
    }

    public withFiber(value: number) {
        this._fiber = value;
        return this;
    }

    public withProtein(value: number) {
        this._protein = value;
        return this;
    }

    public withSugar(value: number) {
        this._sugar = value;
        return this;
    }

    public build() {
        return new NutritionFacts(this);
    }


    get servingSize(): number {
        return this._servingSize;
    }

    get servings(): number {
        return this._servings;
    }

    get calories(): number {
        return this._calories;
    }

    get carbohydrates(): number {
        return this._carbohydrates;
    }

    get sodium(): number {
        return this._sodium;
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

    get sugar(): number {
        return this._sugar;
    }
}

