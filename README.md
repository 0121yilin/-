核心功能 (Features)
即時深度視覺化 (Python)：
透過 camera.py 串流本機攝影機的即時影像。
透過 perception.py 將影像餵給 AI 模型並推論產生深度圖 (Depth Map)。
使用 OpenCV 將「原始彩色影像」與「深度彩色地圖」左右並排顯示，方便比對。
中心點距離追蹤 (Python)：
系統會即時擷取深度圖正中央 (h//2, w//2) 的像素值，並在終端機中連續印出「中心點相對距離數值」，適合用來做防撞、距離測量等後續邏輯判斷。
Bento Grid 風格監控介面 (Web/React)：
前端建立了一個具備科技感與高對比黑底 (Dark theme) 視覺風格的儀表板。
包含系統日誌 (System Logs)、FPS/Latency 延遲監控數值展示，以及主程式邏輯的程式碼區塊展示。
本地安裝與執行步驟 (Local Installation)
要將這個專案在你的電腦上跑起來，分為「Python 核心影像處理」與「Web 前端畫面」兩個部分：
步驟一：執行 Python 深度追蹤主程式 (main.py)
請注意：這部分需要配合你原本就擁有的 camera.py 與 perception.py，以及它們背後依賴的 AI 模型權重檔。
確認環境：確認電腦已安裝 Python 3 (建議 3.10 以上版本)。
安裝所需套件：打開終端機 (Terminal)，安裝 OpenCV 與 NumPy：
code
Bash
pip install opencv-python numpy
(註：若你的 perception.py 使用了 PyTorch 或 TensorFlow，請依照該模型的官網指引額外安裝對應套件)
執行程式：確保 main.py, camera.py, perception.py 都在同一個資料夾下，接著輸入：
code
Bash
python main.py
操作方式：會跳出視窗雙拼顯示影像。終端機會不斷印出距離數據。在影像視窗上按下鍵盤的 q 鍵即可安全關閉並釋放鏡頭。
步驟二：執行 React 監控儀表板 (Web 前端)
確認環境：請前往 Node.js 官方網站 下載並安裝 Node.js (建議 v18 或 v20 以上的版本)。
安裝依賴套件：在專案根目錄 (有 package.json 的地方) 開啟終端機，執行：
code
Bash
npm install
啟動開發伺服器：
code
Bash
npm run dev
瀏覽畫面：終端機會印出類似 http://localhost:5173/ (或保留的預設 port 3000) 的網址，按住 Ctrl (或 Cmd) 並點擊該網址，即可在瀏覽器中看到 Bento Grid 監控介面。
