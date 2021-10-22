const localStorageService = Symbol("LocalStorageService");
const localStorageServiceGuard = Symbol("Guard");

class LocalStorageService {
	constructor(guard) {
		if (guard !== localStorageServiceGuard) {
			throw new Error("Use LocalStorageService.instance instead of new");
		}
		// eslint-disable-next-line no-undef
		this.localStorage = typeof window !== "undefined" ? localStorage : null;
	}

	static get instance() {
		if (!this[localStorageService]) {
			this[localStorageService] = new LocalStorageService(localStorageServiceGuard);
		}

		// eslint-disable-next-line no-undef
		this.localStorage = typeof window !== "undefined" ? localStorage : null;

		return this[localStorageService];
	}

	static set instance(v) {
		throw new Error("Can't change constant property!");
	}

	get user() {
		return this.item("user");
	}

	set user(userData = null) {
		return this.item("user", JSON.stringify(userData));
	}

	item(key, value) {
		let result = null;
		if (this.localStorage) {
			if (value) {
				result = value;
				this.localStorage.setItem(key, value);
			} else {
				result = this.localStorage.getItem(key);
			}
		}

		return result;
	}

	clear(key) {
		if (this.localStorage) {
			this.localStorage.removeItem(key);
		}
	}
}

export default LocalStorageService;
