const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const origemFiles = document.getElementById('origem').files;
    const destinoFiles = document.getElementById('destino').files;

    if (origemFiles.length > 0 && destinoFiles.length > 0) {
        console.log('Pasta de origem selecionada:', origemFiles[0].webkitRelativePath);
        console.log('Pasta de destino selecionada:', destinoFiles[0].webkitRelativePath);
        
        // Aqui você pode realizar as operações necessárias com as pastas de origem e destino
    } else {
        console.log('Por favor, selecione uma pasta de origem e uma pasta de destino.');
    }
});