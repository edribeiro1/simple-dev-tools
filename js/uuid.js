document.getElementById('gerar_uuidv4').addEventListener('click', () => {
    document.getElementById('uuidv4_gerado').value = crypto.randomUUID();
});

document.getElementById('btn-copy').addEventListener('click', () => {
    let uuidv4_gerado = document.getElementById("uuidv4_gerado").value;
    navigator.clipboard.writeText(uuidv4_gerado);
});
