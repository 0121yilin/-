/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="h-screen w-full bg-[#09090B] text-[#FAFAFA] font-sans p-6 overflow-hidden flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-6 gap-4 h-full w-full max-w-[1024px] max-h-[768px]">
        {/* Header Card */}
        <div className="bg-[#18181B] border border-[#27272A] rounded-xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center col-span-1 md:col-span-4 row-span-1 relative overflow-hidden">
          <div className="flex flex-col mb-4 md:mb-0">
            <h1 className="m-0 text-[18px] md:text-[20px] font-semibold">深度感知監控系統 (Depth Monitor)</h1>
            <div className="text-[12px] md:text-[14px] text-[#71717A] mt-1">主要程序: main.py • 運行環境: Python 3.10</div>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 items-center">
            <div className="text-left md:text-right">
              <div className="text-[11px] md:text-[12px] text-[#71717A] mb-1">FPS</div>
              <div className="text-[20px] md:text-[24px] font-bold tracking-tight text-[#10B981]">60.2</div>
            </div>
            <div className="text-left md:text-right">
              <div className="text-[11px] md:text-[12px] text-[#71717A] mb-1">Latency</div>
              <div className="text-[20px] md:text-[24px] font-bold tracking-tight">12ms</div>
            </div>
            <div className="bg-[#10B98133] text-[#10B981] px-2.5 py-1 rounded-full text-[11px] md:text-[12px] font-semibold inline-flex items-center gap-1.5 ml-0 md:ml-2">
              <span className="w-2 h-2 bg-[#10B981] rounded-full"></span>
              運作中
            </div>
          </div>
        </div>

        {/* Main View Card */}
        <div className="bg-black border border-[#27272A] rounded-xl p-4 flex flex-col relative overflow-hidden col-span-1 md:col-span-2 row-span-3">
          <span className="absolute top-3 left-3 bg-black/60 px-2 py-1 rounded text-[11px] md:text-[12px] font-medium z-10 text-[#A1A1AA] border border-[#3F3F46]">
            原始影像 (Original RGB)
          </span>
          <div className="w-full h-full flex items-center justify-center opacity-60">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3F3F46" strokeWidth="1">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
        </div>

        {/* Depth Map Card */}
        <div className="border border-[#27272A] rounded-xl p-0 flex flex-col relative overflow-hidden col-span-1 md:col-span-2 row-span-3">
          <span className="absolute top-3 left-3 bg-black/60 px-2 py-1 rounded text-[11px] md:text-[12px] font-medium z-10 text-[#A1A1AA] border border-[#3F3F46]">
            深度圖 (Depth Heatmap)
          </span>
          <div 
            className="w-full h-full flex items-center justify-center text-[#8B5CF6] font-bold text-[12px] md:text-[14px] uppercase" 
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #1E1E2E 0px, #1E1E2E 10px, #2E2E3E 10px, #2E2E3E 20px)' }}
          >
            <span className="bg-[#18181B] px-3 py-1.5 rounded border border-[#27272A] tracking-wider">Depth Data Visualization</span>
          </div>
        </div>

        {/* Log Card */}
        <div className="bg-[#18181B] border border-[#27272A] rounded-xl p-4 flex flex-col relative overflow-auto col-span-1 row-span-2 font-mono text-[10px] md:text-[11px] text-[#71717A] leading-loose md:leading-relaxed">
          <div className="text-[#A1A1AA] font-bold mb-3 text-[10px]">SYSTEM LOGS</div>
          <div>[14:20:01] Model Init OK</div>
          <div>[14:20:02] Frame Captured</div>
          <div>[14:20:02] Inference Start</div>
          <div>[14:20:03] Depth Map Generated</div>
          <div>[14:20:03] Frame Sync: OK</div>
          <div>[14:20:04] WaitKey listening...</div>
        </div>

        {/* Code Card */}
        <div className="bg-[#0D0D0E] border border-[#3F3F46] rounded-xl p-4 flex flex-col relative overflow-auto col-span-1 md:col-span-3 row-span-2">
          <div className="text-[#A1A1AA] font-bold mb-3 text-[10px]">MAIN_PROGRAM_LOGIC</div>
          <pre className="text-[#E4E4E7] font-mono text-[11px] md:text-[13px] leading-[1.5] whitespace-pre-wrap m-0">
{`while True:
    frame = get_frame()
    depth_map = get_depth_map(frame, model)

    # Concatenate frames for display
    display = cv2.hconcat([frame, depth_map])
    cv2.imshow('Monitoring System', display)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break`}
          </pre>
        </div>
      </div>
    </div>
  );
}
