// API client with automatic auth token inclusion
const API_BASE_URL = 'http://localhost:3001/api/v1';

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private getAuthHeader(): Record<string, string> {
    const token = localStorage.getItem('authToken');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeader(),
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Network error' }));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);

// Convenience methods for specific endpoints
export const menuAPI = {
  getCategories: () => apiClient.get('/menu/categories'),
  getMenuItems: () => apiClient.get('/menu/items'),
  createCategory: (data: any) => apiClient.post('/menu/categories', data),
  createMenuItem: (data: any) => apiClient.post('/menu/items', data),
};

export const tableAPI = {
  getTables: () => apiClient.get('/tables'),
  getAvailableTables: () => apiClient.get('/tables/available'),
  getOccupiedTables: () => apiClient.get('/tables/occupied'),
  createTable: (data: any) => apiClient.post('/tables', data),
  updateTableStatus: (id: number, data: any) => apiClient.patch(`/tables/${id}/status`, data),
};

export const orderAPI = {
  getOrders: () => apiClient.get('/orders'),
  createOrder: (data: any) => apiClient.post('/orders', data),
  updateOrder: (id: number, data: any) => apiClient.put(`/orders/${id}`, data),
  updateOrderStatus: (id: number, data: any) => apiClient.patch(`/orders/${id}/status`, data),
  updatePaymentStatus: (id: number, data: any) => apiClient.patch(`/orders/${id}/payment`, data),
};
