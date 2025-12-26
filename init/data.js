const sampleListings = [

  {
    title: "Seaside Studio Apartment in South Mumbai",
    description: "A modern studio apartment near the Arabian Sea offering calm surroundings, sea breeze, and quick access to cafés and public transport. Ideal for couples and solo travelers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1687114064026-ce0b9a9117f9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3200,
    location: "Mumbai",
    country: "India",
  },

  {
    title: "Luxury Apartment Near Marine Drive",
    description: "Elegant apartment with premium interiors, city skyline views, and easy access to Marine Drive. Perfect for business travelers and tourists.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1721927463588-ac54581324d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 4500,
    location: "Mumbai",
    country: "India",
  },

  {
    title: "Hill View Villa in Lonavala",
    description: "Private villa surrounded by lush green hills. Great for families looking for a quiet weekend getaway close to nature.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1737955658451-851e128f98a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3800,
    location: "Lonavala",
    country: "India",
  },

  {
    title: "Cozy Homestay in Mahabaleshwar",
    description: "Comfortable homestay near strawberry farms offering scenic views, fresh air, and warm local hospitality.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1691031429919-2273f9603be6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2600,
    location: "Mahabaleshwar",
    country: "India",
  },

  {
    title: "Heritage Stay in Jaipur",
    description: "A restored heritage property showcasing traditional Rajasthani architecture with modern comfort and peaceful surroundings.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1691031428843-fffcb81cf454?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3000,
    location: "Jaipur",
    country: "India",
  },

  {
    title: "Mountain Cottage in Manali",
    description: "Wooden cottage offering stunning mountain views and a cozy atmosphere for couples and adventure lovers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1724685936874-04193d71bc44?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2800,
    location: "Manali",
    country: "India",
  },

  {
    title: "Colonial Stay in Shimla",
    description: "Colonial-era home with valley views and calm surroundings. Ideal for travelers seeking peace and old-town charm.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1697730350129-de0e9f2b1e82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2600,
    location: "Shimla",
    country: "India",
  },

  {
    title: "Lake View Houseboat in Srinagar",
    description: "Traditional houseboat stay on Dal Lake offering scenic views, authentic Kashmiri food, and a peaceful experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 4200,
    location: "Srinagar",
    country: "India",
  },

  {
    title: "Tea Estate Bungalow in Munnar",
    description: "Charming bungalow inside tea plantations with misty mornings, cool weather, and relaxing ambiance.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1742106848775-37b2eb896f7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3500,
    location: "Munnar",
    country: "India",
  },

  {
    title: "Houseboat Stay in Alleppey",
    description: "Traditional Kerala houseboat stay offering scenic backwater views and authentic local cuisine.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1609634878593-ebcfde37ae74?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 4200,
    location: "Alleppey",
    country: "India",
  },

  {
    title: "Hill Retreat in Ooty",
    description: "Peaceful hill retreat surrounded by tea plantations, ideal for a relaxing family vacation.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1657997200835-ac416c7e851c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2500,
    location: "Ooty",
    country: "India",
  },

  {
    title: "Coffee Estate Homestay in Coorg",
    description: "Stay inside lush coffee plantations offering scenic views, fresh air, and nature walks.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1634472213599-567c11d73046?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2700,
    location: "Coorg",
    country: "India",
  },

  {
    title: "Backwater Villa in Kerala",
    description: "Private villa with canal-facing views, perfect for couples and honeymoon travelers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1662543713250-d734701de793?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3900,
    location: "Kerala",
    country: "India",
  },

  {
    title: "French Style Stay in Pondicherry",
    description: "Colonial-style home with pastel interiors and coastal charm near the beach.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1709744873177-714d7ab0fe02?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2800,
    location: "Puducherry",
    country: "India",
  },

  {
    title: "Luxury Villa in North Goa",
    description: "Stylish villa with private pool close to Goa’s beaches and nightlife.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1627251050091-001e93fbe32e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 5200,
    location: "Goa",
    country: "India",
  },

  {
    title: "Desert Camp Stay in Jaisalmer",
    description: "Luxury desert camp with cultural programs, camel rides, and starry nights.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1568901470690-3c3fe858d396?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3900,
    location: "Jaisalmer",
    country: "India",
  },

  {
    title: "City Apartment in Bengaluru",
    description: "Modern apartment in the tech hub with fast Wi-Fi and easy city access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1596796679119-7cf1a9e5448b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3000,
    location: "Bengaluru",
    country: "India",
  },

  {
    title: "Urban Stay in Delhi",
    description: "Comfortable city stay with easy access to metro stations and local markets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1712247262984-4060dc91f257?q=80&w=1030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2800,
    location: "Delhi",
    country: "India",
  },

  {
    title: "Riverside Retreat in Rishikesh",
    description: "Peaceful riverside stay ideal for yoga, meditation, and relaxation.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1719232427893-26549eca0113?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2200,
    location: "Rishikesh",
    country: "India",
  },

  {
    title: "Luxury Stay in Udaipur",
    description: "Lake-facing luxury stay offering royal interiors and sunset views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1705039439212-c3130e4c62a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 4200,
    location: "Udaipur",
    country: "India",
  },

  {
    title: "Hill Cottage in Darjeeling",
    description: "Cozy hill cottage overlooking tea gardens and Himalayan peaks.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1661970131012-0f77ff21797e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2600,
    location: "Darjeeling",
    country: "India",
  },

  {
    title: "Forest Lodge in Wayanad",
    description: "Nature-friendly forest lodge surrounded by greenery and wildlife.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1597317319454-a8c1a9bbf3c0?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2900,
    location: "Wayanad",
    country: "India",
  },

  {
    title: "Cliffside Stay in Varkala",
    description: "Cliffside stay overlooking the Arabian Sea with peaceful sunset views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1727272923760-79f9774eec72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3100,
    location: "Varkala",
    country: "India",
  },

  {
    title: "Island Resort in Andaman",
    description: "Beachfront resort offering crystal-clear waters and private beach access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1766483683187-28ccf8662268?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 5200,
    location: "Andaman",
    country: "India",
  },

  {
    title: "Hilltop Stay in Shillong",
    description: "Peaceful hilltop accommodation with scenic views of valleys and clouds.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1539954565292-6a00884153dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2700,
    location: "Shillong",
    country: "India",
  },

  {
    title: "Riverside Homestay in Hampi",
    description: "Simple and peaceful homestay near riverside landscapes and ancient ruins.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/flagged/photo-1582271542279-cd869de13822?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2200,
    location: "Hampi",
    country: "India",
  },

  {
    title: "Farm Stay in Nashik",
    description: "Relaxing farm stay surrounded by vineyards and countryside views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1694667509674-676629c9d069?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2500,
    location: "Nashik",
    country: "India",
  },

  {
    title: "Luxury City Stay in Hyderabad",
    description: "Premium city apartment offering modern interiors and central location.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1671385539486-a3aeeb1f7909?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3300,
    location: "Hyderabad",
    country: "India",
  },

  {
    title: "Coastal Stay in Chennai",
    description: "Comfortable coastal stay near Marina Beach with city connectivity.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1682410893320-926e5eaa316a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2600,
    location: "Chennai",
    country: "India",
  },

  {
    title: "City View Apartment in Kolkata",
    description: "Urban apartment offering river views and cultural neighborhood vibes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1640282898962-42bc714de660?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2800,
    location: "Kolkata",
    country: "India",
  },

  {
    title: "Luxury Stay in Ahmedabad",
    description: "Modern stay near riverfront with clean interiors and calm atmosphere.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1603651481343-0f71466bb14a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2600,
    location: "Ahmedabad",
    country: "India",
  },

  {
    title: "Desert View Camp in Kutch",
    description: "Unique desert camp offering cultural experiences and peaceful nights.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1670406312373-6d4d1776e4aa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3400,
    location: "Kutch",
    country: "India",
  },

  {
    title: "Hill Stay in Mount Abu",
    description: "Cool climate hill stay with green surroundings in Rajasthan.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1754337656761-fb19145b9b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2400,
    location: "Mount Abu",
    country: "India",
  },

  {
    title: "Spiritual Stay in Varanasi",
    description: "Peaceful homestay near ghats offering cultural and spiritual experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1706186839147-0d708602587b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2300,
    location: "Varanasi",
    country: "India",
  },

  {
    title: "Eco Stay in Kaziranga",
    description: "Nature-focused eco stay near wildlife reserves and greenery.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1724818361335-291394c25925?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2800,
    location: "Assam",
    country: "India",
  },

  {
    title: "Hill Retreat in Cherrapunji",
    description: "Stay surrounded by waterfalls, mist, and scenic mountain landscapes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1669628182335-4c50980f419d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2600,
    location: "Meghalaya",
    country: "India",
  },

  {
    title: "Luxury Farm Stay in Alibaug",
    description: "Private farm stay near beaches offering peaceful countryside vibes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1758633854736-8973bcd84dd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3600,
    location: "Alibaug",
    country: "India",
  },

  {
    title: "City Apartment in Indore",
    description: "Clean and comfortable apartment in the heart of the city.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1725231949188-45d4c2d028b3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2200,
    location: "Indore",
    country: "India",
  },

  {
    title: "Historic Stay in Lucknow",
    description: "Elegant stay reflecting Nawabi culture with modern comfort.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1655747543289-74baefbfa184?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2600,
    location: "Lucknow",
    country: "India",
  },

  {
    title: "Riverside Stay in Prayagraj",
    description: "Calm riverside accommodation offering peaceful views and comfort.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1760870318561-b9aaacc1c688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2200,
    location: "Prayagraj",
    country: "India",
  },

  {
    title: "Luxury Stay in Jodhpur",
    description: "Royal-themed stay with desert views and cultural charm.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1589741243778-b5a64085e7f9?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3400,
    location: "Jodhpur",
    country: "India",
  },

  {
    title: "Hill View Resort in Kodaikanal",
    description: "Cool climate hill resort surrounded by forests and valleys.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1674128869659-182b627e8f8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 2800,
    location: "Kodaikanal",
    country: "India",
  },

  {
    title: "Luxury City Stay in Pune",
    description: "Modern apartment in a prime city location with premium amenities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1707617645764-08862c06fd7f?q=80&w=911&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3200,
    location: "Pune",
    country: "India",
  },

  {
    title: "Eco Cottage in Spiti Valley",
    description: "Remote eco cottage surrounded by dramatic Himalayan landscapes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1599601195005-58e77ca62f26?q=80&w=1090&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    price: 3000,
    location: "Spiti",
    country: "India",
  }

];

module.exports = { data: sampleListings };
