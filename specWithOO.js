var Manager = function() {
	return {
		restaurants: [],

		//functions
		getRestaurants: function() {
			return this.restaurants;
		},

		addRestaurant: function(name) {
			this.restaurants.push(new Restaurant(name));
		},

		visitRestaurant: function(index) {
			for (var i = this.restaurants.length - 1; i >= 0; i--) {
				this.restaurants[i].addDayToLastVisit();
			};
			this.restaurants[index].visitRestaurant();
		}
	};
}

var Restaurant = function(_name) {
	return {
		name: _name,
		lastVisit: 0,

		//functions
		getName: function() {
			return this.name;
		},

		getLastVisit: function() {
			return this.lastVisit;
		},

		visitRestaurant: function() {
			this.lastVisit = 0;
		},

		addDayToLastVisit: function() {
			this.lastVisit++;
		}
	};
}

describe('restaurants', function() {
	var manager;

	beforeEach(function() {
		manager = new Manager();
	});

	it('creates a manager with an empty list of restaurants', function() {
		expect(manager.getRestaurants()).toEqual([]);
	});

	it('returns the restaurant name afer a new restaurant is created', function() {
		var rest = new Restaurant('taco bell');
		expect(rest.getName()).toEqual('taco bell');
	});

	it('returns a restaurant when one is added', function() {
		manager.addRestaurant("taco bell");
		var restaurants = manager.getRestaurants();
		expect(restaurants[0].getName()).toEqual("taco bell");
	});

	it('returns the two restaurants when two are added', function() {
		manager.addRestaurant("taco bell");
		manager.addRestaurant("qdoba");
		var restaurants = manager.getRestaurants();
		expect(restaurants[0].getName()).toEqual("taco bell");
		expect(restaurants[1].getName()).toEqual("qdoba");
	});

	it('returns 0 days for the last visit when a restaurant is added', function() {
		manager.addRestaurant("taco bell");
		var restaurants = manager.getRestaurants();
		expect(restaurants[0].getLastVisit()).toEqual(0);
	});

	it('returns 1 days for the last visit when another restaurant is visited', function() {
		manager.addRestaurant("taco bell");
		manager.addRestaurant("wendies");
		manager.visitRestaurant(0);
		var restaurants = manager.getRestaurants();
		expect(restaurants[1].getLastVisit()).toEqual(1);
	});
});