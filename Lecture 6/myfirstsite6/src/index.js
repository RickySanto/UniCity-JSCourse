import {Food} from './app/food.js';
import {FatFreeFood} from './app/FatFreeFood.js';

const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);

chicken_breast.print(); // 'Chicken Breast | 26g P :: 0g C :: 3.5g F'
console.log(chicken_breast.protein); // 26 (LINE A)
console.log("Hello");


const fat_free_yogurt = new FatFreeFood('Greek Yogurt', 16, 12);
fat_free_yogurt.print();