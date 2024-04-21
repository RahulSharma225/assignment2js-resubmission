// Function to create a smoothie object and display its description
function createSmoothie() {
  // Get selected flavor
  const flavor = document.getElementById("flavor").value;
  // Get selected add-ins
  const addIns = document.querySelectorAll('input[name="add-ins"]:checked');
  let addInsList = [];
  addIns.forEach((item) => {
    addInsList.push(item.value);
  });

  // Create smoothie object
  const smoothie = new Smoothie(flavor, addInsList);
  // Display smoothie description
  const smoothieDescription = document.getElementById("smoothie-description");
  smoothieDescription.innerHTML = `<p>Your smoothie: ${smoothie.getDescription()}</p>`;
}

// Class representing a smoothie
class Smoothie {
  constructor(flavor, addIns) {
    this.flavor = flavor;
    this.addIns = addIns;
  }

  // Method to get smoothie description
  getDescription() {
    let description = `Flavor: ${this.flavor}`;
    if (this.addIns.length > 0) {
      description += "<br>Add-ins: ";
      this.addIns.forEach((addIn, index) => {
        description += addIn;
        if (index !== this.addIns.length - 1) {
          description += ", ";
        }
      });
    }
    return description;
  }
}
