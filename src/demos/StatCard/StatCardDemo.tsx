import React, { useState } from "react";
import { StatCard } from "../../../lib/components/StatCard";
import {
  ChangeType,
  StatCardVariant,
} from "../../../lib/components/StatCard/types";
import {
  Activity,
  ArrowUpRight,
  PieChart,
  User,
  BarChart2,
} from "lucide-react";
import "./StatCardDemo.css";

const StatCardDemo: React.FC = () => {
  const [variant, setVariant] = useState<StatCardVariant>(
    StatCardVariant.NUMBER
  );
  const [showChange, setShowChange] = useState(true);
  const [changeType, setChangeType] = useState<ChangeType>(ChangeType.INCREASE);
  const [changeValue, setChangeValue] = useState(12.5);
  const [showIcon, setShowIcon] = useState(true);
  const [showActionIcon, setShowActionIcon] = useState(true);
  const [progressValue, setProgressValue] = useState(73);
  const [showHelpIcon, setShowHelpIcon] = useState(false);

  // Generate sample chart data
  const lineChartData = Array.from({ length: 30 }, (_, i) => ({
    value: 20 + Math.floor(Math.random() * 30),
    label: `2025-05-${i + 1}`,
    date: `05/${i + 1}`,
  }));

  const barChartData = Array.from({ length: 20 }, (_, i) => ({
    value: 20 + Math.floor(Math.random() * 10),
    label: `2025-05-${i + 1}`,
    date: `05/${i + 1}`,
  }));

  const renderControls = () => (
    <div className="control-panel">
      <h3 className="control-title">Customize StatCard</h3>
      <div className="control-grid">
        <div className="control-group">
          <label>Variant</label>
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value as StatCardVariant)}
            className="control-select"
          >
            {Object.values(StatCardVariant).map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label>Change Type</label>
          <select
            value={changeType}
            onChange={(e) => setChangeType(e.target.value as ChangeType)}
            disabled={!showChange}
            className="control-select"
          >
            {Object.values(ChangeType).map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label>Change Value (%)</label>
          <input
            type="number"
            value={changeValue}
            onChange={(e) => setChangeValue(Number(e.target.value))}
            disabled={!showChange}
            min={0}
            max={100}
            step={0.1}
            className="control-input"
          />
        </div>

        {variant === StatCardVariant.PROGRESS_BAR && (
          <div className="control-group">
            <label>Progress Value (%)</label>
            <input
              type="number"
              value={progressValue}
              onChange={(e) => setProgressValue(Number(e.target.value))}
              min={0}
              max={100}
              step={1}
              className="control-input"
            />
          </div>
        )}

        <div className="control-group">
          <label>Options</label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showChange}
                onChange={(e) => setShowChange(e.target.checked)}
                className="checkbox-input"
              />
              <span>Show Change</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showIcon}
                onChange={(e) => setShowIcon(e.target.checked)}
                className="checkbox-input"
              />
              <span>Show Title Icon</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showActionIcon}
                onChange={(e) => setShowActionIcon(e.target.checked)}
                className="checkbox-input"
              />
              <span>Show Action Icon</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showHelpIcon}
                onChange={(e) => setShowHelpIcon(e.target.checked)}
                className="checkbox-input"
              />
              <span>Show Help Icon</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatCardPreview = () => {
    const titleIcon = showIcon ? (
      <Activity size={20} color="purple" />
    ) : undefined;
    const actionIcon = showActionIcon ? (
      <ArrowUpRight size={20} color="purple" />
    ) : undefined;
    const helpIconText = showHelpIcon
      ? "This is a helpful description of the statistic"
      : undefined;

    return (
      <div className="preview-section">
        <h3 className="preview-title">Preview</h3>
        <div className="preview-card">
          <StatCard
            variant={variant}
            title="Active Users"
            value="2,573"
            subtitle="Last 7 days"
            change={
              showChange
                ? {
                    type: changeType,
                    value: changeValue,
                  }
                : undefined
            }
            chartData={
              variant === StatCardVariant.LINE ||
              variant === StatCardVariant.BAR
                ? variant === StatCardVariant.LINE
                  ? lineChartData
                  : barChartData
                : undefined
            }
            progressValue={
              variant === StatCardVariant.PROGRESS_BAR
                ? progressValue
                : undefined
            }
            titleIcon={titleIcon}
            actionIcon={actionIcon}
            helpIconText={helpIconText}
          />
        </div>
      </div>
    );
  };

  const renderPresetExamples = () => (
    <div className="presets-section">
      <h3 className="presets-title">Preset Examples</h3>
      <div className="presets-grid">
        <div className="preset-item">
          <p className="preset-label">Number Variant</p>
          <StatCard
            variant={StatCardVariant.NUMBER}
            title="Total Revenue"
            value="$45,231"
            change={{ type: ChangeType.INCREASE, value: 12.5 }}
            titleIcon={<PieChart size={20} />}
            actionIcon={<ArrowUpRight size={20} />}
            helpIconText="Total revenue generated in the last 30 days"
          />
        </div>

        <div className="preset-item">
          <p className="preset-label">Line Chart Variant</p>
          <StatCard
            variant={StatCardVariant.LINE}
            title="Daily Active Users"
            value="2,573"
            change={{ type: ChangeType.INCREASE, value: 8.2 }}
            chartData={lineChartData}
            titleIcon={<User size={20} />}
            actionIcon={<ArrowUpRight size={20} />}
          />
        </div>

        <div className="preset-item">
          <p className="preset-label">Bar Chart Variant</p>
          <StatCard
            variant={StatCardVariant.BAR}
            title="Transactions"
            value="12,543"
            change={{ type: ChangeType.DECREASE, value: 3.7 }}
            chartData={barChartData}
            titleIcon={<BarChart2 size={20} />}
            actionIcon={<ArrowUpRight size={20} />}
          />
        </div>

        <div className="preset-item">
          <p className="preset-label">Progress Bar Variant</p>
          <StatCard
            variant={StatCardVariant.PROGRESS_BAR}
            title="Payment Methods"
            value="73%"
            change={{ type: ChangeType.INCREASE, value: 5.2 }}
            progressValue={73}
            titleIcon={<Activity size={20} />}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="interactive-demo">
      <h2 className="demo-title">Interactive Stat Card Demo</h2>
      {renderControls()}
      {renderStatCardPreview()}
      {renderPresetExamples()}
    </div>
  );
};

export default StatCardDemo;
