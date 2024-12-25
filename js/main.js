(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Vendor carousel
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  // Related carousel
  $(".related-carousel").owlCarousel({
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  // Product Quantity
  $(".quantity button").on("click", function () {
    var button = $(this);
    var oldValue = button.parent().parent().find("input").val();
    if (button.hasClass("btn-plus")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    button.parent().parent().find("input").val(newVal);
  });
})(jQuery);

// Sample product data
const products = [
  {
    id: 1,
    name: "Shell Helix 15W-40",
    description:
      "Shell Helix 15W-40 is a premium quality motor oil designed to ensure optimal engine performance in all driving conditions. It helps protect against wear, reduces oil consumption, and enhances the longevity of your vehicle’s engine. With advanced cleaning technology, this oil helps to keep your engine clean by preventing the build-up of harmful deposits, ensuring smooth operation for longer durations.",
    image: "images/shell-helix-15w-40-1L.jpg",
    overview: "Premium Multi-Grade Motor Oil",
    volume: "1L",
  },
  {
    id: 2,
    name: "Mobil 5W-30",
    description:
      "Mobil 5W-30 is a synthetic engine oil formulated to offer superior protection and efficiency for modern engines. It is designed to minimize wear and tear by providing excellent lubrication, even under extreme temperature conditions. This oil enhances fuel economy and contributes to longer engine life by reducing friction, which in turn leads to smoother and quieter engine operation. Perfect for cars that demand high-performance lubrication.",
    image: "images/Mobil-1-Extended-5w-30.webp",
    volume: "5L",
  },
  {
    id: 3,
    name: "Toyota 5W-30",
    description:
      "Toyota 5W-30 is a high-performance motor oil specifically tailored for Toyota vehicles, but suitable for other makes as well. This oil provides excellent engine protection by reducing internal friction and wear, ensuring that your engine runs smoothly and efficiently. It is formulated to prevent sludge build-up and deposits, offering maximum protection even in harsh driving environments. Ideal for both new and older engines.",
    image: "images/5w30-toyota.webp",
    volume: "5L",
  },
  {
    id: 4,
    name: "Castrol Edge 5W-30",
    description:
      "Castrol Edge 5W-30 is an advanced full synthetic motor oil designed to unlock the maximum performance of your engine. Its fluid titanium technology provides outstanding strength and performance under pressure, ensuring that your engine remains protected even under heavy loads. This oil reduces friction and increases engine efficiency, making it perfect for high-performance and luxury vehicles. It also helps maintain peak performance across a variety of driving conditions, including cold starts and high temperatures.",
    image: "images/castrol.webp",
    volume: "5L",
  },
  {
    id: 5,
    name: "Total Quartz 5000",
    description:
      "Total Quartz 5000 is a premium diesel engine oil designed to provide excellent protection against wear and deposits. Suitable for light commercial vehicles and passenger cars, it ensures optimal performance and enhances the lifespan of your engine. With advanced additives, it delivers a high level of engine cleanliness and smooth operation.",
    image: "images/total-quartz-5000.jpg",
    volume: "5L",
  },
  {
    id: 6,
    name: "Shell Helix HX-5",
    description:
      "Shell Helix HX-5 is a high-quality motor oil that ensures enhanced engine cleanliness and superior protection under all driving conditions. It is formulated with active cleansing technology to keep your engine running efficiently and prevent harmful deposits and sludge build-up.",
    image: "images/shell-hx-5.avif",
    volume: "4L",
  },
  {
    id: 7,
    name: "Petronas Xtreme 20W-50",
    description:
      "Petronas Xtreme 20W-50 is a durable multi-grade motor oil suitable for vehicles operating under tough conditions. It offers exceptional lubrication, reduces engine wear, and ensures consistent performance, even in high-temperature environments.",
    image: "images/petronas extreme 20w-50.webp",
    volume: "5L",
  },
  {
    id: 8,
    name: "Exol Oil",
    description:
      "Exol Oil is a versatile motor oil that ensures smooth and efficient engine operation. Its advanced formulation protects against wear, corrosion, and sludge build-up, making it a reliable choice for a variety of engines.",
    image: "images/exol.png",
    volume: "5L",
  },
  {
    id: 9,
    name: "Mercedes-Benz Oil Filter",
    description:
      "The Mercedes-Benz Oil Filter (Part Number: 2761800009) is a high-quality filter designed to provide superior engine protection by effectively capturing contaminants and ensuring clean oil flow. Engineered for Mercedes-Benz vehicles, it ensures longevity and optimal performance.",
    image: "images/benz-oil-filter.jpg",
    partNumber: "2761800009",
  },
  {
    id: 10,
    name: "Honda Oil Filter",
    description:
      "The Honda Oil Filter (Part Number: 15400-PLM-A02) is a genuine OEM part that delivers exceptional filtration performance. It ensures your engine oil remains clean and free from debris, contributing to better engine health and performance.",
    image: "images/Oil Filters/honda-oil-filter.webp",
    partNumber: "15400-PLM-A02",
  },
  {
    id: 11,
    name: "Range Rover Oil Filter",
    description:
      "The Range Rover Oil Filter (Part Number: LR096524) is a premium filter designed to provide efficient oil filtration for optimal engine performance. It effectively removes contaminants, ensuring clean oil flow and protecting your engine from wear.",
    image: "images/range-rover-oil-filter.jpg",
    partNumber: "LR096524",
  },
  {
    id: 12,
    name: "Toyota Oil Filter",
    description:
      "The Toyota Oil Filter (Part Number: 38020) is a genuine OEM filter designed to offer exceptional filtration and protection for Toyota engines. It helps maintain clean oil flow and enhances engine efficiency and longevity.",
    image: "images/toyota-380-20.jpg",
    partNumber: "38020",
  },
  {
    id: 13,
    name: "BOSCH Battery",
    description:
      "The BOSCH Battery is a high-performance automotive battery known for its reliability and durability. Designed to provide consistent power for modern vehicles, it ensures smooth starts and optimal electrical performance under various conditions.",
    image: "images/bosch-battery.webp",
  },
  {
    id: 14,
    name: "Power Jet Battery",
    description:
      "Power Jet Battery is a dependable and efficient battery designed for long-lasting performance. It offers excellent starting power and meets the needs of vehicles with high electrical demands.",
    image: "images/power-jet-battery.webp",
  },
  {
    id: 15,
    name: "Visca Battery",
    description:
      "The Visca Battery delivers reliable power and durability for a wide range of vehicles. Its robust construction ensures dependable performance, even in demanding conditions.",
    image: "images/visca.jpg",
  },
  {
    id: 16,
    name: "Platinum Battery",
    description:
      "Platinum Battery is a premium automotive battery built for exceptional performance and longevity. It provides consistent power and is ideal for vehicles requiring high power output.",
    image: "images/platinum.jpg",
  },
  {
    id: 17,
    name: "Laser Iridium Plug",
    description:
      "The Laser Iridium Plug offers superior ignition performance and long service life. Engineered for modern engines, it provides efficient combustion and improved fuel economy.",
    image: "images/laser-iradium.png",
  },
  {
    id: 18,
    name: "Iridium Tough Plug",
    description:
      "The Iridium Tough Plug is designed for durability and high performance. It ensures reliable ignition even under extreme conditions, making it ideal for high-powered engines.",
    image: "images/iradium-tough.jpeg",
  },
  {
    id: 19,
    name: "Toyota Spark Plug",
    description:
      "The Toyota Spark Plug delivers consistent ignition performance for Toyota vehicles. It's built to meet OEM standards for reliability and efficiency.",
    image: "images/toyota.jpg",
  },
  {
    id: 20,
    name: "Bosch Spark Plug",
    description:
      "Bosch Spark Plug is a high-quality plug designed for optimal performance and longevity. It ensures smooth engine operation and reliable starts.",
    image: "images/bosch-plug.jpg",
  },
  {
    id: 21,
    name: "Abro Brake Pads",
    description:
      "Abro Brake Pads are designed for exceptional stopping power and long-lasting durability. Ideal for ensuring safety and performance on the road.",
    image: "images/abro.jpg",
  },
  {
    id: 22,
    name: "Standard Brake Pads",
    description:
      "These Standard Brake Pads provide reliable performance and consistent braking in various driving conditions. Built for everyday use.",
    image: "images/brake-pads.jpg",
  },
  {
    id: 23,
    name: "Amari Brake Pads",
    description:
      "Amari Brake Pads offer premium braking performance, reducing wear and tear while maintaining smooth and quiet operation.",
    image: "images/amari.webp",
  },
  {
    id: 24,
    name: "Other Brake Pads",
    description:
      "Other Brake Pads include a variety of options suited for diverse vehicle types, offering quality and dependability.",
    image: "images/others.png",
  },
];

// Get the product ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Find the corresponding product from the array
const product = products.find((p) => p.id == productId);

// Display product details on the page
if (product) {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-description").textContent =
    product.description;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-volume").textContent =
    product.volume || product.partNumber;
  document.getElementById("product-overview").textContent = product.overview;
} else {
  document.getElementById("product-name").textContent = "Product not found";
}
