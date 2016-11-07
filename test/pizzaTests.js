import assert from 'assert'
import sinon from 'sinon'
import {Pizza, PizzaBuilder} from '../src/pizza'

suite('Pizza price calculator tests', function () {

    let priceList = {
        basePrice: 300,
        chickenIncrease: 100,
        fatDoughIncrease: 100,
        olivesIncrease: 100
    };

    suite('when calc price for base pizza', function () {
        test('will get 300 roubles', function () {
            let pizza = new PizzaBuilder()
                .withMeat()
                .withSlimDough()
                .withoutOlives()
                .whenPriceList(priceList)
                .build();

            var pizzaPrice = pizza.calcPrice(priceList);

            assert.equal(300, pizzaPrice);
        });
    });

    suite('when calc price for fat pizza', function () {
        test('will get 300 + 100 roubles', function () {
            let pizza = new PizzaBuilder()
                .withMeat()
                .withFatDough()
                .withoutOlives()
                .whenPriceList(priceList)
                .build();

            var pizzaPrice = pizza.calcPrice(priceList);

            assert.equal(300 + 100, pizzaPrice);
        });
    });

    suite('when calc price for pizza with olives', function () {
        test('will get 300 + 100 roubles', function () {
            let pizza = new PizzaBuilder()
                .withMeat()
                .withSlimDough()
                .withOlives()
                .whenPriceList(priceList)
                .build();

            var pizzaPrice = pizza.calcPrice(priceList);

            assert.equal(300 + 100, pizzaPrice);
        });
    });

    suite('when calc price for pizza with chicken', function () {
        test('will get 300 + 100 roubles', function () {
            let pizza = new PizzaBuilder()
                .withChicken()
                .withSlimDough()
                .withoutOlives()
                .whenPriceList(priceList)
                .build();

            var pizzaPrice = pizza.calcPrice(priceList);

            assert.equal(300 + 100, pizzaPrice);
        });
    });

    suite('when calc price for pizza with chicken + olives', function () {
        test('will get 300+100+100 roubles', function () {
            let pizza = new PizzaBuilder()
                .withChicken()
                .withSlimDough()
                .withOlives()
                .whenPriceList(priceList)
                .build();

            var pizzaPrice = pizza.calcPrice(priceList);

            assert.equal(300 + 100 + 100, pizzaPrice);
        });
    });

    suite('when calc price for pizza with chicken + olives + fat', function () {
        test('will get 300+100+100 roubles', function () {
            let pizza = new PizzaBuilder()
                .withChicken()
                .withFatDough()
                .withOlives()
                .whenPriceList(priceList)
                .build();

            var pizzaPrice = pizza.calcPrice(priceList);

            assert.equal(300 + 100 + 100 + 100, pizzaPrice);
        });
    });
});