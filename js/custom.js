/*navbar*/
$(".nav-spacing li").click(function () {
  $(".nav-spacing li").removeClass("active");
  $(this).addClass("active");
});

/*skills progress*/
jQuery(document).ready(function () {
  jQuery(".progress").each(function () {
    jQuery(this)
      .find(".progress-bar")
      .animate(
        {
          width: jQuery(this).attr("data-percent"),
        },
        6000
      );
  });
});

/*div tabs*/
const $btns = $(".btn_class").click(function () {
  if (this.id == "all") {
    $("#parent_div > div").fadeIn(450);
  } else {
    const $el = $("." + this.id).fadeIn(450);
    $("#parent_div > div").not($el).hide();
  }
  $btns.removeClass("active_btn");
  $(this).addClass("active_btn");
});

/*Extracting Json data using Fetch API*/
fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Kathmandu,NP,uk&appid=08e37ce3c92531a7761ed7033884329a"
)
  .then((result) => result.json())
  .then((result) => {
    let Celsius = result.main.temp - 273.15;
    // const kathmandu_weather = result.weather[0].main;
    // const weather_description = result.weather[0].description;
    // const min_temperature = (result.main.temp_min) - 273.15;
    // const max_temperature = (result.main.temp_max) - 273.15;
    // const pressure = result.main.pressure;
    // const humidity = result.main.humidity;
    let celsius = Celsius.toFixed(2);
    const location = result.name;
    $("#ktm_weather").html(
      "<p>" + celsius + "°C" + "</p>" + "<p>" + location + "</p>"
    );
  })
  .catch((err) => {
    console.log("error occur", err);
  });
/*Extracting Json data using getJSON*/
// $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Kathmandu,NP,uk&appid=08e37ce3c92531a7761ed7033884329a", function(result){
//     const celsius = (result.main.temp) - 273.15;
//     const kathmandu_weather = result.weather[0].main;
//     const weather_description = result.weather[0].description;
//     const min_temperature = (result.main.temp_min) - 273.15;
//     const max_temperature = (result.main.temp_max) - 273.15;
//     const pressure = result.main.pressure;
//     const humidity = result.main.humidity;
//     const location = result.name;
//     $("#ktm_weather").html(
//       "<p>"+"Temperature: "+ celsius + "°C"+"</p>" + "<p>"+"location: "+location+"</p>"
//       );

// console.log(
//   "Temperature: "+celsius + "°C",
//   "\nTodays weather: "+ kathmandu_weather,
//   "\nWeather description: "+weather_description,
//   // "\nToday's minimum Temperature: "+min_temperature,
//   // "\nToday's maximum Temperature: "+max_temperature,
//   "\nToday's pressure: "+pressure+" pascal",
//   "\nToday's humidity: "+humidity+" gm⁻³"
//   );
// });

// function randomQuote() {
//     $.ajax({
//         url: "https://api.forismatic.com/api/1.0/?",
//         dataType: "jsonp",
//         data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
//         success: function(response) {
//             $("#random_quote").html("<p class='lead text-center'>" +
//                 response.quoteText + "</p><span>- " + response.quoteAuthor + " -</span>");
//             // $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
//             //     ' (' + response.quoteAuthor + ')');
//         }
//     });
// }

function randomQuote() {
  const filePath = "../json/quotes.json";

  $.getJSON(filePath, function (quotes) {
    const text = quotes[Math.floor(Math.random() * quotes.length)].quoteText;
    const author =
      quotes[Math.floor(Math.random() * quotes.length)].quoteAuthor;

    $("#random_quote").html(
      "<p class='lead text-center'>" +
        text +
        "</p><span>- " +
        author +
        " -</span>"
    );

    // console.log(quotes[Math.floor(Math.random() * quotes.length)].quoteText);
    // console.log(quotes[Math.floor(Math.random() * quotes.length)].quoteAuthor);
  });
}

$(function () {
  randomQuote();
});

$("#random_quote").click(function () {
  randomQuote();
});

//navbar menu
jQuery(document).ready(function () {
  let nav = jQuery("nav");
  jQuery(window).scroll(function () {
    let scroll = jQuery(window).scrollTop();
    if (scroll >= 50) {
      nav.removeClass("navbar_top_spacing").addClass("navbar_on_scrolling");
    } else {
      nav.removeClass("navbar_on_scrolling").addClass("navbar_top_spacing");
    }
  });
});

jQuery(document).ready(function () {
  let nav = jQuery(".logo-wrapper");
  jQuery(window).scroll(function () {
    let scroll = jQuery(window).scrollTop();
    if (scroll >= 50) {
      nav.removeClass("logo-wrapper").addClass("logo-resize");
    } else {
      nav.removeClass("logo-resize").addClass("logo-wrapper");
    }
  });
});

// ParticlesJS Config.
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 2,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        opacity_min: 1,
        sync: true,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 110,
      color: "#ffffff",
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 7,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 100,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 40,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 40,
        size: 4,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.2,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// slick slider js

jQuery(document).ready(function () {
  jQuery(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
