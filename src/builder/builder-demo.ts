import { NutritionFactsBuilder } from './nutrition-facts-builder';

const nutritionFacts = new NutritionFactsBuilder(1, 4)
  .withCalories(100)
  .withFat(2.2)
  .withFiber(1.7)
  .withSodium(200)
  .withCarbs(22.5)
  .withProtein(50.1)
  .withSugar(22.5).build();

console.log(nutritionFacts);
