const foodData = {
  pasta: {
    title: "Fresh Pasta Selection",
    subtitle: "Handmade daily with premium ingredients",
    items: [
      {
        name: "Spaghetti Aglio e Gamberi Piccanti",
        price: "$18.99",
        description:
          "Al dente spaghetti tossed with garlic, chili, juicy shrimp, and a hint of lime.",
        tags: ["popular", "traditional"],
        image: "pasta1.png",
      },

      {
        name: "Penne all’Arrabbiata con Olive Nere",
        price: "$16.99",
        description:
          "Spicy tomato sauce clinging to penne, finished with briny black olives.",
        tags: ["vegetarian", "creamy"],
        image: "pasta2.png",
      },
      {
        name: "Spaghetti al Pomodoro Fresco",
        price: "$15.99",
        description:
          "Fresh cherry tomatoes and basil in a light, vibrant sauce.",
        tags: ["spicy", "vegetarian", "vegan-option"],
        image: "pasta3.png",
      },
      {
        name: "Spaghetti alla Bolognese",
        price: "$24.99",
        description:
          "Slow-simmered meat ragù over classic spaghetti, topped with soy sauce.",
        tags: ["premium", "seafood", "popular"],
        image: "pasta4.png",
      },
      {
        name: "Tagliatelle al Pollo Piccante",
        price: "$19.99",
        description:
          "Silky ribbons of tagliatelle with tender chicken and colorful peppers.",
        tags: ["popular", "hearty", "spicy"],
        image: "pasta5.png",
      },
      {
        name: "Spaghetti alla Puttanesca",
        price: "$16.99",
        description:
          "Bold tomato sauce with olives, capers, and a whisper of anchovy.",
        tags: ["vegetarian", "premium", "classic"],
        image: "pasta6.png",
      },
      {
        name: "Fettuccine alla Carbonara",
        price: "$17.99",
        description:
          "Creamy egg sauce with crispy pancetta and cracked black pepper.",
        tags: ["creamy", "premium"],
        image: "pasta7.png",
      },
      {
        name: "Fettuccine al Pesto Genovese",
        price: "$16.49",
        description:
          "Fragrant basil pesto with parmesan and extra virgin olive oil.",
        tags: ["vegetarian", "light"],
        image: "pasta8.png",
      },
      {
        name: "Spaghetti al Sugo di Pomodoro Rustico",
        price: "$14.49",
        description: "Rustic tomato-herb sauce for a timeless Italian comfort.",
        tags: ["vegetarian", "rustic"],
        image: "pasta9.png",
      },
      {
        name: "Linguine ai Gamberi e Prezzemolo",
        price: "$19.49",
        description: "Fresh linguine with garlic-sautéed shrimp and parsley.",
        tags: ["seafood", "premium"],
        image: "pasta10.png",
      },
      {
        name: "Salmon Miso Ramen",
        price: "$18.49",
        description:
          "Creamy miso broth with ramen, topped with silky salmon slices and crunchy bean sprouts.",
        tags: ["seafood", "premium"],
        image: "pasta11.png",
      },
      {
        name: "Burrata Caprese Deluxe",
        price: "$15.99",
        description:
          "A fluffy cloud of burrata over roasted cherry tomatoes and basil oil.",
        tags: ["vegetarian", "classic"],
        image: "pasta12.png",
      },
      {
        name: "Rigatoni al Pomodoro",
        price: "$12.49",
        description:
          "Al dente rigatoni smothered in a rich, herby tomato sauce.",
        tags: ["vegetarian", "spicy"],
        image: "pasta13.png",
      },
      {
        name: "Pappardelle ai Frutti di Mare ",
        price: "$20.99",
        description:
          "Broad ribbons of pasta in a creamy seafood medley with peas and lemon.",
        tags: ["seafood", "premium", "creamy"],
        image: "pasta14.png",
      },
      {
        name: "Spaghetti Caprese Nests",
        price: "$14.99",
        description:
          "Tangled spaghetti nests with cherry tomatoes, mozzarella, and basil.",
        tags: ["vegetarian", "premium", "popular"],
        image: "pasta15.png",
      },
      {
        name: "Pesto Spaghetti con Parmigiano",
        price: "$19.99",
        description:
          "Spaghetti in fragrant pesto, sprinkled with parmesan shavings.",
        tags: ["vegetarian", "nutty"],
        image: "pasta16.png",
      },
      {
        name: "Tortellini alla Panna",
        price: "$21.49",
        description: "Tender tortellini in a simple, peppery cream sauce.",
        tags: ["vegetarian", "creamy", "premium"],
        image: "pasta17.png",
      },
      {
        name: "Tagliatelle alla Rosa di Mare",
        price: "$15.99",
        description:
          "Tagliatelle in a pink seafood sauce, garnished with fresh parsley.",
        tags: ["seafood", "premium"],
        image: "pasta18.png",
      },
      {
        name: "Spaghetti alla Bolognese",
        price: "$24.99",
        description:
          "Classic meat ragù served with spaghetti and garlic bread.",
        tags: ["popular", "premium"],
        image: "pasta19.png",
      },
      {
        name: "Fettuccine Alfredo",
        price: "$26.49",
        description:
          "Luxuriously creamy fettuccine with parmesan and fresh basil.",
        tags: ["vegetarian", "creamy", "premium"],
        image: "pasta20.png",
      },
    ],
  },
  sides: {
    title: "Delicious Sides",
    subtitle: "Perfect companions to your main course",
    items: [
      {
        name: "Garlic Bread",
        price: "$6.99",
        description: "Fresh baked bread with herb butter and roasted garlic",
        tags: ["vegetarian", "popular"],
        image: "side1.png",
      },
      {
        name: "Arancini Balls",
        price: "$8.99",
        description:
          "Fried balls of risotto rice typically stuffed with various fillings and then breaded and deep-fried until golden brown and crispy.",
        tags: ["vegetarian", "creamy"],
        image: "side2.png",
      },
      {
        name: "Bruschetta",
        price: "$9.99",
        description:
          "Toasted bread topped with fresh tomatoes, basil, and balsamic glaze",
        tags: ["vegetarian", "fresh"],
        image: "side3.png",
      },
      {
        name: "Ceasar Salad",
        price: "$16.99",
        description:
          "A classic green salad featuring crisp romaine lettuce and crunchy croutons, dressed with Parmesan cheese and a creamy, savory dressing.",
        tags: ["vegetarian", "sharing"],
        image: "side4.png",
      },
      {
        name: "Fried Shrimp Balls",
        price: "$16.99",
        description:
          "Crispy, golden-fried appetizers with a savory shrimp filling, often served with a dipping sauce.",
        tags: ["spicy", "sharing"],
        image: "side5.png",
      },
      {
        name: "Caprese Salad",
        price: "$16.99",
        description:
          "Made with slices of fresh mozzarella, ripe tomatoes, and sweet basil leaves, seasoned with salt and extra virgin olive oil, and often a drizzle of balsamic glaze or reduction.",
        tags: ["premium", "vegetarian"],
        image: "side6.png",
      },
      {
        name: "Mashed Potatoes",
        price: "$10.99",
        description:
          "A popular side dish made from boiled and mashed potatoes, typically enriched with butter, milk or cream, and seasoned with salt and pepper.",
        tags: ["vegetarian", "popular"],
        image: "side7.png",
      },
      {
        name: "Salted Fries",
        price: "$5.99",
        description:
          "A popular side dish made from boiled and mashed potatoes, typically enriched with butter, milk or cream, and seasoned with salt and pepper.",
        tags: ["vegetarian", "popular"],
        image: "side8.png",
      },
      {
        name: "Peri Peri Fries",
        price: "$6.99",
        description:
          "A popular side dish made from boiled and mashed potatoes, typically enriched with butter, milk or cream, and seasoned with salt and pepper.",
        tags: ["vegetarian", "popular"],
        image: "side9.png",
      },
      {
        name: "Antipasto Platter",
        price: "$16.99",
        description:
          " A chef’s selection of cured meats, artisanal cheeses, olives, and roasted vegetables, perfect for sharing",
        tags: ["sharing", "popular"],
        image: "side10.png",
      },
    ],
  },
  desserts: {
    title: "Sweet Endings",
    subtitle: "Handcrafted desserts to complete your meal",
    items: [
      {
        name: "Chocolate Fudge Cake",
        price: "$9.50",
        description:
          "A rich, moist chocolate cake with a creamy chocolate fudge frosting, topped with chocolate shavings and chunks.",
        tags: ["popular", "classic"],
        image: "dessert1.png",
      },
      {
        name: "Brownies",
        price: "$7.99",
        description:
          "Two decadent, chewy chocolate brownies with generous chocolate chunks.",
        tags: ["popular", "classic"],
        image: "dessert5.png",
      },
      {
        name: "Pancakes",
        price: "$7.50",
        description:
          "A fluffy stack of golden-brown pancakes, drizzled with sweet syrup.",
        tags: ["traditional", "popular"],
        image: "dessert2.png",
      },
      {
        name: "Crème Brûlée",
        price: "$9.00",
        description:
          "A classic creamy custard base topped with a contrasting layer of hardened caramelized sugar.",
        tags: ["creamy", "traditional"],
        image: "dessert3.png",
      },
      {
        name: "Caramel Swirl Ice Cream",
        price: "$6.50",
        description:
          "A bowl of creamy vanilla ice cream with a rich caramel swirl.",
        tags: ["creamy", "premium"],
        image: "dessert4.png",
      },
      {
        name: "Cardamom Cake",
        price: "$9.00",
        description:
          "A fragrant and tender cake with a smooth, sweet cream cheese frosting and a sprinkle of spices.",
        tags: ["creamy", "popular"],
        image: "dessert6.png",
      },
    ],
  },
  pizza: {
    title: "Wood-Fired Pizzas",
    subtitle: "Crispy thin crust pizzas from our stone oven",
    items: [
      {
        name: "Margherita",
        price: "$14.99",
        description:
          "San Marzano tomatoes, fresh mozzarella, basil, and olive oil",
        tags: ["vegetarian", "traditional", "popular"],
      },
      {
        name: "Pepperoni Classic",
        price: "$17.99",
        description: "Tomato sauce, mozzarella, and premium pepperoni",
        tags: ["popular", "classic"],
      },
      {
        name: "Quattro Stagioni",
        price: "$19.99",
        description: "Four sections: mushrooms, ham, artichokes, and olives",
        tags: ["premium", "traditional"],
      },
      {
        name: "Diavola",
        price: "$18.99",
        description: "Spicy salami, chili flakes, and mozzarella",
        tags: ["spicy", "bold"],
      },
    ],
  },
  specials: {
    title: "Today's Specials",
    subtitle: "Chef's featured dishes and seasonal favorites",
    items: [
      {
        name: "Lobster Ravioli",
        price: "$28.99",
        description:
          "House-made ravioli filled with fresh lobster in champagne cream sauce",
        tags: ["premium", "special", "seafood"],
      },
      {
        name: "Osso Buco",
        price: "$32.99",
        description: "Braised veal shanks with saffron risotto and gremolata",
        tags: ["premium", "traditional"],
      },
      {
        name: "Chef's Tasting Menu",
        price: "$55.99",
        description:
          "Five-course journey through our finest dishes paired with wine",
        tags: ["premium", "experience"],
      },
    ],
  },
  drinks: {
    title: "Beverages",
    subtitle: "Carefully selected wines, cocktails, and refreshments",
    items: [
      {
        name: "House Wine",
        price: "$7.99",
        description: "Red or white wine selection by the glass",
        tags: ["wine", "popular"],
      },
      {
        name: "Italian Soda",
        price: "$3.99",
        description: "Sparkling water with your choice of fruit syrup",
        tags: ["refreshing", "non-alcoholic"],
      },
      {
        name: "Espresso",
        price: "$2.99",
        description: "Rich, dark roast Italian coffee",
        tags: ["coffee", "traditional"],
      },
      {
        name: "Limoncello",
        price: "$6.99",
        description: "Traditional Italian lemon liqueur, served chilled",
        tags: ["digestif", "traditional"],
      },
    ],
  },
  offers: {
    title: "Special Offers",
    subtitle: "Great deals and promotions",
    items: [
      {
        name: "Family Feast",
        price: "$49.99",
        description:
          "Large pizza, pasta dish, salad, and dessert for four people",
        tags: ["family", "value", "popular"],
      },
      {
        name: "Date Night Special",
        price: "$39.99",
        description:
          "Two pasta dishes, shared appetizer, and bottle of house wine",
        tags: ["romantic", "wine"],
      },
      {
        name: "Lunch Express",
        price: "$12.99",
        description:
          "Any pasta dish with soup or salad, available weekdays 11am-3pm",
        tags: ["lunch", "quick", "value"],
      },
    ],
  },
  locations: {
    title: "Our Locations",
    subtitle: "Find Pasta & Co. near you",
    items: [
      {
        name: "Downtown Location",
        price: "Open Daily",
        description: "123 Main Street, Downtown • (555) 123-4567 • 11am - 10pm",
        tags: ["downtown", "parking"],
      },
      {
        name: "Waterfront Branch",
        price: "Open Daily",
        description:
          "456 Harbor View, Marina District • (555) 234-5678 • 11am - 11pm",
        tags: ["waterfront", "scenic"],
      },
      {
        name: "Suburban Spot",
        price: "Open Daily",
        description: "789 Oak Avenue, Oakville • (555) 345-6789 • 11am - 9pm",
        tags: ["family-friendly", "parking"],
      },
    ],
  },
};

function renderFoodItems(category) {
  const data = foodData[category];
  const contentDiv = document.getElementById("foodContent");

  if (!data) {
    contentDiv.innerHTML = `
            <div class="empty-state">
              <div class="empty-state-icon">🍽️</div>
              <div class="empty-state-title">Coming Soon</div>
              <div class="empty-state-description">We're working on this menu section</div>
            </div>
          `;
    return;
  }

  let itemsHTML = "";
  data.items.forEach((item) => {
    const tagsHTML = item.tags
      .map((tag) => {
        let tagClass = "food-tag";
        if (tag === "spicy") tagClass += " spicy";
        if (tag === "vegetarian") tagClass += " vegetarian";
        if (tag === "popular") tagClass += " popular";
        return `<span class="${tagClass}">${tag}</span>`;
      })
      .join("");

    itemsHTML += `
  <div class="food-item">
    ${
      item.image
        ? `<img src="${item.image}" alt="${item.name}" class="food-item-img" />`
        : ""
    }
    <div class="food-item-header">
      <div class="food-item-name">${item.name}</div>
      <div class="food-item-price">${item.price}</div>
    </div>
    <div class="food-item-description">${item.description}</div>
    <div class="food-item-tags">${tagsHTML}</div>
  </div>
`;
  });

  contentDiv.innerHTML = `
          <div class="food-panel-header">
            <div class="food-panel-title">${data.title}</div>
            <div class="food-panel-subtitle">${data.subtitle}</div>
          </div>
          <div class="food-grid">
            ${itemsHTML}
          </div>
        `;
}

// NAVBAR TWEAKS - Your original code preserved
const navItems = document.querySelectorAll(".nav-item:not(.secondary)");

navItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    navItems.forEach((navItem) => navItem.classList.remove("active"));

    this.classList.add("active");

    const category = this.getAttribute("data-category");
    renderFoodItems(category);
  });
});

const allNavItems = document.querySelectorAll(".nav-item");
allNavItems.forEach((item) => {
  if (!item.classList.contains("secondary")) return;

  item.addEventListener("click", function (e) {
    e.preventDefault();

    navItems.forEach((navItem) => navItem.classList.remove("active"));

    const category = this.getAttribute("data-category");
    renderFoodItems(category);
  });
});

document.addEventListener("keydown", function (e) {
  const activeItem = document.querySelector(".nav-item.active");
  const allItems = Array.from(navItems);
  const currentIndex = allItems.indexOf(activeItem);

  if (e.key === "ArrowDown" && currentIndex < allItems.length - 1) {
    e.preventDefault();
    allItems[currentIndex].classList.remove("active");
    allItems[currentIndex + 1].classList.add("active");
    allItems[currentIndex + 1].querySelector(".nav-link").focus();

    const category = allItems[currentIndex + 1].getAttribute("data-category");
    renderFoodItems(category);
  } else if (e.key === "ArrowUp" && currentIndex > 0) {
    e.preventDefault();
    allItems[currentIndex].classList.remove("active");
    allItems[currentIndex - 1].classList.add("active");
    allItems[currentIndex - 1].querySelector(".nav-link").focus();

    const category = allItems[currentIndex - 1].getAttribute("data-category");
    renderFoodItems(category);
  }
});

renderFoodItems("pasta");
