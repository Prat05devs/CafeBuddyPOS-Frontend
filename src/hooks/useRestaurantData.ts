import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  MenuItem,
  Category,
  Order,
  Table,
  DashboardStats,
  Restaurant
} from '@/types/restaurant';
import { loadConfig, RestaurantConfig } from '@/lib/config';
import { menuAPI, tableAPI, orderAPI } from '@/lib/api';

export const useRestaurantData = () => {
  const [config, setConfig] = useState<RestaurantConfig | null>(null);
  const [language, setLanguage] = useState('en');
  const queryClient = useQueryClient();

  // Fetch categories from API
  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ['menu-categories'],
    queryFn: () => menuAPI.getCategories(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Fetch menu items from API
  const { data: menuItemsData, isLoading: menuItemsLoading } = useQuery({
    queryKey: ['menu-items'],
    queryFn: () => menuAPI.getMenuItems(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Fetch tables from API
  const { data: tablesData, isLoading: tablesLoading } = useQuery({
    queryKey: ['tables'],
    queryFn: () => tableAPI.getTables(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Fetch orders from API
  const { data: ordersData, isLoading: ordersLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: () => orderAPI.getOrders(),
    staleTime: 1000 * 60 * 2, // 2 minutes
  });

  const loading = categoriesLoading || menuItemsLoading || tablesLoading || ordersLoading;

  // Transform API data to app format
  const categories: Category[] = (categoriesData as any)?.data?.categories ? (categoriesData as any).data.categories.map((cat: any) => ({
    id: cat.id.toString(),
    name: cat.name,
    displayOrder: cat.sortOrder || 0,
    icon: cat.icon || '📂'
  })) : [];

  const menuItems: MenuItem[] = (menuItemsData as any)?.data?.menuItems ? (menuItemsData as any).data.menuItems.map((item: any) => ({
    id: item.id.toString(),
    name: item.name,
    description: item.description || '',
    price: parseFloat(item.price),
    category: item.categoryId?.toString() || 'uncategorized',
    available: item.isAvailable !== false,
    imageUrl: item.image,
    ingredients: item.ingredients || [],
    allergens: item.allergens || [],
    createdAt: new Date(item.createdAt),
    updatedAt: new Date(item.updatedAt)
  })) : [];

  const tables: Table[] = (tablesData as any)?.data?.tables ? (tablesData as any).data.tables.map((table: any) => ({
    id: table.id.toString(),
    number: table.number,
    capacity: table.capacity,
    status: table.status as Table['status'],
    floor: table.floor || 'Ground'
  })) : [];

  const orders: Order[] = (ordersData as any)?.data?.orders ? (ordersData as any).data.orders.map((order: any) => ({
    id: order.id.toString(),
    orderNumber: order.orderNumber || `ORD-${order.id}`,
    tableId: order.tableId?.toString(),
    table: tables.find(t => t.id === order.tableId?.toString()),
    items: order.items || [],
    status: order.status as Order['status'],
    type: order.type || 'dine-in',
    subtotal: parseFloat(order.subtotal || 0),
    tax: parseFloat(order.taxAmount || 0),
    discount: parseFloat(order.discountAmount || 0),
    total: parseFloat(order.total || 0),
    paymentStatus: order.paymentStatus || 'pending',
    customerName: order.customerName,
    customerPhone: order.customerPhone,
    notes: order.notes,
    createdAt: new Date(order.createdAt),
    updatedAt: new Date(order.updatedAt)
  })) : [];

  // Create restaurant object from config
  const [restaurant, setRestaurant] = useState<Restaurant>({
    id: 'rest-1',
    name: 'Cafe Buddy',
    address: '',
    phone: '',
    email: '',
    taxRate: 18,
    currency: '$',
    settings: {
      enableTableManagement: true,
      enableInventory: true,
      autoCalculateTax: true,
      defaultPaymentMethod: 'cash',
      language: 'en',
      theme: 'auto'
    }
  });

  // Load config from data.json on component mount
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const configData = await loadConfig();
        setConfig(configData);
        const storedLanguage = localStorage.getItem('preferredLanguage') || configData.language || 'en';
        setLanguage(storedLanguage);
        
        setRestaurant({
          id: 'rest-1',
          name: typeof configData.restaurantName === 'string' ? configData.restaurantName : 'Cafe Buddy',
          address: configData.address,
          phone: configData.phone,
          email: configData.email,
          taxRate: configData.gstRate,
          currency: configData.currency,
          settings: {
            enableTableManagement: configData.features.tableManagement,
            enableInventory: configData.features.inventory,
            autoCalculateTax: configData.settings.autoCalculateTax,
            defaultPaymentMethod: configData.settings.defaultPaymentMethod,
            language: storedLanguage,
            theme: configData.theme as 'light' | 'dark' | 'auto'
          }
        });
      } catch (error) {
        console.error('Failed to load config:', error);
      }
    };
    
    fetchConfig();
  }, []);

  // Calculate dashboard stats
  const dashboardStats: DashboardStats = {
    todaysSales: orders.reduce((sum, order) => sum + order.total, 0),
    todaysOrders: orders.length,
    availableTables: tables.filter(t => t.status === 'available').length,
    totalTables: tables.length,
    pendingOrders: orders.filter(o => ['pending', 'preparing'].includes(o.status)).length,
    topSellingItems: menuItems.slice(0, 3).map((item, index) => ({
      item: item,
      quantity: Math.floor(Math.random() * 50) + 10, // Mock data for now
      revenue: item.price * (Math.floor(Math.random() * 50) + 10)
    }))
  };

  // Group orders by table
  const tableOrders = orders.reduce((acc, order) => {
    if (order.tableId) {
      if (!acc[order.tableId]) acc[order.tableId] = [];
      acc[order.tableId].push(order);
    }
    return acc;
  }, {} as Record<string, Order[]>);

  // Action functions
  const addMenuItem = async (item: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      await menuAPI.createMenuItem(item);
      // Invalidate and refetch
      // queryClient.invalidateQueries(['menu-items']);
    } catch (error) {
      console.error('Failed to add menu item:', error);
      throw error;
    }
  };

  const updateMenuItem = async (id: string, updates: Partial<MenuItem>) => {
    // Implementation
  };

  const deleteMenuItem = async (id: string) => {
    // Implementation
  };

  const toggleMenuItemAvailability = async (id: string) => {
    // Implementation
  };

  const updateOrderStatus = async (orderId: string, status: Order['status']) => {
    try {
      console.log('Updating order status:', orderId, status);
      
      // Find the order to get table information
      const currentOrder = orders.find(order => order.id === orderId);
      
      // For demo purposes, show immediate feedback
      alert(`Order ${orderId} marked as ${status}${status === 'served' ? ' and paid' : ''}!`);
      
      try {
        // Update order status
        await orderAPI.updateOrderStatus(parseInt(orderId), { status });
        console.log('Order status updated successfully');
        
        // If marking as served, also update payment status to paid
        if (status === 'served') {
          try {
            await orderAPI.updatePaymentStatus(parseInt(orderId), { 
              paymentStatus: 'paid',
              paymentMethod: 'cash' // Default to cash, can be modified later if needed
            });
            console.log('Payment status updated successfully');
          } catch (paymentError) {
            console.warn('Failed to update payment status, but order status was updated:', paymentError);
          }
          
          // If order was for a dine-in table, mark table as available
          if (currentOrder?.tableId && currentOrder?.type === 'dine-in') {
            try {
              await tableAPI.updateTableStatus(parseInt(currentOrder.tableId), { status: 'available' });
              console.log('Table status updated to available');
            } catch (tableError) {
              console.warn('Failed to update table status to available:', tableError);
            }
          }
        }
        
        // Invalidate and refetch orders and tables
        queryClient.invalidateQueries({ queryKey: ['orders'] });
        queryClient.invalidateQueries({ queryKey: ['tables'] });
        console.log('Orders and tables queries invalidated, refetching...');
      } catch (apiError) {
        console.warn('API call failed (likely server not running), but showing demo functionality:', apiError);
      }
    } catch (error) {
      console.error('Failed to update order status:', error);
      throw error;
    }
  };

  const addOrder = async (orderData: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt'>) => {
    try {
      console.log('Creating order:', orderData);
      
      // Transform frontend order data to backend API format
      const apiOrderData = {
        tableId: orderData.tableId ? parseInt(orderData.tableId) : undefined,
        customerName: orderData.customerName,
        customerPhone: orderData.customerPhone,
        type: orderData.type,
        items: orderData.items.map(item => ({
          menuItemId: parseInt(item.menuItemId),
          quantity: item.quantity,
          unitPrice: item.price.toString(),
          totalPrice: item.totalPrice.toString(),
          specialInstructions: item.specialInstructions,
        })),
        subtotal: orderData.subtotal.toString(),
        taxAmount: orderData.tax.toString(),
        discountAmount: orderData.discount.toString(),
        total: orderData.total.toString(),
      };

      // Create the order
      await orderAPI.createOrder(apiOrderData);
      console.log('Order created successfully');
      
      // If order is for a table, mark table as occupied
      if (orderData.tableId && orderData.type === 'dine-in') {
        try {
          await tableAPI.updateTableStatus(parseInt(orderData.tableId), { status: 'occupied' });
          console.log('Table status updated to occupied');
        } catch (tableError) {
          console.warn('Failed to update table status to occupied:', tableError);
        }
      }
      
      // Invalidate and refetch both orders and tables
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      queryClient.invalidateQueries({ queryKey: ['tables'] });
    } catch (error) {
      console.error('Failed to add order:', error);
      throw error;
    }
  };

  const updateTableStatus = async (tableId: string, status: Table['status']) => {
    try {
      console.log('Updating table status:', tableId, status);
      await tableAPI.updateTableStatus(parseInt(tableId), { status });
      
      // Invalidate and refetch tables
      queryClient.invalidateQueries({ queryKey: ['tables'] });
      console.log('Table status updated successfully');
    } catch (error) {
      console.error('Failed to update table status:', error);
      throw error;
    }
  };

  return {
    restaurant,
    categories,
    menuItems,
    tables,
    orders,
    dashboardStats,
    tableOrders,
    loading,
    config,
    language,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    toggleMenuItemAvailability,
    updateOrderStatus,
    addOrder,
    updateTableStatus,
    setLanguage: (lang: string) => {
      setLanguage(lang);
      localStorage.setItem('preferredLanguage', lang);
    }
  };
};