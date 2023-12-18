const dropDownMenu = [
    "ordered",
    "shipped",
    "delivered",
    "returned",
    "paymentPending",
  ];

  const imGallery = [
    { id: 1, imgSrc: "/assets/images/gallery-img-1.jpg", altName:'firstImg'  },
    { id: 2, imgSrc: "/assets/images/gallery-img-2.png", altName:'secondImg' },
    { id: 3, imgSrc: "/assets/images/gallery-img-3.jpeg", altName: 'thirdImg' }
    ];
  
  
  const ExistingElement = document.getElementById("menu");
  
  const newElement = dropDownMenu.map((item, index) => {
    const li = document.createElement('li'); // Create list item element
    const a = document.createElement('a'); // Create anchor element
  
    a.className = 'dropdown-item'; // Set anchor class
    a.href = '#'; // Set anchor href
    a.textContent = item + " by JT"; // Set anchor text
  
    li.appendChild(a); // Append anchor to list item
    return li; // Return list item
  });
  
  newElement.forEach(element => {
    ExistingElement.appendChild(element); // Append each list item to the existing element
  });

  const divElement = document.createElement('div')

  divElement.className = item.id = 0 ? "carousel-item active" : "carousel-item"
  
  