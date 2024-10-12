const tipsData = {
  kitchen: [
    {
      title: "Use Efficient Appliances",
      description: "Choose dishwashers and faucets that have high-efficiency ratings. Many modern dishwashers use less water than hand washing and can also save energy. Use energy-efficient appliances like induction cooktops and convection ovens. These appliances use less energy and cook food more efficiently.",
      img: "images/image1.png"
    },
    {
      title: "Practice Smart Cooking Techniques",
      description: "When boiling water, use only the amount needed for the task. For example, use a small pot for a small amount of water instead of a large pot. Cover pots and pans while cooking to retain heat and reduce cooking times. Also, match the pot size to the burner size to maximize heat efficiency.",
      img: "images/image2.png" 
    },
    {
      title: "Clean Your Kitchen Sink Efficiently",
      description: "When cleaning your kitchen sink, avoid letting the water run continuously. Instead, fill the sink with hot, soapy water for washing and another with clean water for rinsing. This method uses less water and ensures that you're not wasting resources during the cleaning process.",
      img: "images/image3.png" 
    }
  ],

  garden: [
    {
      title: "Use Drip Irrigation Systems",
      description: "Install a drip irrigation system to deliver water directly to the plant roots. This targeted approach reduces water waste by minimizing evaporation and runoff, ensuring that each plant gets the exact amount of water it needs.",
      img: "images/image4.png"
    },
    {
      title: "Mulch Your Garden Beds",
      description: "Apply a layer of mulch around plants to help retain soil moisture, reduce the frequency of watering, and prevent weeds that compete for water and nutrients. Organic mulches like straw or wood chips are especially effective.",
      img: "images/image5.png" 
    },
    {
      title: "Choose Native and Drought-Tolerant Plants",
      description: "Opt for plants that are native to your region or drought-tolerant varieties that require less water once established. These plants are adapted to local climate conditions and generally need less irrigation.",
      img: "images/image6.png" 
    }
  ],

  transportation: [
    {
      title: "Carpool and Share Rides",
      description: "Reduce the number of vehicles on the road by carpooling with others or using ride-sharing services. This practice decreases overall fuel consumption and emissions, contributing to energy conservation and reduced air pollution.",
      img: "images/image7.png" 
    },
    {
      title: "Maintain Proper Tire Pressure",
      description: "Regularly check and maintain proper tire pressure. Well-inflated tires improve fuel efficiency by reducing rolling resistance, which leads to lower fuel consumption and fewer emissions.",
      img: "images/image8.png" 
    },
    {
      title: "Opt for Efficient Driving Practices",
      description: "Adopt fuel-efficient driving habits such as smooth acceleration, maintaining a steady speed, and avoiding excessive idling. These practices help reduce fuel consumption and lower energy use, contributing to overall transportation efficiency.",
      img: "images/image9.png" 
    }
  ],
  all: []
};

tipsData.all = [...tipsData.kitchen, ...tipsData.garden, ...tipsData.transportation];

function filterTips() {
  const filter = document.getElementById('filter').value;
  const tipsSection = document.getElementById('tips-section');

  tipsSection.innerHTML = '';

  let tipsToDisplay = filter === 'all' ? tipsData.all : tipsData[filter];

  console.log('Tips to display:', tipsToDisplay);

  tipsToDisplay.forEach(tip => {
      const tipCard = document.createElement('div');
      tipCard.className = 'tip-card';
      tipCard.innerHTML = `
          <img src="${tip.img}" alt="${tip.title}" class="tip-box-img">
          <h3>${tip.title}</h3>
          <p>${tip.description}</p>
      `;
      tipsSection.appendChild(tipCard);
  });
}

filterTips(); 

document.getElementById('filter').addEventListener('change', filterTips);
