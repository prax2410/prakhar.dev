import React, { useState, useEffect, useRef } from "react";
import { 
	Activity, 
	RefreshCw, 
	Copy, 
	Check 
} from "lucide-react";
import { useCopyFeedback } from "../hooks/useCopyFeedback";

/**
 * 1. Interactive Enterprise ERP & SaaS Dashboard Mockup
 */
export function ErpDashboardMockup() {
	const [activeModule, setActiveModule] = useState("payroll");
	const [simulating, setSimulating] = useState(false);
	const [simulatedCount, setSimulatedCount] = useState(148);
	const timerRef = useRef(null);

	useEffect(() => {
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);

	const handleSimulateBatch = () => {
		if (simulating) return;
		setSimulating(true);
		timerRef.current = setTimeout(() => {
			setSimulating(false);
			setSimulatedCount((prev) => prev + 1);
		}, 800);
	};

	return (
		<div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1017] font-mono text-xs overflow-hidden">
			{/* Mockup Window Chrome */}
			<div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px]">
				<div className="flex items-center gap-2">
					<span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">
						ENTERPRISE ERP · MULTI-COMPANY PREVIEW
					</span>
				</div>
				<div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
					<span className="bg-blue-500/10 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded font-semibold">
						CONCEPTUAL DEMO · DB-PER-TENANT
					</span>
					<span>COMPANY_DB: TENANT_01</span>
				</div>
			</div>

			{/* Sub-nav Module Tabs */}
			<div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2 overflow-x-auto">
				<span className="text-[10px] text-zinc-400 uppercase font-bold mr-1 shrink-0">MODULE:</span>
				{[
					{ id: "payroll", label: "HRMS & Automated Payroll" },
					{ id: "inventory", label: "Inventory & Material Ledger" },
					{ id: "attendance", label: "Biometric Attendance Engine" },
				].map((tab) => (
					<button
						type="button"
						key={tab.id}
						onClick={() => setActiveModule(tab.id)}
						className={`px-3 py-1 uppercase text-[11px] transition-colors whitespace-nowrap border ${
							activeModule === tab.id
								? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold border-zinc-950 dark:border-white"
								: "bg-transparent text-zinc-600 dark:text-zinc-400 border-transparent hover:border-zinc-300 dark:hover:border-zinc-700"
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>

			{/* Module Content */}
			<div className="p-4 sm:p-5 space-y-4">
				{activeModule === "payroll" && (
					<>
						{/* 3 Metric Chips */}
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
							<div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
								<span className="text-[10px] text-zinc-400 block uppercase">ENROLLED WORKFORCE</span>
								<div className="text-xl font-black text-zinc-950 dark:text-white mt-0.5">{simulatedCount} EMPLOYEES</div>
								<span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">100% Biometric Mapped</span>
							</div>
							<div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
								<span className="text-[10px] text-zinc-400 block uppercase">PAYROLL DISBURSEMENT</span>
								<div className="text-xl font-black text-zinc-950 dark:text-white mt-0.5">₹14.85 LAKHS</div>
								<span className="text-[10px] text-zinc-500">Auto TDS & Deductions</span>
							</div>
							<div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
								<span className="text-[10px] text-zinc-400 block uppercase">BATCH LATENCY</span>
								<div className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">14ms [200 OK]</div>
								<span className="text-[10px] text-zinc-500">PostgreSQL ACID Transaction</span>
							</div>
						</div>

						{/* Interactive Payroll Table Mockup */}
						<div className="border border-zinc-200 dark:border-zinc-800 overflow-x-auto">
							<table className="w-full text-left text-[11px]">
								<thead className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 uppercase">
									<tr>
										<th className="p-2.5">EMP ID // NAME</th>
										<th className="p-2.5">DEPARTMENT</th>
										<th className="p-2.5">WORK DAYS</th>
										<th className="p-2.5">DISBURSEMENT</th>
										<th className="p-2.5">STATUS</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-zinc-800 dark:text-zinc-200">
									<tr>
										<td className="p-2.5 font-bold">EMP-041 // Rahul Sharma</td>
										<td className="p-2.5">Engineering (Full Stack)</td>
										<td className="p-2.5">26 / 26 Days</td>
										<td className="p-2.5 font-bold">₹95,000</td>
										<td className="p-2.5 text-emerald-600 dark:text-emerald-400 font-bold">DISBURSED ✓</td>
									</tr>
									<tr>
										<td className="p-2.5 font-bold">EMP-088 // Priya Nair</td>
										<td className="p-2.5">Quality Assurance</td>
										<td className="p-2.5">25 / 26 Days</td>
										<td className="p-2.5 font-bold">₹72,500</td>
										<td className="p-2.5 text-emerald-600 dark:text-emerald-400 font-bold">DISBURSED ✓</td>
									</tr>
									<tr>
										<td className="p-2.5 font-bold">EMP-112 // Ankit Patel</td>
										<td className="p-2.5">Shopfloor Automation</td>
										<td className="p-2.5">26 / 26 Days</td>
										<td className="p-2.5 font-bold">₹88,000</td>
										<td className="p-2.5 text-emerald-600 dark:text-emerald-400 font-bold">DISBURSED ✓</td>
									</tr>
								</tbody>
							</table>
						</div>

						{/* Action Simulation Trigger */}
						<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
							<span className="text-[11px] text-zinc-500">
								*Interactive live demo of PostgreSQL batch calculation & ACID locking logic
							</span>
							<button
								type="button"
								onClick={handleSimulateBatch}
								disabled={simulating}
								className="px-4 py-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase text-[11px] flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm disabled:opacity-50"
							>
								<RefreshCw className={`w-3.5 h-3.5 ${simulating ? "animate-spin" : ""}`} />
								<span>{simulating ? "COMMITTING ACID TRANSACTION..." : "SIMULATE BATCH CALCULATION"}</span>
							</button>
						</div>
					</>
				)}

				{activeModule === "inventory" && (
					<div className="space-y-3">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
							<div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
								<span className="text-[10px] text-zinc-400 block uppercase">MANAGED SKUS</span>
								<div className="text-xl font-black text-zinc-950 dark:text-white mt-0.5">1,248 ITEMS</div>
								<span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Real-time Balance</span>
							</div>
							<div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
								<span className="text-[10px] text-zinc-400 block uppercase">REORDER ALERTS</span>
								<div className="text-xl font-black text-amber-500 mt-0.5">4 LOW STOCK</div>
								<span className="text-[10px] text-zinc-500">Auto PO Generated</span>
							</div>
							<div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
								<span className="text-[10px] text-zinc-400 block uppercase">MODBUS SCALE SYNC</span>
								<div className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">LIVE CONNECTED</div>
								<span className="text-[10px] text-zinc-500">RS-485 Weighbridge Bus</span>
							</div>
						</div>
						<div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-600 dark:text-zinc-300">
							<span className="font-bold text-zinc-900 dark:text-white block mb-1">ILLUSTRATIVE INVENTORY TRANSACTION FLOW:</span>
							Stock reservations update inside PostgreSQL transactions using per-company database isolation across 5 onboarded organizations.
						</div>
					</div>
				)}

				{activeModule === "attendance" && (
					<div className="p-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 space-y-2 text-[11px]">
						<div className="flex justify-between items-center pb-2 border-b border-zinc-200 dark:border-zinc-800">
							<span className="font-bold text-zinc-900 dark:text-white uppercase">BIOMETRIC TCP SOCKET INGESTION:</span>
							<span className="text-emerald-600 dark:text-emerald-400 font-bold">DAEMON ONLINE</span>
						</div>
						<p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
							Pushes raw timestamp punches from biometric hardware directly through Node.js socket parsers into partitioned PostgreSQL shifts, auto-deducting late arrivals and lunch intervals without manual HR intervention.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

/**
 * 2. Interactive IIoT Machine Telemetry Mockup
 */
export function IiotTelemetryMockup() {
	const [activeMachine, setActiveMachine] = useState("cnc-04");

	const machines = {
		"cnc-04": {
			name: "CNC Milling #04",
			type: "3-Axis Precision Machining",
			rpm: "1,420 RPM",
			feedRate: "280 mm/min",
			temp: "42.8°C",
			status: "RUNNING",
			protocol: "MQTT / RS-485",
			registers: "Holding Reg 0x0020",
			polling: "~1s interval",
			pct: 0.71,
		},
		"line-a": {
			name: "PLC Line A",
			type: "Modbus TCP Automation Controller",
			rpm: "Indexed (Sync)",
			feedRate: "Cycle: 4.2s",
			temp: "38.1°C",
			status: "ACTIVE SYNC",
			protocol: "Modbus TCP/IP",
			registers: "32 Registers OK",
			polling: "~1s interval",
			pct: 0.88,
		},
		"press-01": {
			name: "Hydraulic Press #01",
			type: "Heavy Forming Machine",
			rpm: "4.6 Bar",
			feedRate: "Stroke: 18 / min",
			temp: "45.0°C",
			status: "OPTIMAL",
			protocol: "Modbus RTU",
			registers: "Holding Regs OK",
			polling: "~1s interval",
			pct: 0.65,
		},
	};

	const current = machines[activeMachine];
	const arcPath = "M 20 75 A 50 50 0 0 1 120 75";
	const arcTotalLength = 157.08; // Math.PI * 50
	const needleAngleRad = Math.PI * (1 - current.pct);
	const needleX = 70 + 40 * Math.cos(needleAngleRad);
	const needleY = 75 - 40 * Math.sin(needleAngleRad);

	return (
		<div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1017] font-mono text-xs overflow-hidden">
			{/* Chrome Header */}
			<div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px]">
				<div className="flex items-center gap-2">
					<Activity className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
					<span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">
						IIOT TELEMETRY CONCEPT PREVIEW
					</span>
				</div>
				<div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
					<span className="w-2 h-2 rounded-full bg-emerald-500" />
					<span>UP TO 65 NODES @ ~1s</span>
				</div>
			</div>

			{/* Machine Switcher Tabs */}
			<div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2 overflow-x-auto">
				<span className="text-[10px] text-zinc-400 uppercase font-bold mr-1 shrink-0">SELECT NODE:</span>
				{Object.keys(machines).map((k) => (
					<button
						type="button"
						key={k}
						onClick={() => setActiveMachine(k)}
						className={`px-3 py-1 uppercase text-[11px] transition-colors whitespace-nowrap border ${
							activeMachine === k
								? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold border-zinc-950 dark:border-white"
								: "bg-transparent text-zinc-600 dark:text-zinc-400 border-transparent hover:border-zinc-300 dark:hover:border-zinc-700"
						}`}
					>
						{machines[k].name.split(" ")[0]} {machines[k].name.split(" ")[1]}
					</button>
				))}
			</div>

			{/* Telemetry Display */}
			<div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
				{/* Gauge & Main Tachometer Visual */}
				<div className="md:col-span-5 p-4 bg-zinc-950 text-white border border-zinc-800 rounded-sm flex flex-col items-center justify-center relative overflow-hidden">
					<span className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">LIVE SENSOR TELEMETRY</span>
					
					{/* Radial SVG Tachometer with Exact Mathematical Path Alignment */}
					<svg className="w-40 h-24 overflow-visible" viewBox="0 0 140 92">
						{/* Background Track */}
						<path
							d={arcPath}
							fill="none"
							stroke="#27272a"
							strokeWidth="8"
							strokeLinecap="round"
						/>
						{/* Active Progress Arc (Strict 1:1 Trajectory) */}
						<path
							d={arcPath}
							fill="none"
							stroke="#10b981"
							strokeWidth="8"
							strokeLinecap="round"
							strokeDasharray={arcTotalLength}
							strokeDashoffset={arcTotalLength * (1 - current.pct)}
							className="transition-all duration-500 ease-out"
						/>
						{/* Scale Labels */}
						<text x="18" y="87" fill="#71717a" fontSize="8" fontFamily="monospace" textAnchor="middle">0</text>
						<text x="70" y="20" fill="#34d399" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
							{Math.round(current.pct * 100)}% LOAD
						</text>
						<text x="122" y="87" fill="#71717a" fontSize="8" fontFamily="monospace" textAnchor="middle">MAX</text>

						{/* Rotating Center Needle */}
						<line
							x1="70"
							y1="75"
							x2={needleX}
							y2={needleY}
							stroke="#ffffff"
							strokeWidth="2.5"
							strokeLinecap="round"
							className="transition-all duration-500 ease-out"
						/>
						{/* Needle Pivot Hub */}
						<circle cx="70" cy="75" r="4.5" fill="#10b981" />
						<circle cx="70" cy="75" r="2" fill="#09090b" />
					</svg>

					<div className="text-2xl font-black text-white tracking-tight -mt-1">
						{current.rpm}
					</div>
					<div className="text-[11px] text-emerald-400 font-bold mt-1 uppercase flex items-center gap-1.5">
						<span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
						<span>STATUS: {current.status}</span>
					</div>
				</div>

				{/* Specs Breakdown */}
				<div className="md:col-span-7 space-y-2.5 text-xs">
					<div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
						<span className="text-slate-500 uppercase">CONTROLLER / TYPE:</span>
						<span className="font-bold text-slate-900 dark:text-white">{current.type}</span>
					</div>
					<div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
						<span className="text-slate-500 uppercase">COMMUNICATION PROTOCOL:</span>
						<span className="font-bold text-blue-600 dark:text-blue-400">{current.protocol}</span>
					</div>
					<div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
						<span className="text-slate-500 uppercase">MODBUS REGISTERS:</span>
						<span className="font-bold text-slate-900 dark:text-white">{current.registers}</span>
					</div>
					<div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
						<span className="text-slate-500 uppercase">CYCLE RATE / SPEED:</span>
						<span className="font-bold text-slate-900 dark:text-white">{current.feedRate}</span>
					</div>
					<div className="flex justify-between py-1.5">
						<span className="text-slate-500 uppercase">POLLING CADENCE:</span>
						<span className="font-bold text-emerald-600 dark:text-emerald-400">{current.polling}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

/**
 * 3. Sanitized Reference Pattern Viewer
 */
export function CodeContractViewer({ projectId }) {
	const { copy, isCopied } = useCopyFeedback();

	const snippets = {
		"enterprise-erp-saas": {
			filename: "src/middleware/tenantPoolRouter.js",
			lang: "API Auth, RBAC & Separate PostgreSQL Pool Routing",
			code: `// Per-Company PostgreSQL Pool Resolution + Granular RBAC Guard
export const requireTenantAndPermission = (requiredPerm) => (req, res, next) => {
  const companyCode = req.user?.companyCode; // Verified JWT claim
  const permissions = req.user?.permissions || [];

  if (!permissions.includes(requiredPerm)) {
    return res.status(403).json({ error: 'FORBIDDEN_ACTION' });
  }

  // Separate PostgreSQL Pool per onboarded company (bounded pool size)
  const tenantPool = tenantPoolRegistry.get(companyCode);
  if (!companyCode || !tenantPool) {
    return res.status(403).json({ error: 'INVALID_TENANT_CONTEXT' });
  }

  req.db = tenantPool;
  return next();
};`,
		},
		"iiot-monitoring-platform": {
			filename: "src/workers/modbusMqttBridge.js",
			lang: "Concurrency Guard, ~1s PLC Polling & Batch PostgreSQL Ingestion",
			code: `// Prevent overlapping poll cycles per PLC + batch telemetry persistence
const inFlightDevices = new Set();

export const pollDeviceSafely = async (device) => {
  if (inFlightDevices.has(device.id)) return; // Backpressure guard on slow PLC
  inFlightDevices.add(device.id);
  try {
    const { data: regs } = await modbusClient.readHoldingRegisters(device.startReg, 32);
    const event = {
      deviceId: device.id,
      recordedAt: new Date().toISOString(),
      rpm: regs[4] * 10,
      status: regs[0] === 1 ? 'RUNNING' : 'IDLE',
    };
    telemetryQueue.push(event); // Flushed via parameterized batch INSERT
    mqttClient.publish(\`telemetry/\${device.id}/stream\`, JSON.stringify(event), { qos: 1 });
  } catch (err) {
    logger.warn(\`PLC poll skipped for \${device.id}: \${err.message}\`);
  } finally {
    inFlightDevices.delete(device.id);
  }
};`,
		},
		"production-tracking-workflow": {
			filename: "src/services/bomAndStageQuery.js",
			lang: "PostgreSQL Row Locking (Concurrency) + Cursor Pagination",
			code: `// 1. Concurrency-safe stage transition via pessimistic row lock (FOR UPDATE)
export const transitionProductionStage = async (db, batchId, targetStage) => {
  const client = await db.connect();
  try {
    await client.query('BEGIN');
    const { rows } = await client.query(
      'SELECT current_stage FROM production_batches WHERE id = $1 FOR UPDATE;',
      [batchId]
    );
    if (!WORKFLOW_GRAPH[rows[0]?.current_stage]?.includes(targetStage)) {
      throw new Error('INVALID_STAGE_TRANSITION');
    }
    await client.query(
      'UPDATE production_batches SET current_stage = $1, updated_at = NOW() WHERE id = $2;',
      [targetStage, batchId]
    );
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

// 2. Keyset (cursor) pagination avoiding OFFSET scans on 1,000+ row BOM reports
export const fetchBomReportPage = (db, { projectId, cursorCreatedAt, cursorId, limit = 50 }) =>
  db.query(
    \`SELECT id, part_code, stage, qty_required, created_at
     FROM bom_items
     WHERE project_id = $1
       AND ($2::timestamptz IS NULL OR (created_at, id) < ($2, $3))
     ORDER BY created_at DESC, id DESC
     LIMIT $4;\`,
    [projectId, cursorCreatedAt || null, cursorId || null, limit]
  );`,
		},
		"production-energy-monitoring": {
			filename: "src/workers/energyRollup.js",
			lang: "SQL Time-Bucket Rollup & Idempotent Transactional Upsert",
			code: `// Hourly Energy & Runtime Rollup inside Explicit Transaction
export const rollupHourlyEnergy = async (db, bucketStartIso) => {
  const client = await db.connect();
  try {
    await client.query('BEGIN');
    await client.query(
      \`INSERT INTO machine_energy_hourly (device_id, bucket_hour, kwh_consumed, run_seconds)
       SELECT device_id, date_trunc('hour', recorded_at) AS bucket_hour,
              SUM(delta_kwh), COUNT(*) FILTER (WHERE status = 'RUNNING')
       FROM raw_telemetry
       WHERE recorded_at >= $1 AND recorded_at < ($1::timestamptz + INTERVAL '1 hour')
       GROUP BY device_id, bucket_hour
       ON CONFLICT (device_id, bucket_hour)
       DO UPDATE SET kwh_consumed = EXCLUDED.kwh_consumed,
                     run_seconds = EXCLUDED.run_seconds;\`,
      [bucketStartIso]
    );
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};`,
		},
	};

	const snippet = snippets[projectId] || snippets["enterprise-erp-saas"];

	return (
		<div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 font-mono text-xs overflow-hidden">
			{/* Header */}
			<div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px]">
				<div className="flex items-center gap-2">
					<span className="text-blue-400 font-bold">//</span>
					<span className="text-slate-200 font-semibold">{snippet.filename}</span>
				</div>
				<div className="flex items-center gap-3">
					<span className="text-zinc-500 hidden sm:inline">[{snippet.lang}]</span>
					<button
						type="button"
						onClick={() => copy("contract", snippet.code)}
						className="px-2.5 py-1 border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
					>
						{isCopied("contract") ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
						<span>{isCopied("contract") ? "COPIED" : "COPY SNIPPET"}</span>
					</button>
				</div>
			</div>

			{/* Syntax block */}
			<pre className="p-4 overflow-x-auto text-xs leading-relaxed text-zinc-300 font-mono select-all">
				<code>{snippet.code}</code>
			</pre>
		</div>
	);
}
