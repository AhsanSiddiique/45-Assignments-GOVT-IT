//created a functiion that recives the model and the amnufacturere name also if gave it some features color or etc.
function car_info(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    return { manufacturer: manufacturer, model: model, features: features };
}
// data for car info
console.log(car_info('Toyota', 'Vigo', 'Black', '4x4')); // coming to get u
console.log(car_info('Tesla', 'Model 3')); // gave it no feautures
console.log(car_info('Bugati', 'veyron', 'Black')); //dream car
