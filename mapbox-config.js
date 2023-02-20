var config = {
  style: "mapbox://styles/labs-sandbox/cle6ecgky007t01lja19luc67",
  accessToken:
    "pk.eyJ1IjoiY2hvbWJvY2hpbm9rb3NvcmFtb3RvIiwiYSI6ImNsYWIzNzN1YzA5M24zdm4xb2txdXZ0YXQifQ.mltBkVjXA6LjUJ1bi7gdRg",
  showMarkers: false,
  theme: "dark",
  alignment: "left",
  title: "",
  subtitle: "",
  footer: "",
  chapters: [
    {
      id: "jamaica-kingston",
      title: " 6 Tremaine Road, Kingston, Jamaica",
      image: "",
      description:
        "An approach to interactive storytelling, where the graphics unfold as the user scrolls through the story, is known as “scrollytelling”. The scrollytelling template was designed and built to accelerate the process of creating a map-based story. ",
      location: {
        center: [-76.77214565856042, 18.006758676377146],
        zoom: 3.3,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        // {
        //   layer: "county-pop-centroid",
        //   opacity: 0.5
        // }
      ],
      onChapterExit: [
        // {
        //   layer: "county-pop-centroid",
        //   opacity: 0
        // }
      ]
    },
    {
      id: "usa-sprinters",
      title: "Hughes Stadium: The Night of Speed",
      image: "",
      description:
        "Zoom, pan, tilt, and rotate the map to higlight the geographic area related to this part of your story.",
      location: {
        center: [-121.48652, 38.541],
        zoom: 5.7,
        pitch: 60.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "county-pop-centroid",
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: "county-pop-centroid",
          opacity: 0
        }
      ]
    },
    {
      id: "great-britain",
      title: "Crystal Palace",
      image: "",
      description:
        "If you have set up custom map data in Mapbox Studio, there are also settings to control which map layers to show and hide.",
      location: {
        center: [-0.06746165952518775, 51.42122183293816],
        zoom: 5.7,
        pitch: 60.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "county-pop-polygon",
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: "county-pop-polygon",
          opacity: 0
        }
      ]
    },
    {
      id: "toronto-burning",
      title: "Toronto is Broken",
      image: "",
      description:
        "This template supports circle, line, fill, symbol, fill-extrusion, and raster layers.",
      location: {
        center: [-79.3832, 43.6532],
        zoom: 7.51,
        pitch: 60.0,
        bearing: 38.4
      },
      onChapterEnter: [
        {
          layer: "freedom-line",
          opacity: 0.3
        }
      ],
      onChapterExit: [
        {
          layer: "freedom-line",
          opacity: 0
        }
      ]
    },
    {
      id: "italian-team",
      title: "Stade Ferrucio made me hardcore",
      image: "",
      description:
        "You can control any data in your Studio style, including base map layers. Shown in green are national park areas.",
      location: {
        center: [8.43484052925938, 44.27829747376744],
        zoom: 7,
        pitch: 60.0,
        bearing: 0
      },
      onChapterEnter: [
        {
          layer: "national-park",
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: "national-park",
          opacity: 0
        }
      ]
    },
    {
      id: "portuguese-team",
      title: "Sport Lisboa e Benfica",
      image: "",
      description:
        "We also built a page to help find location coordinates and set up the best \"camera angle\" to showcase a location. Find the helper at <a href='https://demos.mapbox.com/location-helper/'>https://demos.mapbox.com/location-helper/</a>.",
      location: {
        center: [-9.184782451990381, 38.7528892760733],
        zoom: 11.1,
        pitch: 55.5,
        bearing: -115.2
      },
      onChapterEnter: [
        {
          layer: "cdl-2018",
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: "cdl-2018",
          opacity: 0
        }
      ]
    },
    {
      id: "wrap-up",
      title: "",
      image: "",
      description:
        "The hard part still may be coming up with a story, but now it's a little easier to tell. Built with Mapbox GL JS, Scrollama.js, and JavaScript. Learn more at <a href='https://www.mapbox.com/solutions/interactive-storytelling/'>https://www.mapbox.com/solutions/interactive-storytelling/</a>",
      location: {
        center: [-97.061, 38.39659],
        zoom: 3.3,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "county-pop-centroid",
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: "county-pop-centroid",
          opacity: 0
        }
      ]
    }
  ]
};
