// Create a basic hash function to simulate hashing
function hashFunction(customerName) {
    let hash = 0;
    for (let i = 0; i < customerName.length; i++) {
        hash = (hash + customerName.charCodeAt(i)) % 5; // We use modulo 5 to limit to 5 customers
    }
    return hash + 1; // Return a hash value between 1 and 5
}

// Initialize the queue hash table
let customerHashTable = {};

// Function to add a customer to the hash table
function addCustomer(name) {
    let hashIndex = hashFunction(name); // Get the hash index for the customer
    customerHashTable[hashIndex] = name; // Store the customer in the hash table
    console.log(`${name} has been added to the queue with index ${hashIndex}.`);
    displayHashTable(); // Show the current state of the queue
}

// Function to serve a customer (remove from hash table)
function serveCustomer(index) {
    if (customerHashTable[index]) {
        let servedCustomer = customerHashTable[index];
        console.log(`${servedCustomer} is being served.`);
        delete customerHashTable[index]; // Remove the customer from the queue
    } else {
        console.log("Invalid number. Please enter a valid number in the queue.");
    }
    displayHashTable(); // Show the updated state of the queue
}

// Function to display the hash table (current queue)
function displayHashTable() {
    let output = "Current Queue:\n";
    for (let index in customerHashTable) {
        if (customerHashTable.hasOwnProperty(index)) {
            output += `Customer ${index}: ${customerHashTable[index]}\n`;
        }
    }
    console.log(output);
}

// Main program loop
function main() {
    // Ask for the customer's name and add it to the queue (hash table)
    let customerName = prompt("Enter your name to join the queue:");
    addCustomer(customerName);
    
    // Ask the customer service representative to enter a number to serve a customer
    while (true) {
        let serviceNumber = parseInt(prompt("Enter the number of the customer to be serviced (1-5):"));
        if (serviceNumber >= 1 && serviceNumber <= 5) {
            serveCustomer(serviceNumber);
            break; // Exit loop after serving one customer
        } else {
            alert("Please enter a valid number between 1 and 5.");
        }
    }
}

// Start the program
main();
