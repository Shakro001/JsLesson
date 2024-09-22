"use strict";

const company = {
  name: "Tech Solutions",
  foundingDate: {
    year: 2010,
    month: "June",
  },
  services: [
    {
      name: "Web Development",
      price: 1500,
      duration: 2,
    },
    {
      name: "SEO Optimization",
      price: 800,
      duration: 1,
    },
    {
      name: "Technical Support",
      price: 500,
      duration: 12, 
    },
  ],
  branches: [
    {
      country: "Ukraine",
      city: "Kharkiv",
      street: "Shevchenko",
      buildingNumber: 12,
    },
    {
      country: "USA",
      city: "New York",
      street: "5th Avenue",
      buildingNumber: 101,
    },
  ],
};

function yearsOfExistence() {
  const today = new Date();
  const year = today.getFullYear();
  return year - company.foundingDate.year;
}


function filialsInCity(city) {
  return company.branches.filter((branch) => branch.city === city);
}


function servicesOpen(money, time) {
  return company.services.filter(
    (service) => service.price <= money && service.duration <= time
  );
}

console.log(yearsOfExistence());
console.log(filialsInCity("Kharkiv"));
console.log(servicesOpen(800, 10));
