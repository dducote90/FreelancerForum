const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ]

  let averageStartingPrice = AverageStartingPrice()

function AverageStartingPrice() {
    const totalPrices = freelancers.price
    return totalPrices
}

function renderFreelancers() {
    const freelancersList = document.querySelector('#freelancersList');
    freelancersList.innerHTML = ''

    freelancers.forEach(freelancer => {
        const freelancerCard = document.createElement('div')
        freelancerCard.classList.add('freelancerCard')
        freelancerCard.innerHTML = `
            <h3>${freelancer.name}</h3>
            <p>Occupation: ${freelancer.occupation}</p>
            <p>Starting Price: $${freelancer.price}</p>
        `;
        freelancersList.appendChild(freelancerCard)
    })
}

function addNewFreelancer() {
    const newFreelancer = generateRandomFreelancer()
    freelancers.push(newFreelancer)

    averageStartingPrice = AverageStartingPrice()
    renderFreelancers()
}

function generateRandomFreelancer() {
    const occupations = ["gardener", "programmer", "teacher", "driver"];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)]
    const randomPrice = Math.floor(Math.random() * 100) + 1

    return { name: `Random Freelancer ${freelancers.length + 1}`, price: randomPrice, occupation: randomOccupation };
}

renderFreelancers()
setInterval(addNewFreelancer, 5000)