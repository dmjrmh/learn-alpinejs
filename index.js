document.addEventListener('alpine:init', () => {
  Alpine.data('table', () => ({
    products: [
      {
        id: 1,
        name: 'MacBook',
        color: 'Silver',
        category: 'Laptop',
        price: 1999,
        isAvailable: true,
      },
      {
        id: 2,
        name: 'ROG Ally',
        color: 'Black',
        category: 'Handheld',
        price: 1199,
        isAvailable: false,
      },
      {
        id: 3,
        name: 'iPhone 16e',
        color: 'Titanium',
        category: 'Smartphone',
        price: 629,
        isAvailable: true,
      }
    ]
  }))
})