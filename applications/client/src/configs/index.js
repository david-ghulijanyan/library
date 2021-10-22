const { API_BASE } = process.env;
const API_URL = `${API_BASE}/v1`;
const API_FILE_PATH = "uploads";
const IMAGE_PATH = `${API_BASE}${API_FILE_PATH ? `/${API_FILE_PATH}` : ""}`;

export { API_URL, API_FILE_PATH, IMAGE_PATH };
