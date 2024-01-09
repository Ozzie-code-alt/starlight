import { title } from "process";

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home', route: '' },
    { href: '/howHiLink', key: 'how_hilink_work', label: 'How Hilink Work?',route: '' },
    { href: '/', key: 'services', label: 'Services',route: '' },
    { href: '/', key: 'pricing ', label: 'Pricing ',route: '' },
    { href: '/', key: 'contact_us', label: 'Contact Us',route: '' },
  ];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Real maps can be offline',
      icon: '/map.svg',
      variant: 'green',
      description:
        'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
    },
    {
      title: 'Set an adventure schedule',
      icon: '/calendar.svg',
      variant: 'green',
      description:
        "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
    },
    {
      title: 'Technology using augment reality',
      icon: '/tech.svg',
      variant: 'green',
      description:
        'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
    },
    {
      title: 'Many new locations every month',
      icon: '/location.svg',
      variant: 'orange',
      description:
        'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Hilink',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890', route: '/' },
      { label: 'Email Officer', value: 'hilink@akinthil.com' , route: '/'},
      {label: 'Form', value: 'Click Here for Form', route:'/forms'}
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };

  export const ABout = [
    {
      title: "User Resgistration", 
      description: "Users start by registering and creating an account on the app.",
      duration: "1.5"
    },
    {
      title: "Searching for Campsites",
      description:"Once registered, users can search for campsites using various filters and criteria. The app displays the locations of campsites on a map.",
      duration: "1.7"
    },
    {
      title: "Viewing Details",
      description:"After selecting a campsite, users can view detailed information about the site, including amenities, pricing, and availability. They can also read reviews and ratings from other users.",
      duration: "1.9"
    },
    {
      title: "Booking a Campsite",
      description:"f a user decides to book a campsite, they can do so directly through the app. The payment process is secure and straightforward.",
      duration: "2.1"
    },
    {
      title: "Receiving Notifications",
      description:"Once a booking is confirmed, users receive a confirmation notification. They also receive updates about their booking and reminders for check-in and check-out dates.",
      duration: "2.3"
    }


  ] 


  export const ProgramFlow = [
    {
      title: "Download the App",
      desription: "Start by downloading the Hilink app from the Apple Store or Google Play Store onto your smartphone.Go Do it Now !!! Because, Why NOt ?",
      image:"/Playing.png",
      duration: "1.7"
    },
    {
      title: "Create an Account",
      desription: "Once installed, open the app and sign up using your email address or social media accounts. Fill in the required details like name, location, and travel preferences.",
      image:"/Reading.png",
      duration: "1.7"
    },
    {
      title: "Plan Your Trip",
      desription: "Use the interactive map feature to plan your route. Select your destination and start exploring local attractions, restaurants, and activities. Customize your itinerary based on your preferences and interests.",
      image:"/Sleek.png",
      duration: "1.7"
    },
    {
      title: "Book Accommodations and Activities",
      desription: "Hilink integrates with various booking platforms to allow you to book hotels, flights, car rentals, and activities directly within the app. Simply select the desired options and confirm your booking.",
      image:"/Studying.png",
      duration: "1.7"
    },
    {
      title: "Use the In-built Wallet",
      desription: "If you're making payments within the app, you can use the in-built wallet feature. Add your card details to make payments easily and quickly.",
      image:"/Strolling.png",
      duration: "1.7"
    },
    {
      title: "Enjoy Your Journey",
      desription: "With all your plans in place, you're now ready to embark on your journey. Use the real-time local information feature to stay updated about weather, traffic, and other relevant data. Enjoy your travel!",
      image:"/Zombie.png",
      duration: "1.7"
    },
  ]
  