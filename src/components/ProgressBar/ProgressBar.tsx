type ProgressBarProps = {
    percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <>
      <div className="w-80 bg-slate-100 rounded-full h-1.5">
        <div className="h-full rounded-full bg-custom-progress-blue" style={{ width: `${percentage}%` }}></div>
      </div>
    </>
  );
}
