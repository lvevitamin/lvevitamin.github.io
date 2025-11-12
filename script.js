// 更精确的版本 - 确保指针指向特等奖
function startLottery() {
    if (isSpinning) return;
    
    const wheel = document.getElementById('wheel');
    const lotteryButton = document.getElementById('lotteryButton');
    const prizeResult = document.getElementById('prizeResult');
    const claimButton = document.getElementById('claimButton');
    
    // 禁用按钮
    lotteryButton.disabled = true;
    lotteryButton.textContent = '抽奖中...';
    isSpinning = true;
    
    // 特等奖区域：270-290度，我们选择283度作为停止点（在区域内）
    const targetStopAngle = 283;
    
    // 计算旋转角度：多圈 + (360 - 目标角度) 让指针指向目标
    const fullCircles = 6;
    const totalRotation = fullCircles * 360 + (360 - targetStopAngle);
    
    // 应用旋转动画
    wheel.style.transition = 'transform 4s cubic-bezier(0.16, 0.89, 0.25, 1)';
    wheel.style.transform = `rotate(${totalRotation}deg)`;
    
    // 动画结束后显示结果
    setTimeout(() => {
        const prizeText = '🎉 恭喜中奖：特等奖！🎉';
        prizeResult.innerHTML = `<div class="prize-result-text">${prizeText}</div>`;
        prizeResult.classList.add('show');
        
        claimButton.style.display = 'block';
        lotteryButton.style.display = 'none';
        isSpinning = false;
    }, 4000);
}