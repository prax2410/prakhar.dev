import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Lock, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

const STAGES = [
	{ id: 1, name: "Raw Material", code: "MAT_IN", type: "Intake" },
	{ id: 2, name: "CNC Milling", code: "CNC_MILL", type: "Machining" },
	{ id: 3, name: "QA Inspection", code: "QA_CHECK", type: "Quality Gate" },
	{ id: 4, name: "Sub-Assembly", code: "ASM_LINE", type: "Assembly" },
	{ id: 5, name: "Heat Treatment", code: "HEAT_TRT", type: "Finishing" },
	{ id: 6, name: "Final Dispatch", code: "DISPATCH", type: "Shipping" },
];

export default function WorkflowSimulator() {
	const [activeStageId, setActiveStageId] = useState(2);
	const [isReworking, setIsReworking] = useState(false);
	const [isLocked, setIsLocked] = useState(false);
	const [transactionLogs, setTransactionLogs] = useState([
		"BATCH #CA-904 initialized at [MAT_IN].",
		"Transitioned to [CNC_MILL] with transaction ID #89211.",
	]);

	const advanceStage = () => {
		if (activeStageId >= 6) {
			setActiveStageId(1);
			setIsReworking(false);
			setTransactionLogs(["BATCH #CA-905 fresh run started."]);
			return;
		}

		// Simulate pessimistic locking
		setIsLocked(true);
		setTimeout(() => {
			setIsLocked(false);
			const next = activeStageId + 1;
			setActiveStageId(next);
			setIsReworking(false);
			setTransactionLogs((prev) => [
				...prev.slice(-3),
				`COMMIT: Batch advanced to [${STAGES.find((s) => s.id === next)?.code}] via SELECT ... FOR UPDATE.`,
			]);
		}, 300);
	};

	const triggerRework = () => {
		setIsLocked(true);
		setTimeout(() => {
			setIsLocked(false);
			setActiveStageId(2); // Branch back to CNC Milling
			setIsReworking(true);
			setTransactionLogs((prev) => [
				...prev.slice(-3),
				"QA REJECT DETECTED: Routed batch to Rework Loop at [CNC_MILL]. Branch lock verified.",
			]);
		}, 300);
	};

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
					<span className="font-mono font-bold text-[#1d1d1f] dark:text-white tracking-wider uppercase">
						12-Stage Manufacturing Workflow &amp; FSM Simulator
					</span>
				</div>

				<div className="flex items-center gap-2 font-mono text-[11px] text-[#86868b]">
					<span>DEPLOYMENT: <strong>Tier-1 Discrete Manufacturing Plant</strong></span>
				</div>
			</div>

			{/* Interactive Stage Pipeline Canvas */}
			<div className="p-5 sm:p-6 space-y-6">
				{/* The Visual DAG Nodes */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative">
					{STAGES.map((stage) => {
						const isCurrent = activeStageId === stage.id;
						const isCompleted = activeStageId > stage.id;

						return (
							<div
								key={stage.id}
								className={`p-3.5 rounded-xl border relative flex flex-col justify-between h-[124px] min-h-[124px] transition-all ${
									isCurrent
										? "border-[#0071e3] bg-[#0071e3]/5 dark:bg-[#0071e3]/10 ring-2 ring-[#0071e3]/20"
										: isCompleted
										? "border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
										: "border-[#e5e7eb] dark:border-[#2d2d2f] bg-[#f5f5f7] dark:bg-[#202022] opacity-75"
								}`}
							>
								{/* Header number & tag */}
								<div className="flex items-center justify-between text-[11px] font-mono font-bold">
									<span>0{stage.id}</span>
									{isCurrent ? (
										<span className="px-2 py-0.5 rounded-full bg-[#0071e3] text-white text-[10px] font-semibold">
											ACTIVE
										</span>
									) : isCompleted ? (
										<span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[10px]">
											<CheckCircle className="w-3.5 h-3.5" />
											DONE
										</span>
									) : (
										<span className="text-[#86868b] text-[10px] font-normal">
											PENDING
										</span>
									)}
								</div>

								{/* Stage Name */}
								<div className="my-1">
									<div className="text-[13px] font-bold text-[#1d1d1f] dark:text-white leading-tight line-clamp-1">
										{stage.name}
									</div>
									<span className="text-[10px] font-mono text-[#86868b] block">{stage.type}</span>
								</div>

								{/* Bottom Status code */}
								<div className="text-[10px] font-mono text-[#86868b] pt-1 border-t border-[#e5e7eb]/60 dark:border-[#2d2d2f]">
									[{stage.code}]
								</div>
							</div>
						);
					})}
				</div>

				{/* Branching Rework Indicator */}
				<AnimatePresence>
					{isReworking && (
						<motion.div
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0 }}
							className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-mono flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
						>
							<div className="flex items-start sm:items-center gap-2.5">
								<RotateCcw className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
								<span className="leading-relaxed">
									<strong>REWORK BRANCH ACTIVE:</strong> Non-linear routing triggered at Stage 03 (QA) back to Stage 02 (CNC Milling). Branch lock verified against DAG definition.
								</span>
							</div>
							<span className="text-[11px] font-bold shrink-0 px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300">
								ROUTE #04-R
							</span>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Interactive Controls & Concurrency Row Lock Inspector */}
				<div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#e5e7eb] dark:border-[#2d2d2f]">
					<div className="flex flex-wrap items-center gap-2.5">
						<button
							type="button"
							onClick={advanceStage}
							disabled={isLocked}
							className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#0071e3] hover:bg-[#2997ff] text-white text-[13px] font-medium transition-colors shadow-sm disabled:opacity-50"
						>
							<Play className="w-3.5 h-3.5" />
							<span>{activeStageId >= 6 ? "Restart Batch Run" : "Advance Next Stage"}</span>
						</button>

						<button
							type="button"
							onClick={triggerRework}
							disabled={isLocked || isReworking}
							className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full border text-[13px] font-medium transition-colors ${
								isReworking
									? "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 opacity-60 cursor-not-allowed"
									: "border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10"
							}`}
						>
							<RotateCcw className="w-3.5 h-3.5" />
							<span>Simulate QA Reject (Branch Rework)</span>
						</button>
					</div>

					{/* Row lock status pill */}
					<div className="flex items-center gap-2 text-xs font-mono text-[#86868b] self-start sm:self-auto">
						<Lock className={`w-3.5 h-3.5 ${isLocked ? "text-amber-500" : "text-emerald-500"}`} />
						<span>
							{isLocked
								? "ACID Transaction: FOR UPDATE Row Locked..."
								: "Pessimistic Concurrency Guard: ACTIVE"}
						</span>
					</div>
				</div>

				{/* SQL Transaction Log Terminal */}
				<div className="p-3.5 rounded-xl bg-[#09090b] border border-[#27272a] text-[11px] font-mono text-zinc-300 space-y-1 min-h-[96px]">
					<div className="text-zinc-500 pb-1 border-b border-zinc-800 flex justify-between items-center">
						<span>// CONCURRENT OPERATOR TRANSACTION AUDIT LOG</span>
						<ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
					</div>
					{transactionLogs.map((log, i) => (
						<div key={i} className="leading-relaxed">
							<span className="text-[#2997ff]">postgres@erp_db:&gt;</span> {log}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
