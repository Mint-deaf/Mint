document.addEventListener('DOMContentLoaded', () => {
    // 見出しの設定
    const headingElement = document.getElementById('heading');
    headingElement.textContent = 'ミント';

    // 詳細情報の設定
    const infoList = document.getElementById('info-list');
    
    const infoItems = [
        '筑波技術大学産業情報学科一年在籍',
        '趣味：サッカー、ゲーム',
        '一言　数学をひたすらに頑張る！'
    ];

    infoItems.forEach(itemText => {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        infoList.appendChild(listItem);
    });
});