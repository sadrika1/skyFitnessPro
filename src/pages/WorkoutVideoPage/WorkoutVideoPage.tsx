import { WorkoutProgressBars } from "../../components/WorkoutVideoBranch/WorkoutPrgressBars";
import { WorkoutVideo } from "../../components/WorkoutVideoBranch/WorkoutVideo";

export function WorkoutVideoPage() {
  return (
    <div className="bg-slate-400 flex justify-center h-screen">
      <div className="w-full max-w-screen-xl mx-4">
        <WorkoutVideo />
        <WorkoutProgressBars />
      </div>
    </div>
  );
}
