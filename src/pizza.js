'use strict';

export class Pizza {
    constructor(component, isSlimDough, hasOlives, priceList) {
        this.component = component;
        this.isSlimDough = isSlimDough;
        this.hasOlives = hasOlives;
        this.priceList = priceList;
    }

    calcPrice() {
        let totalPrice = this.priceList.basePrice;

        if (this.component == 'chicken')
            totalPrice += this.priceList.chickenIncrease;

        if (!this.isSlimDough)
            totalPrice += this.priceList.fatDoughIncrease;

        if (this.hasOlives)
            totalPrice += this.priceList.olivesIncrease;

        return totalPrice;
    }
}

export class PizzaBuilder {
    constructor() {
        this.state = {
            component: 'meat',
            isSlimDough: false,
            hasOlives: false,
            priceList: {}
        };
    }

    withMeat() {
        this.state.component = 'meat';
        return this;
    }

    withChicken() {
        this.state.component = 'chicken';
        return this;
    }

    withSlimDough() {
        this.state.isSlimDough = true;
        return this;
    }

    withFatDough() {
        this.state.isSlimDough = false;
        return this;
    }

    withOlives() {
        this.state.hasOlives = true;
        return this;
    }

    withoutOlives() {
        this.state.hasOlives = false;
        return this;
    }

    whenPriceList(priceList) {
        this.state.priceList = priceList;
        return this;
    }

    build() {
        return new Pizza(this.state.component, this.state.isSlimDough, this.state.hasOlives, this.state.priceList);
    }
}
