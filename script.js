// Função para simular a obtenção de informações sobre ameaças
function fetchThreatInfo() {
    const threatDetails = document.getElementById('threat-details');
    threatDetails.innerHTML = '<p>Carregando informações...</p>';

    // Simulação de carregamento
    setTimeout(() => {
        threatDetails.innerHTML = `
            <ul>
                <li><strong>Vírus:</strong> Programas maliciosos que se replicam.</li>
                <li><strong>Phishing:</strong> Tentativas de obter informações sensíveis.</li>
                <li><strong>Ransomware:</strong> Bloqueia acesso aos dados até que um resgate seja pago.</li>
            </ul>
        `;
    }, 1000);
}

// Função para simular o início do monitoramento
function startMonitoring() {
    const monitorStatus = document.getElementById('monitor-status');
    monitorStatus.innerHTML = '<p>Iniciando monitoramento...</p>';

    // Simulação de monitoramento
    setTimeout(() => {
        monitorStatus.innerHTML = '<p>Monitoramento em andamento. Nenhuma ameaça detectada.</p>';
    }, 2000);
}
