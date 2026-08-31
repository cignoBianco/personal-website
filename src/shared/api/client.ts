const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:8000"; 

export class ApiError extends Error {
  readonly status: number;
  readonly details?: unknown;

  constructor(
    message: string,
    status: number,
    details?: unknown,
  ) {
    super(message);

    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

// async function parseResponse(
//     response: Response,
//   ): Promise<unknown> {
//     if (response.status === 204) {
//       return null;
//     }
  
//     const contentType =
//       response.headers.get(
//         "content-type",
//       );
  
//     if (
//       contentType?.includes(
//         "application/json",
//       )
//     ) {
//       return response.json();
//     }
  
//     return response.text();
//   }

async function parseResponseBody(
  response: Response,
): Promise<unknown> {
  const contentType = response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export async function apiRequest<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(
    `${API_URL}${path}`,
    {
      ...options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...options?.headers,
      },
    },
  );

  const body = await parseResponseBody(response);

  if (!response.ok) {
    throw new ApiError(
      `API request failed: ${response.status}`,
      response.status,
      body,
    );
  }

  return body as T;
}