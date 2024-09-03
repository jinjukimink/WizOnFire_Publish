const BASE_URL = "http://localhost:5500";
export const api = async (
  path: string,
  options?: {
    method?: string;
    headers?: {
      "Content-Type": string;
    };
    body?: any;
  }
) => {
  try {
    const requestOptions = {
      ...{
        headers: {
          "Content-Type": "application/json",
        },
      },
      ...options,
    };

    const response = await fetch(`${BASE_URL}/${path}`, requestOptions);
    if (!response.ok) {
      throw new Error("HTTP error! Failed to Fetch");
    }
    return await response.json();
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "Unknown error");
  }
};
