
import React, { useState } from 'react';
const steps = [
  { title: '步骤 1', content: '这是第一步的内容' },
  { title: '步骤 2', content: '这是第二步的内容' },
  // ...更多步骤
];



const GuideComponent = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // 引导结束时的操作
      // 可以关闭引导、更新状态等
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="guide-container">
      <div className="guide-content">
        <h2>{steps[currentStep].title}</h2>
        <p>{steps[currentStep].content}</p>
        <div className="actions">
          {currentStep > 0 && (
            <button onClick={previousStep}>上一步</button>
          )}
          <button onClick={nextStep}>
            {currentStep === steps.length - 1 ? '完成' : '下一步'}
          </button>
        </div>
      </div>
    </div>
  );
};



function App() {
  return (
    <div className="App">
      {/* 其他应用程序内容 */}
      <GuideComponent steps={steps} />
    </div>
  );
}

export default App;
