function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// have given two the the three country names so the two will be printed as described
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('New York'); // as we have not provided the country name it will be unown as default
