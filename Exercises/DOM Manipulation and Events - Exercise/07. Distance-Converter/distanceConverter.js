function attachEventsListeners() {
    //console.log('TODO:...');
    let button = document.getElementById('convert')
    button.addEventListener('click', clicked)

    let units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function clicked(e) {
        let fromV = document.getElementById('inputUnits').value;
        let toV = document.getElementById('outputUnits').value;

        let inputDistance = Number(document.getElementById('inputDistance').value)
        let outputDistance = document.getElementById('outputDistance')
        let valueInMeter = inputDistance * units[fromV];
        let convertedValue = valueInMeter / units[toV];

        outputDistance.value = convertedValue
    }
}