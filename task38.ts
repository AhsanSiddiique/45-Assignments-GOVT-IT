function describe_city(city: string, country: string = 'Unknown'): void 
{console.log(`${city} is in ${country}.`);}

// have given two the the three country names so the two will be printed as described
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('New York');  // as we have not provided the country name it will be unown as default

