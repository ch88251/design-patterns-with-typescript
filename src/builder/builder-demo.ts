import { NutritionFactsBuilder } from './nutrition-facts-builder';

const nutritionFacts = new NutritionFactsBuilder(1, 4)
  .withCalories(100)
  .withFat(2.2).build();

console.log(nutritionFacts);
