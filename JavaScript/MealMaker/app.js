const meals = [['Schnitzel', 12.99], ['Spaghetti', 8.99], ['Pancakes', 7.99]]

const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if(typeof mealToCheck === 'string')
            return this._meal = mealToCheck;
        else 
            console.log('Meal must be a string.');
    },
    set price(priceToCheck) {
        if(typeof priceToCheck === 'number')
            return this._price = priceToCheck;
        else
            console.log('Price must be a number.')
    },
    get todaysSpecial() {
        if(this._meal && this._price)
            return `Today's special is ${this._meal} for $${this._price}!`;
        else
            return 'Meal or price was not set correctly!';
    }

}
const mealChoice = Math.floor(Math.random() * 3);
menu.price = meals[mealChoice][1];
menu.meal = meals[mealChoice][0];
console.log(menu.todaysSpecial);