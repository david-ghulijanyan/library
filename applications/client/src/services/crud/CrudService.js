/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
import axios from "axios";
import { makeRequest } from "@library/utils";

class CrudService {
	constructor({ apiUrl, resourcePath = "articles" }) {
		this.apiUrl = apiUrl;
		this.resourcePath = resourcePath;
	}

	async create(resourceData) {
		// eslint-disable-next-line no-undef
		const formData = new FormData();

		Object.keys(resourceData).forEach(key => {
			formData.append(key, resourceData[key]);
		});
		const { data, error } = await makeRequest(axios, {
			url: `${this.apiUrl}/${this.resourcePath}`,
			data: formData,
			method: "POST",
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		let result = data;

		if (error) {
			result = this.handleError(error);
		}

		return result;
	}

	async read(id) {
		const { data, error } = await makeRequest(axios, { url: `${this.apiUrl}/${this.resourcePath}/${id}` });
		let result = data;

		if (error) {
			result = this.handleError(error);
		}

		return result;
	}

	async update(resourceData) {
		// eslint-disable-next-line no-undef
		const formData = new FormData();

		Object.keys(resourceData).forEach(key => {
			if (key !== "id") formData.append(key, resourceData[key]);
		});
		const { data, error } = await makeRequest(axios, {
			url: `${this.apiUrl}/${this.resourcePath}/${resourceData.id}`,
			data: formData,
			method: "PATCH",
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		let result = data;

		if (error) {
			result = this.handleError(error);
		}

		return result;
	}

	async delete(id) {
		const { data, error } = await makeRequest(axios, {
			url: `${this.apiUrl}/${this.resourcePath}/${id}`,
			method: "DELETE",
		});
		let result = data;

		if (error) {
			result = this.handleError(error);
		}

		return result;
	}

	handleError(error) {
		// some error handler
		alert(JSON.stringify(error));

		return null;
	}
}

export default CrudService;
