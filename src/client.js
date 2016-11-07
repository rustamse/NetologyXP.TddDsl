'use strict';

export class Client {
    constructor(pizza, payAmount) {
        this.pizza = pizza;
        this.payAmount = payAmount;
    }

    buyPizza() {
        if (this.pizza == null) {
            throw new Error("Pizza not selected");
        }

        let pizzaPrice = this.pizza.calcPrice();

        return this.payAmount >= pizzaPrice;
    }
}

export class ClientBuilder {
    constructor() {
        this.state = {
            pizza: null,
            payAmount: 0
        };
    }

    whenOrderPizza(pizza) {
        this.state.pizza = pizza;
        return this;
    }

    whenPayForPizza(payAmount) {
        this.state.payAmount = payAmount;
        return this;
    }

    build() {
        return new Client(this.state.pizza, this.state.payAmount);
    }
}
