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
          "A chef’s selection of cured meats, artisanal cheeses, olives, and roasted vegetables, perfect for sharing",
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
        name: "Margherita Classico",
        price: "$13.99",
        description:
          "A timeless Italian classic with fresh mozzarella, tangy tomato sauce, and fragrant basil.",
        tags: ["vegetarian", "traditional", "popular"],
        image: "pizza1.png",
      },
      {
        name: "Pepperoni Feast",
        price: "$14.99",
        description:
          "Generously loaded with spicy pepperoni slices over a golden cheese base.",
        tags: ["classic", "traditional", "popular"],
        image: "pizza2.png",
      },
      {
        name: "Veggie Supreme",
        price: "$14.49",
        description:
          "A colorful medley of capsicum, onions, mushrooms, and olives on rich tomato sauce.",
        tags: ["vegetarian", "traditional", "garden-fresh"],
        image: "pizza3.png",
      },
      {
        name: "Chicken BBQ Blaze",
        price: "$15.99",
        description:
          "Smoky BBQ chicken chunks with onions, sweet corn, and a hint of paprika.",
        tags: ["smoky", "popular"],
        image: "pizza4.png",
      },
      {
        name: " Four Cheese Indulgence",
        price: "$14.49",
        description:
          "A creamy blend of mozzarella, cheddar, gouda, and parmesan for cheese lovers.",
        tags: ["vegetarian", "cheesy", "popular"],
        image: "pizza5.png",
      },
      {
        name: "Hawaiian Paradise",
        price: "$14.79",
        description:
          "A sweet and savory combo of chicken, pineapple, and cheese on a light tomato base.",
        tags: ["tropical", "classic"],
        image: "pizza6.png",
      },
      {
        name: "Spicy Paneer Tikka",
        price: "$14.00",
        description:
          "Marinated paneer cubes with onions, capsicum, and bold Indian spices.",
        tags: ["vegetarian", "fusion", "spicy"],
        image: "pizza7.png",
      },
      {
        name: "Seafood Delight",
        price: "$15.99",
        description:
          "Shrimps, squid, and clams paired with herbs and garlic butter drizzle.",
        tags: ["seafood", "traditional", "premium"],
        image: "pizza8.png",
      },
      {
        name: "Meat Lover’s Overload ",
        price: "$15.49",
        description:
          "Packed with chicken, ham, pepperoni, and sausage for the ultimate carnivore feast.",
        tags: ["heavy", "traditional", "popular"],
        image: "pizza9.png",
      },
      {
        name: "Garden Pesto",
        price: "$11.99",
        description:
          "Fresh vegetables with a fragrant basil pesto sauce and a sprinkle of parmesan.",
        tags: ["vegetarian", "traditional", "fresh"],
        image: "pizza10.png",
      },
      {
        name: "Deluxe Meat & Olive Pizza",
        price: "$14.99",
        description:
          "SA savory mix of meats, olives, and fresh basil on a classic pizza base.",
        tags: ["traditional", "popular"],
        image: "pizza11.png",
      },
      {
        name: "Margherita Pt. II",
        price: "$14.99",
        description: "Margherita but better.",
        tags: ["vegetarian", "traditional", "popular"],
        image: "pizza12.png",
      },
    ],
  },
  specials: {
    title: "Today's Specials",
    subtitle: "Chef's featured dishes and seasonal favorites",
    items: [
      {
        name: "Osso Buco alla Milanese",
        price: "$20.99",
        description:
          "Slow-braised veal shanks in white wine and vegetables, finished with zesty gremolata.",
        tags: ["premium", "special", "hearty"],
        image: "special1.png",
      },
      {
        name: "Arancini di Riso",
        price: "$11.99",
        description:
          "Golden-fried risotto balls with ragù, mozzarella, and peas inside.",
        tags: ["vegetarian", "special", "classic"],
        image: "special2.png",
      },
      {
        name: "Vitello Tonnato",
        price: "$19.99",
        description:
          "Chilled veal slices topped with a creamy tuna-caper sauce.",
        tags: ["premium", "special", "creamy"],
        image: "special3.png",
      },
      {
        name: "Saltimbocca alla Romana",
        price: "$22.99",
        description:
          "Veal wrapped in prosciutto and sage, pan-cooked in wine and butter.",
        tags: ["premium", "special", "roman"],
        image: "special4.png",
      },
      {
        name: "Fritto Misto di Mare",
        price: "$19.49",
        description:
          "Lightly battered and fried seafood mix with lemon and herbs.",
        tags: ["seafood", "special", "coastal"],
        image: "special5.png",
      },
      {
        name: "Melanzane alla Parmigiana",
        price: "$18.99",
        description:
          "Baked layers of eggplant, tomato sauce, mozzarella, and parmesan.",
        tags: ["vegetarian", "special", "baked"],
        image: "special6.png",
      },
    ],
  },
  drinks: {
    title: "Beverages",
    subtitle: "Carefully selected wines, cocktails, and refreshments",
    items: [
      {
        name: " Limoncello Spritz",
        price: "$7.99",
        description:
          "Sparkling prosecco with tangy limoncello and a splash of soda.",
        tags: ["refreshing", "alcoholic"],
        image: "drink1.jpeg",
      },
      {
        name: "Bellini",
        price: "$8.99",
        description:
          "Peach purée blended with prosecco for a sweet, bubbly treat.",
        tags: ["fruity", "popular"],
        image: "drink2.png",
      },
      {
        name: "Negroni",
        price: "$9.99",
        description:
          "A bold mix of gin, Campari, and sweet vermouth — bitter yet sophisticated.",
        tags: ["alcoholic", "strong", "popular"],
        image: "drink3.jpeg",
      },
      {
        name: "Aperol Spritz",
        price: "$7.99",
        description: "Aperol, prosecco, and soda water with a slice of orange.",
        tags: ["alcoholic", "light", "popular"],
        image: "drink4.jpeg",
      },
      {
        name: "Italian Soda",
        price: "$4.99",
        description:
          "Flavored soda with fruity syrups like strawberry, peach, or raspberry.",
        tags: ["fruity", "popular"],
        image: "drink5.jpeg",
      },
      {
        name: "Espresso Macchiatoe",
        price: "$7.99",
        description: "Bold Italian espresso topped with a spot of foamed milk.",
        tags: ["coffee", "popular"],
        image: "drink6.jpeg",
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
          "A hearty spread with large pizza, pasta, salad, and dessert made for sharing with the whole family.",
        tags: ["family", "value", "popular"],
        image: "offer1.jpeg",
      },
      {
        name: "Brunch Date Bliss",
        price: "$39.99",
        description:
          "A charming midday set with two pasta dishes, a shared appetizer, and a bottle of house wine for the perfect daytime date.",
        tags: ["romantic", "wine"],
        image: "offer2.jpeg",
      },
      {
        name: "Twilight Table",
        price: "$49.99",
        description:
          "A relaxed evening combo featuring any pasta dish paired with your choice of soup or salad, plus a soft drink.",
        tags: ["lunch", "quick", "value"],
        image: "offer3.jpeg",
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
        image: "location1.jpeg",
      },
      {
        name: "Waterfront Branch",
        price: "Open Daily",
        description:
          "456 Harbor View, Marina District • (555) 234-5678 • 11am - 11pm",
        tags: ["waterfront", "scenic"],
        image: "location3.jpeg",
      },
      {
        name: "Suburban Spot",
        price: "Open Daily",
        description: "789 Oak Avenue, Oakville • (555) 345-6789 • 11am - 9pm",
        tags: ["family-friendly", "parking"],
        image: "location2.jpeg",
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

// NAVBAR TWEAKS THIS STAYS AS IT IS DO NOT TOUCH
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
