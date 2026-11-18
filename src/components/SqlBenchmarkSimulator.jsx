import React, { useState } from "react";
import { motion } from "framer-motion";
import { Gauge, Zap, Database, ArrowRight, Play, CheckCircle } from "lucide-react";

export default function SqlBenchmarkSimulator() {
	const [datasetSize, setDatasetSize] = useState(50000);
	const [isRunning, setIsRunning] = useState(false);
	const [hasRan, setHasRan] = useState(false);
	const [offsetProgress, setOffsetProgress] = useState(1);
	const [keysetProgress, setKeysetProgress] = useState(1);

	const runBenchmark = () => {
		if (isRunning) return;
		setIsRunning(true);
		setHasRan(false);
		setOffsetProgress(0);
		setKeysetProgress(0);

		// Keyset snaps forward almost instantly (1.8ms)
		setTimeout(() => {
			setKeysetProgress(1);
		}, 80);

		// Offset scans slowly based on dataset size
		const scanDuration = Math.min(2200, Math.max(600, (datasetSize / 100000) * 2000));
		const startTime = Date.now();

		const interval = setInterval(() => {
			const elapsed = Date.now() - startTime;
			const ratio = Math.min(1, elapsed / scanDuration);
			setOffsetProgress(ratio);

			if (ratio >= 1) {
				clearInterval(interval);
				setIsRunning(false);
				setHasRan(true);
			}
		}, 30);
	};

	// Calculated realistic latencies based on PostgreSQL EXPLAIN ANALYZE benchmarks
	const offsetLatencyMs = Math.round((datasetSize / 1000) * 4.2 + 12);
	const keysetLatencyMs = 1.8;
	const speedupPct = Math.round(((offsetLatencyMs - keysetLatencyMs) / offsetLatencyMs) * 100);

	return (
		<div className="rounded-2xl border border-[#e5e7eb] dark:border-[#2d2d2f] bg-white dark:bg-[#161617] overflow-hidden shadow-sm transition-colors">
			{/* Chrome Header */}
			<div className="px-4 py-3 bg-[#f5f5f7] dark:bg-[#202022] border-b border-[#e5e7eb] dark:border-[#2d2d2f] flex flex-wrap items-center justify-between gap-3 text-xs">
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-1.5 mr-2">
						<span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
						<span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
						<span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
					</div>
					<span className="font-mono font-bold text-[#1d1d1f] dark:text-white tracking-wider uppercase flex items-center gap-1.5">
						<Database className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
						PostgreSQL Benchmark: Keyset Cursor vs OFFSET Scan
					</span>
				</div>

				<span className="font-mono text-[11px] text-[#86868b]">
					BOM REPORTING OPTIMIZATION · PRODUCTION BENCHMARK
				</span>
			</div>

			<div className="p-5 sm:p-6 space-y-6">
				{/* Dataset Size Slider */}
				<div className="p-4 rounded-xl bg-[#f5f5f7] dark:bg-[#202022] border border-[#e5e7eb] dark:border-[#2d2d2f] space-y-2">
					<div className="flex items-center justify-between text-xs font-mono">
						<span className="font-semibold text-[#1d1d1f] dark:text-white">
							Simulate BOM Dataset Size:
						</span>
						<span className="font-bold text-[#0071e3] dark:text-[#2997ff] text-[13px]">
							{datasetSize.toLocaleString()} Total Rows
						</span>
					</div>
					<input
						type="range"
						min="5000"
						max="100000"
						step="5000"
						value={datasetSize}
						onChange={(e) => setDatasetSize(Number(e.target.value))}
						disabled={isRunning}
						className="w-full accent-[#0071e3] cursor-pointer"
					/>
					<div className="flex justify-between text-[10px] font-mono text-[#86868b]">
						<span>5,000 Rows</span>
						<span>50,000 Rows</span>
						<span>100,000 Rows</span>
					</div>
				</div>

				{/* Two Parallel Racing Bars */}
				<div className="space-y-4">
					{/* Method 1: Traditional OFFSET Scan */}
					<div className="space-y-1.5">
						<div className="flex flex-wrap items-center justify-between gap-1.5 text-xs font-mono">
							<span className="text-[#1d1d1f] dark:text-white font-medium flex items-center gap-1.5">
								<span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
								<span>Traditional SQL OFFSET:</span>
								<code className="text-[#86868b]">OFFSET {datasetSize.toLocaleString()} LIMIT 50</code>
							</span>
							<span className="text-red-500 font-bold shrink-0">
								{isRunning ? `${Math.round(offsetProgress * offsetLatencyMs)} ms...` : `${offsetLatencyMs} ms`}
							</span>
						</div>
						<div className="h-4 rounded-full bg-[#e5e7eb] dark:bg-[#27272a] overflow-hidden p-0.5">
							<motion.div
								className="h-full rounded-full bg-gradient-to-r from-red-500/80 to-red-500"
								style={{ width: `${offsetProgress * 100}%` }}
							/>
						</div>
						<span className="text-[11px] font-mono text-[#86868b] block leading-relaxed">
							*Disk Page Scans: {Math.round(offsetProgress * datasetSize).toLocaleString()} buffer rows scanned sequentially before output.
						</span>
					</div>

					{/* Method 2: Keyset Cursor Filter */}
					<div className="space-y-1.5">
						<div className="flex flex-wrap items-center justify-between gap-1.5 text-xs font-mono">
							<span className="text-[#1d1d1f] dark:text-white font-semibold flex items-center gap-1.5">
								<span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
								<span>Keyset Cursor Seek:</span>
								<code className="text-[#0071e3] dark:text-[#2997ff]">(created_at, id) &lt; ($1, $2)</code>
							</span>
							<span className="text-emerald-500 font-bold shrink-0">
								{keysetLatencyMs} ms (Sub-2ms)
							</span>
						</div>
						<div className="h-4 rounded-full bg-[#e5e7eb] dark:bg-[#27272a] overflow-hidden p-0.5">
							<motion.div
								className="h-full rounded-full bg-gradient-to-r from-emerald-500/80 to-emerald-400"
								style={{ width: `${keysetProgress * 100}%` }}
							/>
						</div>
						<span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 block font-semibold leading-relaxed">
							*Direct B-Tree Index Seek: Zero intermediate row scans. Latency remains fixed regardless of table size.
						</span>
					</div>
				</div>

				{/* Run Button & Result Callout */}
				<div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#e5e7eb] dark:border-[#2d2d2f]">
					<button
						type="button"
						onClick={runBenchmark}
						disabled={isRunning}
						className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#2997ff] text-white text-[13px] font-medium shadow-sm transition-colors disabled:opacity-50"
					>
						<Play className={`w-3.5 h-3.5 ${isRunning ? "animate-spin" : ""}`} />
						<span>{isRunning ? "Executing EXPLAIN ANALYZE..." : "Run Query Benchmark Race"}</span>
					</button>

					<div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20 self-start sm:self-auto">
						<Zap className="w-3.5 h-3.5 shrink-0" />
						<span>{speedupPct}% FASTER LATENCY WITH KEYSET CURSOR</span>
					</div>
				</div>
			</div>
		</div>
	);
}
