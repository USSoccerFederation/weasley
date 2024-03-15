export class FetchService {

	static get(url, headers = {}) {

		if (url.indexOf("/") === 0) {
			url = `https://ussf-opta-api-prod.azurewebsites.net${url}`; // eslint-disable-line
		}

		return fetch(url, { 
			method: "GET",
			headers: {
				...headers
			}
		}).then(response => response.json()).catch(e => console.error(e));
	}

	static post(url, data, headers = {}) {

		if (url.indexOf("/") === 0) {
			url = `https://localhost:44314${url}`; // eslint-disable-line
		}
		
		return fetch(url, { 
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				...headers
			}
		}).then(response => response.json()).catch(e => console.error(e));
	}

	static delete(url, headers = {}) {

		if (url.indexOf("/") === 0) {
			url = `https://localhost:44314${url}`; // eslint-disable-line
		}
		
		return fetch(url, { 
			method: "DELETE",
			headers: {
				...headers
			}
		}).then(response => response.json()).catch(e => console.error(e));
	}
}