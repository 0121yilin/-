import cv2
import numpy as np
import camera
import perception

# 1. 呼叫 perception 初始化模型
perception.init_model()

while True:
    # 2. 呼叫 camera 獲取影像
    frame = camera.get_frame()
    if frame is None:
        break

    # 3. 把影像傳給 perception 獲取深度圖
    depth_map = perception.get_depth_map(frame)

    # 取得並印出中心點的相對距離數值
    h, w = depth_map.shape[:2]
    center_value = depth_map[h // 2, w // 2]
    print(f"中心點連續相對距離: {center_value}")

    # 處理深度圖通道數以確保能與原始影像水平合併
    if len(depth_map.shape) == 2:
        depth_map_display = cv2.cvtColor(depth_map, cv2.COLOR_GRAY2BGR)
    else:
        depth_map_display = depth_map

    # 4. 使用 OpenCV 並排顯示「原始影像」與「深度圖」
    combined = np.hstack((frame, depth_map_display))
    cv2.imshow("Frame and Depth Map", combined)

    # 5. 按下 'q' 鍵跳出迴圈
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# 釋放相機與銷毀視窗
camera.release_camera()
cv2.destroyAllWindows()
