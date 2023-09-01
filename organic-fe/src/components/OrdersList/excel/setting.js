export const SETTINGS_FOR_EXPORT = {
  fileName: 'orders',
  workSheets: [
    {
      sheetName: 'orders',
      startingRowNumber: 2,
      gapBetweenTwoTables: 2,
      tableSettings: {
        table1: {
          headerGroups: [
            {
              name: 'Orders',
              key: 'orders',
              groupKey: 'orders',
            },

          ],
          headerDefinition: [
            {
              name: '#',
              key: 'id',
            },
            {
              name: 'Customer',
              key: 'customer',
            },
            {
              name: 'Total price',
              key: 'totalPrice',
              groupKey: 'id',
            },
            {
              name: 'Product',
              key: 'product',
              groupKey: 'id',
            },
            {
              name: 'Price',
              key: 'price',
              groupKey: 'id',
            },
            {
              name: 'Amount',
              key: 'amount',
              groupKey: 'id',
            },
            {
              name: 'Email',
              key: 'email',
              groupKey: 'id',
            },
            {
              name: 'Phone',
              key: 'phone',
              groupKey: 'id',
            },
            {
              name: 'Address',
              key: 'address',
              groupKey: 'id',
            },
            {
              name: 'Message',
              key: 'message',
              groupKey: 'id',
            }
          ],
        }
      }
    },
  ],
};
