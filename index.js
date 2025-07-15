function calculateLevelRanked (victories, defeats) {
    // Calcula o saldo de Rankeadas
    const balanceVictories = victories - defeats;
    let levelRanked

    //Determina o nível com base nas vitórias
    if (balanceVictories < 10) {
        levelRanked = "Ferro";
    } else if (balanceVictories >= 11 && balanceVictories <= 20) {
        levelRanked = "Bronze";
    } else if (balanceVictories >= 21 && balanceVictories <= 50) {
        levelRanked = "Prata";
    } else if (balanceVictories >= 51 && balanceVictories <= 80) {
        levelRanked = "Ouro";
    } else if (balanceVictories >= 81 && balanceVictories <= 90) {
        levelRanked = "Diamante";
    } else if (balanceVictories >= 91 && balanceVictories <= 100) {
        levelRanked = "Lendário";
    } else if (balanceVictories >= 101) {
        levelRanked ="Imortal";
    }

    return `O Herói tem de saldo ${balanceVictories} está no nível de ${levelRanked}`;
}

console.log(calculateLevelRanked(101, 20));