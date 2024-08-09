function volume_sphere() {
    // Get the radius value from the input field
    let radius = document.getElementById('radius').value;

    // Parse the radius to a float
    radius = parseFloat(radius);

    // Calculate the volume using the formula: V = (4/3) * π * r^3
    // If the radius is a valid number and non-negative, calculate the volume
    let volume = 0;
    if (!isNaN(radius) && radius >= 0) {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        // Round the result to 4 decimal places
        volume = volume.toFixed(4);
    } else {
        // If the input is not valid (negative or non-numeric), set volume to NaN
        volume = 'NaN';
    }

    // Display the volume in the output field
    document.getElementById('volume').value = volume;

    return false; // Prevent form submission (since it's usually within a form)
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
