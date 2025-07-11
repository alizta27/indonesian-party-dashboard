import axios from "axios";

const externalApiClient = axios.create({
	timeout: 50000,
	headers: { "Content-Type": "application/json" },
});

export default externalApiClient;
