'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import Footer from './Footer';

const USD_RATE = 7.8;

// ── Icons ────────────────────────────────────────────────────────────────────
function SpoolIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="12" rx="8" ry="3.5" />
      <path d="M4 12v4c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-4" />
      <circle cx="12" cy="12" r="1.4" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />
    </svg>
  );
}

function CoinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.5 9.2c-.6-.7-1.5-1.1-2.6-1.1-1.7 0-2.9.9-2.9 2.1 0 1.1.9 1.6 2.6 1.9l.7.1c1.7.3 2.6.9 2.6 2 0 1.3-1.2 2.2-3 2.2-1.2 0-2.2-.4-2.8-1.2M12 6.5v1.6m0 7.8V18" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 7h15M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7m1.5 0v12a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 6 19V7m4 4v6m4-6v6" />
    </svg>
  );
}

function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 4.5v3M12 16.5v3M4.5 12h3M16.5 12h3M6.7 6.7l2.1 2.1M15.2 15.2l2.1 2.1M6.7 17.3l2.1-2.1M15.2 8.8l2.1-2.1" />
    </svg>
  );
}

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PrinterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="6" y="3" width="12" height="6" rx="1" />
      <rect x="4" y="9" width="16" height="9" rx="2" />
      <rect x="7" y="14" width="10" height="6" rx="1" />
      <circle cx="17" cy="12" r=".8" fill="currentColor" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function CompactIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="3" rx="1" />
      <rect x="3" y="11" width="18" height="3" rx="1" />
      <rect x="3" y="17" width="18" height="3" rx="1" />
    </svg>
  );
}

// ── Field ────────────────────────────────────────────────────────────────────
interface FieldProps {
  id: string;
  label: string;
  unit: string;
  value: string;
  onChange: (v: string) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  icon?: React.ReactNode;
}

function Field({ id, label, unit, value, onChange, min, max, step, placeholder, icon }: FieldProps) {
  const [focused, setFocused] = useState(false);
  const filled = value !== '' && value != null;
  return (
    <div className={`field ${focused ? 'field--focus' : ''} ${filled ? 'field--filled' : ''}`}>
      {icon && <div className="field__icon">{icon}</div>}
      <div className="field__body">
        <label htmlFor={id} className="field__label">{label}</label>
        <div className="field__inputrow">
          <input
            id={id}
            type="number"
            inputMode="decimal"
            value={value}
            placeholder={placeholder}
            min={min}
            max={max}
            step={step}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <span className="field__unit">{unit}</span>
        </div>
      </div>
    </div>
  );
}

// ── WasteSlider ──────────────────────────────────────────────────────────────
function WasteSlider({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="waste">
      <div className="waste__hd">
        <div>
          <div className="waste__label">Porcentaje de desperdicio</div>
          <div className="waste__hint">Soporte, retracciones, fallos típicos</div>
        </div>
        <div className="waste__val">
          <span className="waste__num">{value}</span>
          <span className="waste__pct">%</span>
        </div>
      </div>
      <div className="waste__track">
        <input
          type="range"
          min="0"
          max="50"
          step="1"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="waste__input"
          aria-label="Porcentaje de desperdicio"
        />
        <div className="waste__fill" style={{ width: `${(value / 50) * 100}%` }} />
        <div className="waste__ticks">
          {[0, 10, 20, 30, 40, 50].map((t) => (
            <span key={t} className={`waste__tick ${value >= t ? 'on' : ''}`}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CurrencyToggle ───────────────────────────────────────────────────────────
function CurrencyToggle({ value, onChange }: { value: 'GTQ' | 'USD'; onChange: (v: 'GTQ' | 'USD') => void }) {
  return (
    <div className="curr">
      <div className="curr__label">Moneda</div>
      <div className="curr__group" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={value === 'GTQ'}
          className={`curr__btn ${value === 'GTQ' ? 'on' : ''}`}
          onClick={() => onChange('GTQ')}
        >
          <span className="curr__sym">Q.</span>
          <span className="curr__name">Quetzales</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={value === 'USD'}
          className={`curr__btn ${value === 'USD' ? 'on' : ''}`}
          onClick={() => onChange('USD')}
        >
          <span className="curr__sym">$</span>
          <span className="curr__name">Dólares</span>
        </button>
      </div>
      <div className="curr__rate">1 USD = Q. 7.80</div>
    </div>
  );
}

// ── Result types ─────────────────────────────────────────────────────────────
interface CalcResult {
  filament: number;
  energy: number;
  depreciation: number;
  hasDepreciation: boolean;
  total: number;
  totalGrams: number;
  kWh: number;
  timeStr: string;
}

// ── ResultCard ───────────────────────────────────────────────────────────────
function ResultCard({
  result,
  currency,
  calculated,
  isLive,
}: {
  result: CalcResult | null;
  currency: 'GTQ' | 'USD';
  calculated: boolean;
  isLive: boolean;
}) {
  const sym = currency === 'GTQ' ? 'Q.' : '$';
  const rate = currency === 'USD' ? 1 / USD_RATE : 1;
  const fmt = (n: number) =>
    (n * rate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const isEmpty = !result || result.total === 0;
  const filamentPct = result && result.total > 0 ? (result.filament / result.total) * 100 : 0;
  const energyPct = result && result.total > 0 ? (result.energy / result.total) * 100 : 0;
  const depPct = result && result.total > 0 && result.hasDepreciation
    ? (result.depreciation / result.total) * 100
    : 0;

  return (
    <div className={`result ${calculated ? 'result--final' : ''} ${isLive && !calculated ? 'result--live' : ''}`}>
      <div className="result__hd">
        <div className="result__title">
          <span>Costo total</span>
          {!calculated && !isEmpty && (
            <span className="result__chip">
              <span className="result__chip-dot" />
              vista previa
            </span>
          )}
          {calculated && (
            <span className="result__chip result__chip--ok">
              <SparkleIcon width="12" height="12" />
              calculado
            </span>
          )}
        </div>
      </div>

      <div className="result__total">
        <span className="result__total-sym">{sym}</span>
        <span className="result__total-num">{fmt(result?.total ?? 0)}</span>
      </div>

      {!isEmpty && (
        <div className="result__bar">
          <div className="result__bar-fil" style={{ width: `${filamentPct}%` }} />
          <div className="result__bar-eng" style={{ width: `${energyPct}%` }} />
          {result?.hasDepreciation && (
            <div className="result__bar-dep" style={{ width: `${depPct}%` }} />
          )}
        </div>
      )}

      <div className="result__breakdown">
        <div className="result__row">
          <div className="result__row-l">
            <span className="result__dot result__dot--fil" />
            <span>Filamento</span>
            {!isEmpty && <span className="result__pct">{filamentPct.toFixed(0)}%</span>}
          </div>
          <div className="result__row-r">
            <span className="result__row-sym">{sym}</span>
            <span className="result__row-num">{fmt(result?.filament ?? 0)}</span>
          </div>
        </div>
        <div className="result__row">
          <div className="result__row-l">
            <span className="result__dot result__dot--eng" />
            <span>Energía</span>
            {!isEmpty && <span className="result__pct">{energyPct.toFixed(0)}%</span>}
          </div>
          <div className="result__row-r">
            <span className="result__row-sym">{sym}</span>
            <span className="result__row-num">{fmt(result?.energy ?? 0)}</span>
          </div>
        </div>
        {result?.hasDepreciation && (
          <div className="result__row">
            <div className="result__row-l">
              <span className="result__dot result__dot--dep" />
              <span>Depreciación</span>
              <span className="result__pct">{depPct.toFixed(0)}%</span>
            </div>
            <div className="result__row-r">
              <span className="result__row-sym">{sym}</span>
              <span className="result__row-num">{fmt(result.depreciation)}</span>
            </div>
          </div>
        )}
      </div>

      {isEmpty && (
        <div className="result__empty">
          <div className="result__empty-icon">
            <SpoolIcon width="22" height="22" />
          </div>
          <div className="result__empty-text">
            Llena los campos para ver el costo estimado
          </div>
        </div>
      )}

      {!isEmpty && result && (
        <div className="result__meta">
          <div className="result__meta-row">
            <span>Filamento usado</span>
            <span className="result__meta-val">{result.totalGrams.toFixed(1)} g</span>
          </div>
          <div className="result__meta-row">
            <span>Energía consumida</span>
            <span className="result__meta-val">{result.kWh.toFixed(3)} kWh</span>
          </div>
          <div className="result__meta-row">
            <span>Tiempo total</span>
            <span className="result__meta-val">{result.timeStr}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────────────────────
export default function FilacalcApp() {
  const [dark, setDark] = useState(false);
  const [density, setDensity] = useState<'comfy' | 'compact'>('comfy');

  const [grams, setGrams] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [pricePerKg, setPricePerKg] = useState('');
  const [kwhCost, setKwhCost] = useState('2');
  const [watts, setWatts] = useState('350');
  const [waste, setWaste] = useState(10);
  const [currency, setCurrency] = useState<'GTQ' | 'USD'>('GTQ');
  const [includeDepr, setIncludeDepr] = useState(false);
  const [machineCost, setMachineCost] = useState('');
  const [lifespan, setLifespan] = useState('');
  const [calculated, setCalculated] = useState(false);
  const [pulse, setPulse] = useState(false);

  const result = useMemo<CalcResult | null>(() => {
    const g = parseFloat(grams) || 0;
    const h = parseFloat(hours) || 0;
    const m = parseFloat(minutes) || 0;
    const ppk = parseFloat(pricePerKg) || 0;
    const kwh = parseFloat(kwhCost) || 0;
    const w = parseFloat(watts) || 0;

    if (g === 0 && h === 0 && m === 0) return null;

    const totalGrams = g * (1 + waste / 100);
    const filamentCost = (totalGrams / 1000) * ppk;
    const totalHours = h + m / 60;
    const energyKwh = (w * totalHours) / 1000;
    const energyCost = energyKwh * kwh;

    let depreciationCost = 0;
    const mc = parseFloat(machineCost) || 0;
    const ls = parseFloat(lifespan) || 0;
    if (includeDepr && mc > 0 && ls > 0) {
      depreciationCost = (mc / (ls * 365 * 24)) * totalHours;
    }

    const total = filamentCost + energyCost + depreciationCost;

    const totalMins = Math.round(h * 60 + m);
    const hh = Math.floor(totalMins / 60);
    const mm = totalMins % 60;
    const timeStr = hh > 0 ? `${hh}h ${mm}m` : `${mm}m`;

    return {
      filament: filamentCost,
      energy: energyCost,
      depreciation: depreciationCost,
      hasDepreciation: includeDepr && mc > 0 && ls > 0,
      total,
      totalGrams,
      kWh: energyKwh,
      timeStr,
    };
  }, [grams, hours, minutes, pricePerKg, kwhCost, watts, waste, includeDepr, machineCost, lifespan]);

  const isLive = result !== null;
  const canCalc = isLive;

  useEffect(() => {
    if (calculated) setCalculated(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grams, hours, minutes, pricePerKg, kwhCost, watts, waste, currency, includeDepr, machineCost, lifespan]);

  const handleCalculate = useCallback(() => {
    if (!canCalc) return;
    setCalculated(true);
    setPulse(true);
    setTimeout(() => setPulse(false), 600);
  }, [canCalc]);

  const handleReset = useCallback(() => {
    setGrams(''); setHours(''); setMinutes('');
    setPricePerKg(''); setKwhCost('2'); setWatts('350');
    setWaste(10); setCurrency('GTQ');
    setIncludeDepr(false); setMachineCost(''); setLifespan('');
    setCalculated(false);
  }, []);

  const ctaClass = `cta ${canCalc ? '' : 'cta--disabled'} ${pulse ? 'cta--pulse' : ''}`.trim();

  return (
    <div
      className="page"
      data-theme={dark ? 'dark' : 'light'}
      data-density={density}
    >
      <div className="bg-grain" />
      <div className="bg-blob bg-blob--1" />
      <div className="bg-blob bg-blob--2" />

      <header className="topbar">
        <div className="brand">
          <div className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
              <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.12" />
              <ellipse cx="16" cy="16" rx="9" ry="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <path d="M7 16v3c0 2.2 4 4 9 4s9-1.8 9-4v-3" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <circle cx="16" cy="16" r="1.6" fill="currentColor" />
            </svg>
          </div>
          <div className="brand__text">
            <div className="brand__name">Filacalc</div>
            <div className="brand__tag">Costos honestos para tus impresiones 3D</div>
          </div>
        </div>
        <div className="topbar__actions">
          <a href="#como-funciona" className="ghost-btn" aria-label="¿Cómo funciona?">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
                 strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 17v-5" />
              <path d="M12 8h.01" />
            </svg>
            <span>¿Cómo funciona?</span>
          </a>
          <button
            className="ghost-btn ghost-btn--icon"
            type="button"
            onClick={() => setDensity(d => d === 'comfy' ? 'compact' : 'comfy')}
            aria-label={density === 'comfy' ? 'Modo compacto' : 'Modo cómodo'}
            title={density === 'comfy' ? 'Modo compacto' : 'Modo cómodo'}
          >
            <CompactIcon width="15" height="15" />
          </button>
          <button
            className="ghost-btn ghost-btn--icon"
            type="button"
            onClick={() => setDark(d => !d)}
            aria-label={dark ? 'Modo claro' : 'Modo oscuro'}
            title={dark ? 'Modo claro' : 'Modo oscuro'}
          >
            {dark ? <SunIcon width="15" height="15" /> : <MoonIcon width="15" height="15" />}
          </button>
          <button
            className="ghost-btn"
            onClick={handleReset}
            type="button"
            aria-label="Reiniciar"
          >
            <TrashIcon width="14" height="14" />
            <span>Reiniciar</span>
          </button>
        </div>
      </header>

      <main className="layout">
        {/* LEFT — Inputs */}
        <div className="col col--inputs">
          {/* Section 1 — Proyecto */}
          <section className="card">
            <div className="card__hd">
              <div className="card__num">1</div>
              <div>
                <h2 className="card__title">Proyecto</h2>
                <p className="card__sub">Detalles de la impresión que vas a calcular</p>
              </div>
            </div>
            <div className="card__body">
              <Field
                id="grams"
                icon={<SpoolIcon width="20" height="20" />}
                label="Peso del filamento"
                unit="g"
                value={grams}
                onChange={setGrams}
                min={0}
                step={0.1}
                placeholder="0"
              />
              <div className="grid-2">
                <Field
                  id="hours"
                  icon={<ClockIcon width="20" height="20" />}
                  label="Horas"
                  unit="h"
                  value={hours}
                  onChange={setHours}
                  min={0}
                  step={0.1}
                  placeholder="0"
                />
                <Field
                  id="minutes"
                  label="Minutos"
                  unit="min"
                  value={minutes}
                  onChange={(v) => {
                    if (v === '') { setMinutes(''); return; }
                    const n = Math.max(0, Math.min(59, parseInt(v) || 0));
                    setMinutes(String(n));
                  }}
                  min={0}
                  max={59}
                  step={1}
                  placeholder="0"
                />
              </div>
            </div>
          </section>

          {/* Section 2 — Costos */}
          <section className="card">
            <div className="card__hd">
              <div className="card__num">2</div>
              <div>
                <h2 className="card__title">Costos</h2>
                <p className="card__sub">Tarifas de tu material, energía y máquina</p>
              </div>
            </div>
            <div className="card__body">
              <Field
                id="ppk"
                icon={<CoinIcon width="20" height="20" />}
                label="Precio del filamento"
                unit="Q. / kg"
                value={pricePerKg}
                onChange={setPricePerKg}
                min={0}
                step={0.01}
                placeholder="0.00"
              />
              <div className="grid-2">
                <Field
                  id="kwh"
                  icon={<BoltIcon width="20" height="20" />}
                  label="Electricidad"
                  unit="Q. / kWh"
                  value={kwhCost}
                  onChange={setKwhCost}
                  min={0}
                  step={0.01}
                  placeholder="2.00"
                />
                <Field
                  id="watts"
                  label="Potencia"
                  unit="W"
                  value={watts}
                  onChange={setWatts}
                  min={0}
                  step={1}
                  placeholder="350"
                />
              </div>
              <WasteSlider value={waste} onChange={setWaste} />
            </div>
          </section>

          {/* Section 3 — Depreciación (toggle) */}
          <section className={`card card--toggle ${includeDepr ? 'card--toggle-on' : ''}`}>
            <label className="depr__toggle">
              <input
                type="checkbox"
                checked={includeDepr}
                onChange={(e) => setIncludeDepr(e.target.checked)}
              />
              <span className="depr__check" aria-hidden="true">
                {includeDepr && <CheckIcon width="14" height="14" />}
              </span>
              <span className="depr__icon">
                <PrinterIcon width="20" height="20" />
              </span>
              <div className="depr__text">
                <span className="depr__title">Incluir depreciación de máquina</span>
                <span className="depr__sub">Suma el desgaste de la impresora al costo final</span>
              </div>
              <span className="depr__caret" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
                     strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </label>
            <div className={`depr__panel ${includeDepr ? 'depr__panel--open' : ''}`}>
              <div className="depr__inner">
                <div className="grid-2">
                  <Field
                    id="machineCost"
                    icon={<CoinIcon width="20" height="20" />}
                    label="Costo de máquina"
                    unit="Q."
                    value={machineCost}
                    onChange={setMachineCost}
                    min={0}
                    step={1}
                    placeholder="2500"
                  />
                  <Field
                    id="lifespan"
                    label="Vida útil"
                    unit="años"
                    value={lifespan}
                    onChange={setLifespan}
                    min={0.5}
                    step={0.1}
                    placeholder="3"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 — Moneda */}
          <section className="card">
            <div className="card__hd">
              <div className="card__num">4</div>
              <div>
                <h2 className="card__title">Moneda</h2>
                <p className="card__sub">Cambia la unidad del resultado</p>
              </div>
            </div>
            <div className="card__body">
              <CurrencyToggle value={currency} onChange={setCurrency} />
            </div>
          </section>

          {/* CTA — desktop */}
          <div className="cta-wrap cta-wrap--desktop">
            <button
              type="button"
              className={ctaClass}
              onClick={handleCalculate}
              disabled={!canCalc}
            >
              <span className="cta__label">Calcular costo</span>
              <span className="cta__icon"><ArrowIcon width="18" height="18" /></span>
            </button>
            {!canCalc && (
              <div className="cta__hint">Llena al menos peso o tiempo para calcular</div>
            )}
          </div>
        </div>

        {/* RIGHT — Result sticky */}
        <div className="col col--result">
          <div className="sticky">
            <ResultCard
              result={result}
              currency={currency}
              calculated={calculated}
              isLive={isLive}
            />
            {/* CTA — mobile */}
            <div className="cta-wrap cta-wrap--mobile">
              <button
                type="button"
                className={ctaClass}
                onClick={handleCalculate}
                disabled={!canCalc}
              >
                <span className="cta__label">Calcular costo</span>
                <span className="cta__icon"><ArrowIcon width="18" height="18" /></span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── Sección informativa ───────────────────────────────────────────── */}
      <section id="como-funciona" style={{ maxWidth: 860, margin: '48px auto 0', scrollMarginTop: 24 }}>

        {/* Encabezado */}
        <div style={{ marginBottom: 20 }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400,
            letterSpacing: '-0.01em', color: 'var(--ink)', margin: '0 0 6px',
          }}>
            ¿Cómo funciona Filacalc?
          </h2>
          <p style={{ fontSize: 14.5, color: 'var(--ink-3)', margin: 0 }}>
            Guía rápida para obtener un costo real y sin sorpresas
          </p>
        </div>

        {/* Grid de cards informativas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14, marginBottom: 14 }}>

          {/* Card 1 — Cómo usar */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: 'var(--accent-soft)', color: 'var(--accent)',
                display: 'grid', placeItems: 'center', border: '1px solid color-mix(in srgb, var(--accent) 20%, transparent)',
              }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
                     strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 400, color: 'var(--ink)', margin: 0 }}>
                Paso a paso
              </h3>
            </div>
            <ol style={{ margin: 0, paddingLeft: 18, color: 'var(--ink-2)', fontSize: 13.5, lineHeight: 1.75 }}>
              <li>Ingresa el <strong style={{ color: 'var(--ink)' }}>peso en gramos</strong> que usa tu modelo (lo da el slicer)</li>
              <li>Agrega el <strong style={{ color: 'var(--ink)' }}>tiempo de impresión</strong> en horas y minutos</li>
              <li>Llena el <strong style={{ color: 'var(--ink)' }}>precio del filamento</strong> por kilo</li>
              <li>Ajusta la <strong style={{ color: 'var(--ink)' }}>tarifa eléctrica</strong> y la potencia de tu impresora</li>
              <li>Mueve el slider de <strong style={{ color: 'var(--ink)' }}>desperdicio</strong> según tu experiencia</li>
              <li>Presiona <strong style={{ color: 'var(--ink)' }}>Calcular costo</strong> ✓</li>
            </ol>
          </div>

          {/* Card 2 — Cómo funciona el cálculo */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: 'var(--accent-2-soft)', color: 'var(--accent-2)',
                display: 'grid', placeItems: 'center', border: '1px solid color-mix(in srgb, var(--accent-2) 20%, transparent)',
              }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
                     strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 400, color: 'var(--ink)', margin: 0 }}>
                La fórmula
              </h3>
            </div>
            <div style={{ color: 'var(--ink-2)', fontSize: 13.5, lineHeight: 1.75 }}>
              <p style={{ margin: '0 0 8px' }}>El costo total suma tres componentes:</p>
              <ul style={{ margin: '0 0 8px', paddingLeft: 18 }}>
                <li><strong style={{ color: 'var(--ink)' }}>Filamento</strong> = (gramos × factor desperdicio ÷ 1000) × precio/kg</li>
                <li><strong style={{ color: 'var(--ink)' }}>Energía</strong> = (watts × horas ÷ 1000) × tarifa kWh</li>
                <li><strong style={{ color: 'var(--ink)' }}>Depreciación</strong> = (costo impresora ÷ vida útil en horas) × horas usadas</li>
              </ul>
              <p style={{ margin: 0, fontSize: 12.5, color: 'var(--ink-3)' }}>
                Todo el cálculo ocurre en tu navegador — ningún dato sale de tu dispositivo.
              </p>
            </div>
          </div>

        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14, marginBottom: 32 }}>

          {/* Card 3 — Dónde buscar tarifa kWh */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: 'var(--accent-3-soft)', color: 'var(--accent-3)',
                display: 'grid', placeItems: 'center', border: '1px solid color-mix(in srgb, var(--accent-3) 20%, transparent)',
              }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
                     strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 400, color: 'var(--ink)', margin: 0 }}>
                ¿Dónde encuentro el costo del kWh?
              </h3>
            </div>
            <div style={{ color: 'var(--ink-2)', fontSize: 13.5, lineHeight: 1.75 }}>
              <p style={{ margin: '0 0 8px' }}>Busca en tu <strong style={{ color: 'var(--ink)' }}>recibo de luz</strong> una línea que diga:</p>
              <ul style={{ margin: '0 0 8px', paddingLeft: 18 }}>
                <li><em>&ldquo;Tarifa de energía&rdquo;</em> o <em>&ldquo;Cargo por kWh&rdquo;</em></li>
                <li><em>&ldquo;Precio unitario&rdquo;</em> o <em>&ldquo;Costo por consumo&rdquo;</em></li>
              </ul>
              <p style={{ margin: '0 0 6px' }}>
                En Guatemala la tarifa residencial típica ronda los{' '}
                <strong style={{ color: 'var(--ink)' }}>Q. 1.80 – Q. 2.40 / kWh</strong>{' '}
                dependiendo del distribuidor (EEGSA, Energuate) y el rango de consumo mensual.
              </p>
              <p style={{ margin: 0, fontSize: 12.5, color: 'var(--ink-3)' }}>
                Si no tienes el recibo a la mano, Q. 2.00 es un buen punto de partida.
              </p>
            </div>
          </div>

          {/* Card 4 — Dónde buscar potencia de la impresora */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: 'var(--surface-2)', color: 'var(--ink-2)',
                display: 'grid', placeItems: 'center', border: '1px solid var(--line)',
              }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
                     strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="M12 12h.01M6 12h.01M18 12h.01" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 400, color: 'var(--ink)', margin: 0 }}>
                ¿Dónde veo la potencia de mi impresora?
              </h3>
            </div>
            <div style={{ color: 'var(--ink-2)', fontSize: 13.5, lineHeight: 1.75 }}>
              <p style={{ margin: '0 0 8px' }}>Tienes varias opciones:</p>
              <ul style={{ margin: '0 0 8px', paddingLeft: 18 }}>
                <li><strong style={{ color: 'var(--ink)' }}>Etiqueta trasera</strong> de la impresora — busca &ldquo;Input&rdquo; o &ldquo;Max Power&rdquo; en vatios (W)</li>
                <li><strong style={{ color: 'var(--ink)' }}>Manual o ficha técnica</strong> del fabricante en su sitio web</li>
                <li><strong style={{ color: 'var(--ink)' }}>Fuente de poder</strong> — el adaptador o fuente suele indicar la potencia máxima</li>
              </ul>
              <p style={{ margin: 0, fontSize: 12.5, color: 'var(--ink-3)' }}>
                Valores típicos: Ender 3 ≈ 270 W · Bambu Lab A1 ≈ 1000 W · Prusa MK4 ≈ 360 W. La impresora no consume su máximo todo el tiempo, el promedio real es un 60–70 %.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
