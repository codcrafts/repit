// START:: SHOW AND HIDE PASSWORD
function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
    } else {
        x.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
    }
}
function password_show_hide_confirm() {
    var x = document.getElementById("confirm_password");
    var show_eye = document.getElementById("show_eye1");
    var hide_eye = document.getElementById("hide_eye1");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
    } else {
        x.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
    }
}
// END:: SHOW AND HIDE PASSWORD

// START:: SERVICES SLIDER
$('#slider_reviews').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: true,
    margin: 15,
    rtl: true,
    items: 4,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        }
    }
});
$('#slider_gallery').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: true,
    margin: 15,
    rtl: true,
    items: 3,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});
// END:: SERVICES SLIDER

// START:: 
$(".max").click(function () {
    document.getElementsByClassName('inputCount')[0].value++
});
$(".min").click(function () {
    if (document.getElementsByClassName('inputCount')[0].value < 0) {
        document.getElementsByClassName('inputCount')[0].value
    } else {
        document.getElementsByClassName('inputCount')[0].value--
    }
});

// START:: 
// $('.datepicker').datepicker({
//     multidate: true,
// });
// $('.datepicker').datepicker('setDates', [new Date(2014, 2, 5), new Date(2014, 3, 5)])

// $('.input-daterange input').each(function () {
//     $(this).datepicker('clearDates');
// });

// $('#datepicker').datepicker();
// $('#datepicker').on('changeDate', function () {
//     $('#my_hidden_input').val(
//         $('#datepicker').datepicker('getFormattedDate')
//     );
// });

// START:: UPLOAD IMAGE
function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
}

// START:: MAP
function initAutocomplete() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
        mapTypeId: "roadmap",
    });
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }

            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

// START:: VERIFICATION CODE 

const inputElements = [...document.querySelectorAll('input.code-input')]

inputElements.forEach((ele, index) => {
    ele.addEventListener('keydown', (e) => {
        if (e.keyCode === 8 && e.target.value === '') inputElements[Math.max(0, index - 1)].focus()
    })
    ele.addEventListener('input', (e) => {
        const [first, ...rest] = e.target.value
        e.target.value = first ?? ''
        const lastInputBox = index === inputElements.length - 1
        const insertedContent = first !== undefined
        if (insertedContent && !lastInputBox) {
            inputElements[index + 1].focus()
            inputElements[index + 1].value = rest.join('')
            inputElements[index + 1].dispatchEvent(new Event('input'))
        }
    })
})



// START:: SIDE MENU
$("header .btn-toggle button").click(function () {
    $(".side_menu_user").toggleClass("showSideMenu");
    $("header .overLay_side_menu").addClass("showSideMenuOverLay");
    $("body").css("overflow", "hidden");
});
$("header .overLay_side_menu").click(function () {
    $(".side_menu_user").removeClass("showSideMenu");
    $(this).removeClass("showSideMenuOverLay");
    $("body").css("overflow-y", "scroll");
});
// END:: SIDE MENU

// START :: DATEPICKER
$(document).ready(function () {
    $('input[name="daterange"]').daterangepicker({
        "parentEl": ".custom_date_picker",
        autoUpdateInput: true,
        autoApply: true,
        locale: {
            format: 'DD/MM/YYYY'
        }
    });
});