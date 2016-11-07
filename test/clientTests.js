import assert from 'assert'
import sinon from 'sinon'
import {Client, ClientBuilder} from '../src/client'

suite('Client buy pizza tests', function () {

    suite('when pizza price is 300', function () {
        let pizzaStub = {
            calcPrice: function () {
                return 300;
            }
        };

        suite('when pay amount is 400', function () {
            test('will get pizza', function () {
                let client = new ClientBuilder()
                    .whenOrderPizza(pizzaStub)
                    .whenPayForPizza(400)
                    .build();

                var isSuccess = client.buyPizza();

                assert.equal(true, isSuccess);
            });
        });

        suite('when pay amount is 200', function () {
            test('will NOT get pizza', function () {
                let client = new ClientBuilder()
                    .whenOrderPizza(pizzaStub)
                    .whenPayForPizza(200)
                    .build();

                var isSuccess = client.buyPizza();

                assert.equal(false, isSuccess);
            });
        });

        suite('when NOT pay for pizza', function () {
            test('will NOT get pizza', function () {
                let client = new ClientBuilder()
                    .whenOrderPizza(pizzaStub)
                    .build();

                var isSuccess = client.buyPizza();

                assert.equal(false, isSuccess);
            });
        });
    });

    suite('when pizza not selected', function () {
        test('will NOT get pizza', function () {
            let client = new ClientBuilder()
                .whenPayForPizza(200)
                .build();

            assert.throws(() => client.buyPizza(), /Pizza not selected/);
        });
    });
});