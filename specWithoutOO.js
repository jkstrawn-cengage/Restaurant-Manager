var restaurantNames = [];
var restaurantDays = [];

function getRestaurantNames() {
	return restaurantNames;
}

function getRestaurantDays() {
	return restaurantDays;
}

function addRestaurant(name) {
	restaurantNames.push(name);
	restaurantDays.push(0);
}

function visitRestaurant(index) {
	for (var i = restaurantDays.length - 1; i >= 0; i--) {
		restaurantDays[i]++;
	};
	restaurantDays[index] = 0;
}

describe('restaurants', function() {

	beforeEach(function() {
		restaurantNames = [];
		restaurantDays = [];
	});

	it('returns an empty list of restaurant names', function() {
		expect(getRestaurantNames()).toEqual([]);
	});
	
	it('returns a restaurant name when a new one is added', function() {
		addRestaurant('taco bell');
		var restaurants = getRestaurantNames();
		expect(restaurants[0]).toEqual('taco bell');
	});
	
	it('returns an empty list of days corresponding to the last visits of the restaurants', function() {
		expect(getRestaurantDays()).toEqual([]);
	});
	
	it('returns 0 days when a restaurant is added', function() {
		addRestaurant('taco bell');
		var restaurants = getRestaurantDays();
		expect(restaurants[0]).toEqual(0);
	});

	it('returns 1 days for the restaurant when a different restaurant is visited', function() {
		addRestaurant('taco bell');
		addRestaurant('wendies');
		visitRestaurant(1);
		var days = getRestaurantDays();
		expect(days[0]).toEqual(1);
	});
});