brain = require('brain')

var redeNeural = new brain.NeuralNetwork();

redeNeural.train([{input: {altura: 160, peso: 75, cabelo: true},output: {feminino: 1}},
                  {input: {altura: 190, peso: 110, cabelo: false},output: {masculino: 1}},
                  {input: {altura: 175, peso: 82, cabelo: true},output: {feminino: 1}},
                  {input: {altura: 160, peso: 75, cabelo: true},output: {feminino: 1}},
                  {input: {altura: 170, peso: 90, cabelo: false},output: {masculino: 1}},
                  {input: {altura: 198, peso: 98, cabelo: true},output: {masculino: 1}}])

module.exports = redeNeural
